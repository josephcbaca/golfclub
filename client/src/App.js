import React, {useState, useEffect} from "react";
import "./App.css";
import Home from "./components/pages/Home"
import { Route } from 'react-router-dom';
import Login from "./components/pages/Login";
import Scorecard from "./components/pages/Scorecard";
import BrowseGame from "./components/pages/BrowseGame"
import SignUp from "./components/pages/SignUp"
import CreateGame from "./components/pages/CreateGame"
import axios from "axios";


const App = () =>{

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const getUser = () => {
    axios.get("/api/user_data").then(res=> {
      console.log(res.data);
      console.log(loggedIn);
      if (res.data.user) {
        console.log("logged in");
        setLoggedIn(true);
        setCurrentUser(res.data.user);
      } else {
        console.log("Not logged in");
        setLoggedIn(false);
        setCurrentUser(null);
      }
    })
  }

  const updateUser = userObj=>{
    setLoggedIn(true);
    setCurrentUser(userObj);
  }

  useEffect(getUser, []);

  return(
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" render={()=> <Login updateUser={updateUser} />}/>
      <Route exact path="/scorecard" component={Scorecard} />
      <Route exact path="/browse-game" render={()=> <BrowseGame loggedIn={loggedIn} currentUser = {currentUser}/>}/>
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/create-game" render={()=> <CreateGame loggedIn={loggedIn} currentUser = {currentUser}/>}/>
    </div>
    );
    

} 
export default App;

