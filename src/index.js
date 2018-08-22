import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";
import Landing from "./containers/landing";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Landing />
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
