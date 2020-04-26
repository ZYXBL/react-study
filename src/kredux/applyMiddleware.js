export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    let store = createStore(reducer);
    let { dispatch, getState } = store;

    const midApi = {
      getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }
    const middlewareChain = middlewares.map(md => md(midApi))

    dispatch = compose(...middlewareChain)(dispatch)
    // console.log(dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

function compose(...funs) {
  if (funs.length === 0) {
    return arg => arg
  }

  return funs.reduce((a, b) => (...args) => a(b(...args)))
}