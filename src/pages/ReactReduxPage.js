import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default connect(
  // mapStateToProps function
  ({ count }) => ({ count }),
  // mapDispatchToProps function | object
  // {
  //   add: () => ({ type: 'ADD' })
  // }
  dispatch => {
    const add = () => dispatch({ type: 'ADD' });
    const minus = () => dispatch({ type: 'MINUS' });

    let creators = {
      add: () => ({ type: 'ADD' }),
      minus: () => ({ type: 'MINUS' })
    }

    creators = bindActionCreators(creators, dispatch);

    return {
      // add,
      // minus,
      ...creators,
      dispatch
    }
  }
)(
  class ReactReduxPage extends Component {
    dispatchAdd = () => {
      this.props.dispatch({ type: 'ADD' })
    }
    render() {
      console.log('props', this.props);
      const { count, add, minus } = this.props;
      return (
        <div>
          <h1>ReactReduxPage</h1>
          <p>{count}</p>
          <button onClick={this.dispatchAdd}>dispatch add</button>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      );
    }
  })

// export default ReactReduxPage;