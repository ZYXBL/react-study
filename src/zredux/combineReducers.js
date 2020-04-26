export default function combineReducers(reducers) {
  return (state = {}, action) => {
    let newState = {};
    let hasChanged = false;

    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key];
      const prevState = state[key];
      newState[key] = reducer(prevState, action);
      hasChanged = newState[key] !== prevState;
    });

    hasChanged = hasChanged || reducers.length !== Object.keys(state).length;

    return hasChanged ? newState : state;
  }
}