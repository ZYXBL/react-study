import React, { Component } from 'react';
import Context from './Context';
import matchPath from './matchPath';

class Switch extends Component {
  render() {
    return (
      <Context.Consumer>
        {
          context => {
            let match, element;

            const { location } = context;
            console.log(match)
            React.Children.forEach(this.props.children, child => {
              if (match == null && React.isValidElement(child)) {
                element = child;
                const { path } = child.props;
                match = path ? matchPath(location.pathname, child.props) : context.match;
              }
            })
            console.log(match)
            return match ? React.cloneElement(element, { computedMatch: match }) : null;
          }
        }
      </Context.Consumer>
    );
  }
}

export default Switch;