import React from "react";
import "./App.css";
import Home from "./components/pages/Home"
import { Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import Scorecard from "./components/pages/Scorecard";
import BrowseGame from "./components/pages/BrowseGame"
import SignUp from "./components/pages/SignUp"


const App = () =>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/scorecard" component={Scorecard} />
    <Route exact path="/browse-game" component={BrowseGame} />
    <Route exact path="/sign-up" component={SignUp} />
  </div>
  
export default App;

