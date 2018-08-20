import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import configureStore from "./store";
import theme from "./styles/theme";
import Landing from "./containers/landing";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Landing />
    </Provider>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
