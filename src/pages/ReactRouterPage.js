import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UsersPage from './UsersPage';
import _404Page from './_404Page';

class ReactRouterPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>ReactRouterPage</h1>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登陆</Link>

          <Route exact path="/"
            component={HomePage}
            children={ChildrenCmp}
            render={renderCmp} />
          <Switch>
            {/* 渲染顺序 children > component > render */}
            <Route path="/user"
              component={UsersPage}
              render={renderCmp} />
            <Route path="/login" component={LoginPage} />
            <Route component={_404Page} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function ChildrenCmp(props) {
  console.log('children', props);

  return <div>ChildrenCmp</div>
}

function renderCmp(props) {
  console.log('render', props);

  return <div>renderCmp</div>
}

export default ReactRouterPage;