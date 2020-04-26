import React, { Component, useContext } from 'react';
import { ThemeContext } from '../Context';

export default class ContextTypePage extends Component {
  static contextType = ThemeContext;
  changeColor = () => {
    const { themeColor } = this.context || {};
    console.log(themeColor)
    this.setState({
      theme: {
        themeColor: themeColor === 'pink' ? 'red' : 'pink'
      }
    })
  }
  render() {
    const { themeColor } = this.context || {};
    console.log(this);
    return (
      <div>
        <h3 className={themeColor}>ContextTypePage</h3>
        <button onClick={this.changeColor}>change Color</button>
        <Child />
      </div>
    )
  }
}

function Child (props) {
  const themeContext = useContext(ThemeContext);
  const { themeColor } = themeContext;
  return <div className={themeColor}>Child</div>;
}