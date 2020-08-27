import React, { useState } from "react";
import Navbar from "../navbar.js"
import { Link } from 'react-router-dom';

function SignUp() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Does a post to the signup route. If successful, we are redirected to the browse-game page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    user.post("/api/signup", {
      email: email,
      password: password
    })
      .then(<Link to="/browse-game">Create Game</Link>)
      .catch("err");
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
                name="username"
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
                onChange={e => setPassword(e.target.value)}
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