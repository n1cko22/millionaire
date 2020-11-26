import React from "react";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import End from "./components/End";
import Game from "./components/Game";
import Start from "./components/Start";

const App = () => {
const path = process.env.PUBLIC_URL;
console.log(path)

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path={path + "/"} component={Start} />
        <Route exact path={"/game"} component={Game} />
        <Route exact path={"/results"} component={End} />
      </Switch>
    </Router>
  );
}

export default App;