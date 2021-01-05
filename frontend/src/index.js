import React from "react";

import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; //作製したsotreを全コンポーネントに渡すコンポーネント
import reducer from "./reducers";
import EventsIndex from "./components/events_index";

import thunk from "redux-thunk";
//全階層に渡せる　全てのstateがこのstoreに集約
//providerでどのコンポーネントでも使えうようにする→既存のコンポーネントをproviderコンポーネントでラップしてstoreという属性にするだけ
//データのバケツリレー防止

import { BrowserRouter, Route, Switch } from "react-router-dom"; //Link outside router防止

import EventsNew from "./components/events_new";

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
