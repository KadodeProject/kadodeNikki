//reducerの状態を持つ
import { READ_EVENTS } from "../actions";
import _ from "lodash"; //json配列処理
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data); //0:{id:1}　配列
      // console.log(_.mapKeys(action.response.data, "id")); //1:{id:1}となる　オブジェクト
      return _.mapKeys(action.response.data, "id");

    default:
      return events;
  }
}; //関数として定義
