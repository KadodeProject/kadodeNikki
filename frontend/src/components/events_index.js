import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux"; //stateやactionとコンポーネントの関連付けを行う、viewのイベントで状態を遷移→遷移後の状態を描写
import { readEvents } from "../actions";
import { Link } from "react-router-dom";
//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能
import _ from "lodash";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableColumn,
  TableHeaderColumn,
  TableRowColumn,
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
class EventsIndex extends Component {
  //マウント次実行されるコールバック
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    return _.map(this.props.events, (event) => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <Link to={`/events/${event.id}`}>
          <TableRowColumn>{event.title}</TableRowColumn>
        </Link>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }
  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    };
    return (
      <React.Fragment>
        <FloatingActionButton
          style={style}
          containerElement={<Link to="/events/new" />}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
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
