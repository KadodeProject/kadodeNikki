import React, { Component } from "react";
import PropTypes from "prop-types";
//AppがクラスComponentを継承←クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 className="App-title">HelloWorld!</h1>
//       </React.Fragment>
//     );
//   }
// }

//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能
const App = () => <Counter></Counter>;
class Counter extends Component {
  //初期化処理
  constructor(props) {
    super();
    console.log(this.state);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 }); //stateの状態変更
    // this.state={count:1}とかするのはダメ←setStateでrenderが実行される
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 }); //stateの状態変更
  };
  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}
export default App;
