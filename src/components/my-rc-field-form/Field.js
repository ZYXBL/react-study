import React, { Component } from 'react';
import FieldContext from './FieldContext';

class Field extends Component {
  static contextType = FieldContext;

  componentDidMount() {
    const { registerField } = this.context;
    this.registerFieldCallback = registerField(this)
  }

  componentWillUnmount() {
    if (this.registerFieldCallback) {
      this.registerFieldCallback()
    }
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldsValue } = this.context;
    return {
      value: getFieldValue(name), // 取数据
      onChange: event => {
        const newVal = event.target.value;
        setFieldsValue({ [name]: newVal });
        // console.log('newVal', newVal);
      }
    }
  }

  render() {
    const { children } = this.props;

    const returnChildNode = React.cloneElement(children, this.getControlled());
    return returnChildNode;
  }
}

export default Field;