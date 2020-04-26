export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  let currentState;
  let listenners = [];

  // 获取当前store内的state
  function getState() {
    return currentState;
  }

  // 更改store并执行订阅
  function dispatch(action) {
    currentState = reducer(currentState, action);

    listenners.forEach(listenner => listenner());
  }

  function subscribe(listenner) {
    listenners.push(listenner);

    return () => {
      const index = listenners.indexOf(listenner);
      listenners.splice(index, 1);
    }
  }

  dispatch({ type: 'asdasdasdsandkasnbkasdnsaiuaduw' })

  return {
    getState,
    dispatch,
    subscribe
  }
}