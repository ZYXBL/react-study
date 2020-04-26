import React, { useEffect, useState } from "react";
// import Form, { Field } from "rc-field-form";
// import Form, { Field } from "./my-rc-field-form/index";
import Form, { Field } from "./custom-form/index";
import Input from './Input';

const nameRules = {
  required: true, message: '请输入姓名！'
}
const passwordRules = {
  required: true, message: '请输入密码！'
}

export default function MyRCFieldForm() {
  const [form] = Form.useForm()
  const onFinish = val => {
    console.log('onFinish', val)
  }
  const onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };
  useEffect(() => {
    console.log('form', form)
    // form.setFieldsValue({ username: 'default' })
  }, [form]);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <button onClick={() => setShow(!show)}>change</button>
        {show && <Field name="username" rules={[nameRules]}>
          <Input />
        </Field>}
        <Field name="password" rules={[passwordRules]}>
          <Input type="password" />
        </Field>

        <button>submit</button>
      </Form>
    </div>
  )
}