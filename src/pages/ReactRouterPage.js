import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useHistory, useParams, useLoaction, withRouter } from '../k-react-dom-router';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import UsersPage from './UsersPage';
import _404Page from './_404Page';
// import PrivateRoute from '../components/PrivateRoute';

class ReactRouterPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>ReactRouterPage</h1>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/product/1223">商品</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登陆</Link>

          <Switch>
            {/* 渲染顺序 children > component > render */}
            <Route exact path="/"
              component={HomePage}
              children={ChildrenCmp}
              render={RenderCmp} />
            <Route path="/product/:id"
              component={() => <Product />} />
            {/* <PrivateRoute path="/user"
              component={UsersPage}
              render={RenderCmp} /> */}
            <Route path="/user"
              // component={UsersPage}
              render={() => <RenderCmp />} />
            {/* <Route path="/login" component={LoginPage} /> */}
            <Route component={_404Page} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function ChildrenCmp(props) {
  // console.log('children', props);

  return <div>ChildrenCmp</div>
}

function RenderCmp(props) {
  // console.log('render', props);

  return <div>renderCmp</div>
}


// function Product(props) {
//   // const { params: { id }, url } = match;
//   const match = useRouteMatch()
//   const history = useHistory()
//   const params = useParams()
//   const location = useLoaction()
//   console.log(match, history, location, params, '===')
//   return (
//     <div>
//       <h1>product</h1>
//       <h1>Product - {params.id}</h1>
//       {/* <Link to={url + '/detail'}>detail</Link>
//       <Route path={url + '/detail'} component={Detail} /> */}
//     </div>
//   )
// }

// function Detail(props) {
//   console.log('detail', props)
//   return (
//     <div>
//       <h1>Detail</h1>
//     </div>
//   )
// }

@withRouter
class Product extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>Product-{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default ReactRouterPage;