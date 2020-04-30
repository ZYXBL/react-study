import React, { Component } from 'react';
import Context from './Context';

class Link extends Component {
  static contextType = Context

  handleClick = event => {
    event.preventDefault();

    const { history } = this.context;

    history.push(this.props.to);
  }

  render() {
    const { children, to } = this.props;

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default Link;