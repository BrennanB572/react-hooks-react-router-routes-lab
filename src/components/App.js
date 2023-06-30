import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>
       <NavBar />
       <Switch>
       <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/Directors">
          <Directors />
        </Route>
        <Route path="/Actors">
          <Actors />
          </Route>
          <Route exact path="/">
          <Home />
        </Route>
       </Switch>
  </div>
);
}

export default App;

/** 
 * 
 * <Switch>
       <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/Directors">
          <Directors />
        </Route>
        <Route path="/Actors">
          <Actors />
          </Route>
       </Switch> **/