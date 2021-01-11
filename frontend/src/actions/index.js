//action jsのオブジェクト type持つ
//オブジェクトの内部でtypeと対応する値を持つ typeはユニークな値
//actionを返す関数→actioncreator
//increment decrementのオブジェクトを創る
import axios from "axios";
// import    redux//readeventsはpureなオブジェクトを返さないといけない→非同期処理を入れちゃだめ→redux-thunkを使うとそれがOKになる
export const READ_EVENTS = "READ_EVENTS";
export const READ_EVENT = "READ_EVENT";
export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);

  dispatch({ type: READ_EVENTS, response });
}; //reducer 状態をどう変化させるのかを定義する stateで扱う
export const getEvent = (id) => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: READ_EVENT, response });
};
export const putEvent = (values) => async (dispatch) => {
  const response = await axios.put(
    `${ROOT_URL}/events/${values.id}${QUERYSTRING}`,
    values
  );
  dispatch({ type: UPDATE_EVENT, response });
};
export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);

  dispatch({ type: CREATE_EVENT, response });
}; //reducer 状態をどう変化させるのかを定義する stateで扱う
export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/events/${id} ${QUERYSTRING}`);

  dispatch({ type: DELETE_EVENT, id });
}; //reducer 状態をどう変化させるのかを定義する stateで扱う
