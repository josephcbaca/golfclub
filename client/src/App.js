import React from "react";
import "./App.css";
import Home from "./components/pages/Home"
import { Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import CreateGame from "./components/pages/CreateGame";

const App = () =>
  <div>
    <Route extact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/create-game" component={CreateGame} />
  </div>
export default App;

