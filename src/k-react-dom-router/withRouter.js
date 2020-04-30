import React from 'react';
import Context from './Context';

export const withRouter = Component => props => {
  return <Context.Consumer>
    {
      context => {
        return <Component {...props} {...context} />
      }
    }
  </Context.Consumer>
}