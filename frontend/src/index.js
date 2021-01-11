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
import EventsShow from "./components/events_show";

import { composeWithDevTools } from "redux-devtools-extension";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(reducer, enhancer);
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
          {/* //exactは完全一致 */}
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
