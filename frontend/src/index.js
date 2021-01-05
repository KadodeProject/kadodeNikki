import React from "react";

import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

//redux
import { createStore } from "redux";
import { Provider } from "react-redux"; //作製したsotreを全コンポーネントに渡すコンポーネント
import reducer from "./reducers";
import App from "./components/App";

//全階層に渡せる　全てのstateがこのstoreに集約
//providerでどのコンポーネントでも使えうようにする→既存のコンポーネントをproviderコンポーネントでラップしてstoreという属性にするだけ
//データのバケツリレー防止

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
