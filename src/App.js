import React from "react";
import {  Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";


function App() {
 return(
 <div>
  <Navbar/>
    <Switch> 
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
 )
}

export default App;