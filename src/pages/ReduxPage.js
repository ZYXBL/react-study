import React, { Component } from 'react';
import store from '../store/';

class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log('change');
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
  add = () => {
    store.dispatch({ type: 'ADD', payload: 100 })
  }
  asyAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'ADD', payload: 10 });
        // console.log('state', getState());
      }, 1000)
    })
  }
  render() {
    return (
      <div>
        <h1>ReduxPage</h1>

        <div>{store.getState().home}</div>

        <button onClick={this.add}>add</button>
        <button onClick={this.asyAdd}>asyAdd</button>
      </div>
    );
  }
}

export default ReduxPage;