import React, { useState } from "react";
import Navbar from "../../navbar.js"
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

function SignUp() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  // Does a post to the signup route. If successful, we are redirected to the browse-game page
  // Otherwise we log any errors
  function signUpUser(e) {
    e.preventDefault();
    const bodyObj = {  
      userName: userName,
      email: email,
      password: password
    }
    console.log(bodyObj);
    axios.post("/api/signup", bodyObj)
      .then(res=> {
        console.log(res);
        if (!res.data.errmsg){
          console.log("success");
          history.push("/login");
        } else {
          console.log("ERR");
        }})
      .catch(err=> {
        console.log("Signup Error: ");
        console.log(err);
      })
  }

  return (
    <div>
      <Navbar />
      <div className="loginCard">

        <div className="container">
          <div className="row">
            <div className="col-4">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="userName"
                onChange={e => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => {setPassword(e.target.value)}}
              />
            </div>
          </div>
          <button onClick={signUpUser} className="btn btn-outline-success site-button" type="submit">
            Submit
          </button>
        </div>
      </div>
      <h3>Already a member?</h3> <Link className="link-text" to="/login">Login</Link>
    </div>
  )
};

export default SignUp;