import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux"; //stateやactionとコンポーネントの関連付けを行う、viewのイベントで状態を遷移→遷移後の状態を描写
import { increment, decrement } from "../actions";
//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能

class App extends Component {
  //初期化処理←reducerが行うので不要
  // constructor(props) {
  //   super();
  //   console.log(this.state);
  //   // this.state = { count: 0 };←reducerが行うので不要
  // }
  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1 }); //stateの状態変更
  //   // this.state={count:1}とかするのはダメ←setStateでrenderが実行される
  // };
  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 }); //stateの状態変更
  // };
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>count:{props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({ value: state.count.value }); //stateの情報からコンポーネントで必要なものを取り出して、コンポーネント内のpropsとしてマッピング、引数はstateでどういったオブジェクトを対応させるのか関数の戻り地として定義
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
}); //action発生時にreducerにタイプに応じた状態遷移を実行させるための関数　引数に必要となるdisatch関数を宣言　increment,decrementのクリック時にディスパッチに渡す
// const mapDispatchToProps=({increment,decrement})//←こう書いてもいい

//stateとactionをコンポーネントに関連付ける部分↓↓
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
