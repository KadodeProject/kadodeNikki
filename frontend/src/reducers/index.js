//全reducerを結語
import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });
// export default combineReducers({foo,bar,baz})
//ここに状態を書いていく
