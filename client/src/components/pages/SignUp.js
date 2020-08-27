import React, { useState } from "react";
import Navbar from "../navbar.js"
import { Link } from 'react-router-dom';

function SignUp() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Does a post to the signup route. If successful, we are redirected to the browse-game page
  // Otherwise we log any errors
  function signUpUser() {
    const bodyObj = {  
      userName: userName,
      email: email,
      password: password
    }
    console.log(bodyObj);
    fetch("/api/signup", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }).then(res=> window.location.replace("/login"));
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
                placeholder="userName"
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
                placeholder="email"
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
          <button onClick={signUpUser} className="btn" type="submit">
            Submit
          </button>
        </div>
      </div>
      <h3>Already a member?</h3> <a><Link to="/login">Login</Link></a>
    </div>
  )
};

export default SignUp;