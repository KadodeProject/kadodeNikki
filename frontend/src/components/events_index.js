import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux"; //stateやactionとコンポーネントの関連付けを行う、viewのイベントで状態を遷移→遷移後の状態を描写
import { readEvents } from "../actions";
//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能
import _ from "lodash";
class EventsIndex extends Component {
  //マウント次実行されるコールバック
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({ events: state.events }); //stateの情報からコンポーネントで必要なものを取り出して、コンポーネント内のpropsとしてマッピング、引数はstateでどういったオブジェクトを対応させるのか関数の戻り地として定義
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// }); //action発生時にreducerにタイプに応じた状態遷移を実行させるための関数　引数に必要となるdisatch関数を宣言　increment,decrementのクリック時にディスパッチに渡す
const mapDispatchToProps = { readEvents }; //←こう書いてもいい

//stateとactionをコンポーネントに関連付ける部分↓↓
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
// export default App;
