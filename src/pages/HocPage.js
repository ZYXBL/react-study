import React, { Component } from 'react';

const foo = Cmp => props => {
  return (<div style={{ 'border': '1px dashed red', padding: '10px' }}>
    <Cmp {...props} />
  </div>)
}

const foo2 = Cmp => props => {
  return (
    <div style={{ border: '1px solid blue', padding: '20px' }}>
      <Cmp {...props} />
    </div>
  )
}

function Child(props) {
  return <div>child-{props.name}</div>
}

@foo
@foo2
@foo
class ClassChild extends Component {
  render() {
    return <div>ClassChild-{this.props.name}</div>;
  }
}

const Foo = foo(foo2(foo(Child)));


class HocPage extends Component {
  render() {
    return (
      <div>

        <h1>HocPage</h1>
        <Foo name="Child"></Foo>

        <ClassChild name="childNode"></ClassChild>
      </div>
    );
  }
}

export default HocPage;