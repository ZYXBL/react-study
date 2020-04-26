import React from 'react';
import './App.css';
// import HooksPage from './pages/HooksPage';
import ReactReduxPage from './pages/ReactReduxPage';

// import ContextPage from './pages/ContextPage';
// import HocPage from './pages/HocPage';
// import ModalPage from './pages/ModalPage';
// import ReduxPage from './pages/ReduxPage';
// import FormPage from './components/FormPage';
// import MyRCFieldForm from './components/MyRCFieldForm';
// import MyRCFieldClassForm from './components/MyRCFieldClassForm';

function App() {
  return (
    <div className="App">
      {/* <ContextPage /> */}
      {/* <FormPage></FormPage> */}
      {/* <MyRCFieldForm></MyRCFieldForm> */}
      {/* <MyRCFieldClassForm></MyRCFieldClassForm> */}
      {/* <HocPage /> */}
      {/* <ModalPage /> */}
      {/* <ReduxPage /> */}
      {/* <HooksPage /> */}
      <ReactReduxPage />
    </div>
  );
}

// const arr = [1, 2, 3, 4];

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(arr.reduce(reducer, 10));

// function f1(arg) {
//   console.log('f1', arg);
//   return arg;
// }
// function f2(arg) {
//   console.log('f2', arg);
//   return arg;
// }
// function f3(arg) {
//   console.log('f3', arg);
//   return arg;
// }

// function compose(...funs) {
//   if (funs.length === 0) {
//     return arg => arg
//   }

//   return funs.reduce((a, b) => (...args) => a(b(...args)))
// }

// let dispatch = compose(f1, f2, f3);

// let res = dispatch('test');
// console.log('res:' + res);
export default App;
