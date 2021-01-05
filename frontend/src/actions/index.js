//action jsのオブジェクト type持つ
//オブジェクトの内部でtypeと対応する値を持つ typeはユニークな値
//actionを返す関数→actioncreator
//increment decrementのオブジェクトを創る
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const increment = () => ({
  type: INCREMENT,
  //   returnしてる↑
});
export const decrement = () => ({
  type: DECREMENT,
});

//reducer 状態をどう変化させるのかを定義する stateで扱う
