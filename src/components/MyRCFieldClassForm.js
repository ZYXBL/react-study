import React, { Component } from 'react';
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "./my-rc-field-form";
import Input from './Input';

const nameRules = {
  required: true, message: '请输入姓名！'
}
const passwordRules = {
  required: true, message: '请输入密码！'
}

class MyRCFieldClassForm extends Component {
  formRef = React.createRef();

  state = {
    show: true
  }

  onFinish = val => {
    console.log('onFinish', val)
  }

  onFinishFailed = val => {
    console.log('onFinishFailed', val)
  }

  componentDidMount() {
    this.formRef.current.setFieldsValue({ username: 'default' })
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <h3>MyRCFieldClassForm</h3>

        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}>
          <button type="button" onClick={this.changeShow}>changeShow</button>
          {show && <Field name="username" rules={[nameRules]}>
            <Input />
          </Field>}
          <Field name="password" rules={[passwordRules]}>
            <Input type="password" />
          </Field>

          <button>submit</button>
        </Form>
      </div>
    );
  }
}

export default MyRCFieldClassForm;