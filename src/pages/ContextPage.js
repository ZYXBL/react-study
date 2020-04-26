import React, { Component } from 'react';
import ContextTypePage from './ContextTypePage';
import UserPage from './UserPage';
import ConsumerPage from './ConsumerPage';
import { ThemeContext, UserContext } from '../Context';

// const ThemeContext = React.createContext();

export default class ContextPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      theme: {
        themeColor: 'pink'
      },
      user: {
        name: 'test'
      }
    }
  }
  changeColor = () => {
    const { theme: { themeColor } } = this.state;
    console.log(themeColor)
    this.setState({
      theme: {
        themeColor: themeColor === 'pink' ? 'red' : 'pink'
      }
    })
  }
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>change Color</button>
        <ThemeContext.Provider value={theme}>

          <ContextTypePage />

          <UserContext.Provider value={user}>
            <UserPage />
            <ConsumerPage />
          </UserContext.Provider>

        </ThemeContext.Provider>
        {/* <ContextTypePage {...theme}/> */}
      </div>
    )
  }
}