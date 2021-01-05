import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux"; //stateやactionとコンポーネントの関連付けを行う、viewのイベントで状態を遷移→遷移後の状態を描写
// import { postEvents } from "../actions";
import { Link } from "react-router-dom";
//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// }); //action発生時にreducerにタイプに応じた状態遷移を実行させるための関数　引数に必要となるdisatch関数を宣言　increment,decrementのクリック時にディスパッチに渡す
// const mapDispatchToProps = { postEvents }; //←こう書いてもいい

//stateとactionをコンポーネントに関連付ける部分↓↓
export default connect(null, null)(EventsNew);
// export default App;
