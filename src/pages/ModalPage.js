import React, { Component } from 'react';
import Modal from '../components/Modal';

class ModalPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  change = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    const { show } = this.state;
    return (
      <div>
        <h1>ModalPage</h1>
        <button onClick={this.change}>change</button>

        {show && <Modal />}
      </div>
    );
  }
}

export default ModalPage;