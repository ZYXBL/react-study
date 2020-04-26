import React, { Component } from 'react';
import { ThemeContext, UserContext } from '../Context';

export default class ConsumerPage extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {
          themeCtx => (
            <div>
              <div className={themeCtx.themeColor}>ConsumerPage</div>
              {
                <UserContext.Consumer>
                  { user => user.name }
                </UserContext.Consumer>
              }
            </div>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}