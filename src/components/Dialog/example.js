/* eslint-disable react/jsx-no-bind*/
import React from 'react';

import Dialog from '.';
import Button from '../Button';

export default class DialogExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      normalButtonActive: false,
      otherButtonActive: false
    };
    this.handleDialogActivate = this.handleDialogActivate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleDialogActivate(type, args) {
    const key = `${type}ButtonActive`;
    if (this.state[key]) {
      this.props.clickHandler('onActionClick', args);
    }
    this.setState({
      [key]: !this.state[key]
    });
  }
  handleClose() {
    this.setState({
      normalButtonActive: false,
      otherButtonActive: false
    });
  }
  render() {
    const Action1 = () => (
      <Button onClick={this.handleDialogActivate.bind(this, 'other', 'Action 1 Payload')}>
        Action 1
      </Button>
    );

    const Action2 = () => (
      <Button onClick={this.handleDialogActivate.bind(this, 'other', 'Action 2 Payload')}>
        Action 2
      </Button>
    );
    return (
      <div>
        <p>Normal dialog with overlay</p>
        <Dialog
          active={this.state.normalButtonActive}
          actions={['Submit', 'Cancel']}
          onClose={this.handleClose}
          onActionClick={this.handleClose}
          overlay
        >
          <p>Here is some content that I would like to display</p>
        </Dialog>
        <Button onClick={this.handleDialogActivate.bind(this, 'normal')} text="Dialog" />
        <p>Dialog with pre-created actions</p>
        <Button onClick={this.handleDialogActivate.bind(this, 'other')} text="Custom Actions" />
        <Dialog
          active={this.state.otherButtonActive}
          actions={[<Action1 />, <Action2 />]}
          onClose={this.handleClose}
          overlay
        >
          <p>This one has custom actions</p>
        </Dialog>
      </div>
    );
  }
}
