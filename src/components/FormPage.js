import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const nameRules = {
  required: true, message: '请输入姓名！'
}

class FormPage extends Component {
  state = {}

  formRef = React.createRef();

  componentDidMount() {
    this.formRef.current.setFieldsValue({ name: 'default' })
  }

  onFinish = val => {
    console.log('onFinish', val)
  }
  onFinishFailed = val => {
    console.log('onFinishFailed', val)
  }
  render() {
    return (
      <div>
        <h3>FormPage</h3>
        <Form
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          ref={this.formRef}>
          <FormItem label="姓名" name="name" rules={[nameRules]}>
            <Input />
          </FormItem>
          <FormItem>
            <Button htmlType="submit">submint</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FormPage;