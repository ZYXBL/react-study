import React, { Component } from 'react';
import Context from './Context';
import matchPath from './matchPath';

class Route extends Component {
  render() {
    return <Context.Consumer>
      {
        context => {
          const { location } = context;

          const { path, children, render, component, computedMatch } = this.props;
          // console.log(computedMatch, '===')
          // const matched = location.pathname === path
          const match = computedMatch ? computedMatch : path ? matchPath(location.pathname, this.props) : context.match;
          const props = {
            ...context,
            match
          }
          // console.log(match, path);
          // match按照互斥规则， 渲染优先顺序为children component render 或者 null（如果children是function优先渲染function）
          // 不match children 或 null （只渲染function）
          return <Context.Provider value={props}>
            {match
              ? children
                ? typeof children === 'function'
                  ? children(props)
                  : children
                : component
                  ? React.createElement(component)
                  : render
                    ? render(props)
                    : null
              : typeof children === 'function'
                ? children(props)
                : null}
          </Context.Provider>;
        }
      }
    </Context.Consumer>

  }
}

export default Route;