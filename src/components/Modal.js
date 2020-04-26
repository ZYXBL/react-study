import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node)
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node)
  }
  render() {
    return createPortal(<div className="dialog">
      {this.props.children}
      Modal
    </div>, this.node);
  }
}

export default Modal;