import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(
  ({ user }) => ({ username: user.username }),
  dispatch => {
    const loginOut = () => dispatch({ type: 'LOGIN_OUT' })

    return {
      dispatch,
      loginOut
    }
  }
)(class HomePage extends Component {
  render() {
    const { username, loginOut } = this.props;
    return (
      <div>
        <h1>HomePage</h1>
        <p>{username}</p>

        <button onClick={loginOut}>loginOut</button>
      </div>
    );
  }
})
