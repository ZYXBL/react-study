import React, { Component } from 'react';
import Context from './Context';

class Field extends Component {
  static contextType = Context

  componentDidMount() {
    const { regirested } = this.context;
    regirested(this);
    // console.log(regirested)
  }

  onStoreChange = () => {
    console.log('render');
    this.forceUpdate()
  }

  getControled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldsValue } = this.context;
    // console.log(this.props, this.context)
    return {
      value: getFieldValue(name),
      onChange: event => {
        const val = event.target.value;
        setFieldsValue({ [name]: val })
      }
    }
  }

  render() {
    const { children } = this.props;
    const childrenNode = React.cloneElement(children, this.getControled())
    return childrenNode;
  }
}

export default Field;