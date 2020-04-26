import React from 'react';

class FormStore {
  constructor() {
    this.store = {}
    this.fieldEntries = new Map();
    this.callbacks = {}
  }

  setCallbacks = cb => {
    this.callbacks = {
      ...this.callbacks,
      ...cb
    }
  }

  // 注册
  registerField = entity => {
    const { name } = entity.props;
    this.fieldEntries.set(name, entity)
    return () => {
      this.fieldEntries.delete(name);
      delete this.store[name];
    }
  }

  getFieldValue = name => {
    return this.store[name]
  }

  getFieldsValue = () => {
    return this.store
  }
  setFieldsValue = newStore => {
    this.store = {
      ...this.store,
      ...newStore
    }
    // console.log('store', this.store);

    // console.log('----', this.fieldEntries);
    Object.keys(newStore).forEach(name => {
      const entity = this.fieldEntries.get(name);
      console.log(entity);
      entity.onStoreChange()
    })
    // this.fieldEntries.forEach(entity => {
    //   const { name } = entity.props;
    //   if (this.getFieldValue(name) !== undefined) {
    //     entity.onStoreChange()
    //   }
    // })
  }

  validate = () => {
    let err = [];
    this.fieldEntries.forEach(entity => {
      const { name, rules } = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === '')) {
        // error
        err.push({
          [name]: rules.message,
          value
        })
      }
    })
    return err;
  }

  submit = () => {
    console.log('submit', this.fieldEntries)

    const err = this.validate();
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      // 成功
      onFinish && onFinish(this.getFieldsValue())
    } else {
      onFinishFailed && onFinishFailed(this.getFieldsValue())
    }
  }
  getForm = () => {
    return {
      submit: this.submit,
      setCallbacks: this.setCallbacks,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue
    }
  }
}

export default function useForm(form) {
  const formRef = React.useRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // new ⼀个
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];

  // let res;
  // if (form) {
  //   res = form;
  // } else {
  //   // new 一个
  //   const formStore = new FormStore();
  //   res = formStore.getForm();
  // }
  // return [res]
}