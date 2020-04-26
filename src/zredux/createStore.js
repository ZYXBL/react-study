export default function createStore(reducer, enhander) {
  if (enhander) {
    return enhander(createStore)(reducer)
  }
  let currentState;
  let currentListenners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);

    currentListenners.forEach(listenner => listenner());
  }

  function subscribe(listenner) {
    currentListenners.push(listenner)
  }

  dispatch({ type: 'asdasdasqwqwdqwwqdqwdqwd' })

  return {
    getState,
    dispatch,
    subscribe
  }
}