import React, { useContext, useReducer, useLayoutEffect } from 'react';
import Context from './Context';
import { bindActionCreators } from './bindActionCreators';

export const connect = (mapStateToPros, mapDispatchToPros) => WrappedComponent => props => {
  const store = useContext(Context);
  console.log(mapStateToPros);
  const { getState, dispatch, subscribe } = store;
  console.log('gets', getState());

  const stateProps = mapStateToPros(getState());
  let dispatchProps = { dispatch };

  if (typeof mapDispatchToPros === 'function') {
    dispatchProps = mapDispatchToPros(dispatch);
  } else if (typeof mapDispatchToPros === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToPros, dispatch);
  }

  const [, forceUpdate] = useReducer(x => x + 1, 0);
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      // forceUpdate
      forceUpdate();
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [subscribe])

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
}

export function useSelector(selector) {
  const store = useStore();
  const { getState, subscribe } = store;
  const selectState = selector(getState());

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [subscribe])

  return selectState;
}

export function useDispatch() {
  const store = useStore();
  return store.dispatch;
}

export function useStore() {
  return useContext(Context);
}