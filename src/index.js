import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import Landing from "./containers/landing";
import registerServiceWorker from "./registerServiceWorker";

const App = () => (
  <ThemeProvider theme={theme}>
    <Landing />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
