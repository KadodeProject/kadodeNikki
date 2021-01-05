import React, { Component } from "react";
import PropTypes from "prop-types";
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

//propsはcomponentの属性→props.nameなどで属性に対して参照できる（数値、文字列、関数など）

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10,
    },
    {
      name: "Hanako",
      age: 5,
    },
    // {
    //   name: "AA",
    // },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
        // ユニークなkeyが必要→mapのindex機能を利用する
      })}
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
      {/* ↑ユーザーコンポーネントに対してnameというプロップス属性を与えている */}
    </div>
  );
};

// Appで受け取ったpropsを読む
const User = (props) => {
  return (
    <div>
      Hi,I'm {props.name}, and {props.age} years old!
    </div>
  );
};
//型チェック　バリデーション的な
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
//デフォルトprops
User.defaultProps = {
  age: 1,
};

//関数コンポーネント
// const App = () => {
//   return (
//     <div>
//       <Cat />
//       <Cat />
//       <Cat />
//     </div>
//   );
// };
// const Cat = () => {
//   return <div>Meow!</div>;
// };
export default App;
