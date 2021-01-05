import React, { Component } from "react";

//AppがクラスComponentを継承←クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1 className="App-title">HelloWorld!</h1>
//       </React.Fragment>
//     );
//   }
// }

//関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};
const Cat = () => {
  return <div>Meow!</div>;
};
export default App;
