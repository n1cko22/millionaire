import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import End from "./components/End";
import Game from "./components/Game";
import Start from "./components/Start";

const App = () => {
const path = process;
console.log(path)

  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <Switch>
        <Route exact path={"/"} component={Start} />
        <Route exact path={"/game"} component={Game} />
        <Route exact path={"/results"} component={End} />
      </Switch>
    </HashRouter>
  );
}

export default App;