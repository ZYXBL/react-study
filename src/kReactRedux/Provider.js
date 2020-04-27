import React from 'react';
import Context from './Context';

export function Provider({ children, store }) {
  return <Context.Provider value={store}>
    {children}
  </Context.Provider>
}