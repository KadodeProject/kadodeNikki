//action jsのオブジェクト
//オブジェクトの内部でtypeと対応する値を持つ typeはユニークな値
//actionを返す関数→actioncreator
//increment decrementのオブジェクトを創る
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
export const increment = () => ({
  type: INCREMENT,
  //   returnしてる↑
});
export const decrement = () => ({
  type: DECREMENT,
});
