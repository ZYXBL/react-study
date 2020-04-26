
class FormStore {
  constructor() {
    this.state = {}

    this.fieldEnties = [];

    this.callback = {}
  }

  setCallback = cb => {
    this.callback = {
      ...this.callback,
      ...cb
    }
  }

  validate = () => {
    let err = [];
    this.fieldEnties.forEach(entry => {
      const { rules, name } = entry.props;
      const rule = rules && rules[0];
      const val = this.state[name];
      if (rule && rule.required && !val) {
        // 错误
        err.push({ [name]: rule.message })
      }
    })
    return err;
  }

  submit = () => {
    const { onFinish, onFinishFailed } = this.callback;
    const error = this.validate();
    if (error.length) {
      // failed
      onFinishFailed && onFinishFailed(error);
    } else {
      onFinish && onFinish(this.state);
    }
  }

  regirested = entry => {
    this.fieldEnties.push(entry);
  }

  setFieldsValue = val => {
    this.state = {
      ...this.state,
      ...val
    }

    this.fieldEnties.forEach(entry => {
      const { name } = entry.props;
      if (val.hasOwnProperty(name)) entry.onStoreChange()
    })
  }

  getFieldValue = name => {
    return this.state[name]
  }

  getFieldsValue = () => {
    return this.state
  }

  getForm = () => {
    return {
      regirested: this.regirested,
      submit: this.submit,
      setCallback: this.setCallback,
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue
    }
  }
}

export default function useForm(form) {
  let res;
  if (form) {
    res = form;
  } else {
    const formStore = new FormStore();
    res = formStore.getForm();
  }
  return [res];
}