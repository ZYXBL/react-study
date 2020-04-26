import React from 'react';
import useForm from './useForm';
import FieldConetxt from './FieldContext';


export default function Form({ children, onFinish, onFinishFailed, form }, ref) {
  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({
    onFinish, onFinishFailed
  })
  // console.log('formInstance', formInstance)
  return <form onSubmit={(event) => {
    event.preventDefault()
    event.stopPropagation()
    formInstance.submit()
  }}>

    <FieldConetxt.Provider value={formInstance}>
      {children}
    </FieldConetxt.Provider>
  </form>
}