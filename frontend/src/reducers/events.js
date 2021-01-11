//reducerの状態を持つ
import {
  READ_EVENTS,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
  CREATE_EVENT,
} from "../actions";
import _ from "lodash"; //json配列処理
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // console.log(action.response.data); //0:{id:1}　配列
      // console.log(_.mapKeys(action.response.data, "id")); //1:{id:1}となる　オブジェクト
      return _.mapKeys(action.response.data, "id");
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case DELETE_EVENT:
      // console.log(action.id);
      delete events[action.id];
      return { ...events };

    default:
      return events;
  }
}; //関数として定義
