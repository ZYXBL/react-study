import React from 'react';

function warn() {
  console.log('warn');
}

const Context = React.createContext({
  getFieldsValue: warn,
  getFieldValue: warn,
  setFieldsValue: warn
})

export default Context