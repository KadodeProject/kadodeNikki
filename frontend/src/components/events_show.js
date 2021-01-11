import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux"; //stateやactionとコンポーネントの関連付けを行う、viewのイベントで状態を遷移→遷移後の状態を描写
import { getEvent, deleteEvent, putEvent } from "../actions";
import { Link } from "react-router-dom";
//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能
import { Field, reduxForm } from "redux-form"; //にゅうりょくふぉ ーむ
class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push("/");
  }
  async onDeleteClick() {
    // console.log(this.props.match);
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              label="Title"
              name="title"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Body"
              name="body"
              type="text"
              component={this.renderField}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting || invalid}
          />
          {/* pristineでなにもない時submit消す、submittingで二重クリック防止 */}
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>
            Delete
          </Link>
        </form>
      </React.Fragment>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// }); //action発生時にreducerにタイプに応じた状態遷移を実行させるための関数　引数に必要となるdisatch関数を宣言　increment,decrementのクリック時にディスパッチに渡す
// const mapDispatchToProps = { postEvents }; //←こう書いてもいい

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title,please";
  if (!values.body) errors.body = "Enter a body,please";
  return errors;
};

const mapDispatchToProps = { deleteEvent, getEvent, putEvent };
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, state };
};
//stateとactionをコンポーネントに関連付ける部分↓↓
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
    EventsShow
  )
);
// export default App;
