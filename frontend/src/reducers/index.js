//全reducerを結語
import { combineReducers } from "redux";
import events from "./events";

export default combineReducers({ events });
// export default combineReducers({foo,bar,baz})
//ここに状態を書いていく
