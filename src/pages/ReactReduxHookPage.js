import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector, useDispatch } from '../kReactRedux';

export default function ReactReduxHookPage(props) {
  const count = useSelector(({ count }) => count);

  const dispatch = useDispatch()

  const add = useCallback(() => {
    dispatch({ type: 'ADD' })
  }, [dispatch])
  return (
    <div>
      <h1>ReactReduxHookPage</h1>

      <p>{count}</p>

      <button onClick={add}>add</button>
    </div>
  )
}