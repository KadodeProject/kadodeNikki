//reducerの状態を持つ
import { INCREMENT, DECREMENT } from "../actions";
const initialState = { value: 0 }; //オブジェクトとして初期値を定義

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}; //関数として定義
