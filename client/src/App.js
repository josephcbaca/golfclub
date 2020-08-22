import React from "react";
import "./App.css";
import Home from "./components/pages/Home"
import { Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import CreateGame from "./components/pages/CreateGame";
import BrowseGame from "./components/pages/BrowseGame"


const App = () =>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/create-game" component={CreateGame} />
    <Route exact path="/browse-game" component={BrowseGame} />
  </div>
export default App;

