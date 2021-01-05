import React, { Component } from "react";
// import PropTypes from "prop-types";

import { connect } from "react-redux"; //stateやactionとコンポーネントの関連付けを行う、viewのイベントで状態を遷移→遷移後の状態を描写
import { postEvent } from "../actions";
import { Link } from "react-router-dom";
//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）　変更不可能
//stateはコンポーネントの内部のみで使用　変更可能 stateはクラスコンポーネントのみで可能
import { Field, reduxForm } from "redux-form"; //にゅうりょくふぉ ーむ
class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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
    await this.props.postEvent(values);
    this.props.history.push("/");
  }
  render() {
    const { handleSubmit } = this.props;
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
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">Cancel</Link>
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

const mapDispatchToProps = { postEvent };
//stateとactionをコンポーネントに関連付ける部分↓↓
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
// export default App;
