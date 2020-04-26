import React, { useReducer, useCallback, useEffect, useLayoutEffect } from 'react';
import { counterReducer } from '../store';

const init = initArg => {
  return initArg + 1;
}

export default function HooksPage() {
  const [state, dispatch] = useReducer(counterReducer, 0, init);

  const add = useCallback(() => {
    dispatch({ type: 'ADD' })
  }, [])

  useEffect(() => {
    console.log('useEffect');
  })

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  })
  console.log('--------')
  return <div>
    <h1>HooksPage</h1>
    <div>{state}</div>
    <button onClick={() => {
      dispatch({ type: 'ADD', payload: 111 })
    }}>add</button>
    <button onClick={add}>add</button>
  </div>
}