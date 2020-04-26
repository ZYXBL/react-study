// import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { createStore, applyMiddleware, combineReducers } from "../kredux";
import { createStore, applyMiddleware, combineReducers } from "../zredux";

export const counterReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload;
    case 'MINUS':
      return state - payload;

    default:
      return state;
  }
}

// const store = createStore(counterReducer, applyMiddleware(thunk, logger));
const store = createStore(combineReducers({ home: counterReducer }), applyMiddleware(thunk, logger));

// function logger({ getState }) {
//   return next => action => {
//     console.log('=======================');
//     console.log('prev state', getState());
//     console.log('action执行', action);
//     const returnValue = next(action);
//     console.log('next state', getState());
//     console.log('=======================');
//     return returnValue
//   }
// }

// function thunk({ dispatch, getState }) {
//   return next => action => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState)
//     }
//     return next(action)
//   }
// }

export default store;