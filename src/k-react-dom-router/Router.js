import React, { Component } from 'react';
import Context from './Context';

class Router extends Component {
  static computedRouteMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      location: props.history.location
    }

    this.unlisten = props.history.listen(location => {
      console.log(location, '====')
      this.setState({
        location
      })
    })
    // console.log(props.history.listen);
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten()
    }
  }
  render() {
    const { children, history } = this.props;
    // console.log(this.props)
    return <Context.Provider value={{ history, location: this.state.location, match: Router.computedRouteMatch(this.state.location.pathname) }}>
      {children}
    </Context.Provider>;
  }
}

export default Router;