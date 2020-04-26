import React from 'react';
import useForm from './useForm';
import Context from './Context';

export default function Form({ children, onFinish, onFinishFailed, form }) {
  const [formInstance] = useForm(form);

  // React.useImperativeHandle(ref, () => formInstance);

  console.log(formInstance)
  formInstance.setCallback({
    onFinish,
    onFinishFailed
  })
  return <form
    onClick={
      event => {
        event.preventDefault();
        event.stopPropagation();
        // submit
        formInstance.submit();
      }
    }>
    <Context.Provider value={formInstance}>
      {children}
    </Context.Provider>
  </form>
}