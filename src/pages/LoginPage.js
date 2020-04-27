import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default connect(
  ({ user }) => ({ isLogin: user.isLogin }),
  {
    login: () => ({ type: 'LOGIN_SUCCESS' })
  }
)
  (class LoginPage extends Component {
    render() {
      const { location: { state }, isLogin, login } = this.props;

      if (isLogin) {
        // 已登录
        const redirect = state ? state.redirect : '/';
        return <Redirect to={redirect} />
      }
      console.log(this.props)
      return (
        <div>
          <h1>LoginPage</h1>

          <button onClick={login}>login</button>
        </div>
      );
    }
  })
