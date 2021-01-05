//action jsのオブジェクト type持つ
//オブジェクトの内部でtypeと対応する値を持つ typeはユニークな値
//actionを返す関数→actioncreator
//increment decrementのオブジェクトを創る
import axios from "axios";
// import    redux//readeventsはpureなオブジェクトを返さないといけない→非同期処理を入れちゃだめ→redux-thunkを使うとそれがOKになる
export const READ_EVENTS = "READ_EVENTS";
const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  console.log(response);
  dispatch({ type: READ_EVENTS, response });
}; //reducer 状態をどう変化させるのかを定義する stateで扱う
