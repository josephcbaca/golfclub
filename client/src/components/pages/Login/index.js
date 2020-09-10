import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Navbar from "../../navbar.js"
import axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function loginUser(e) {
    e.preventDefault();
    const bodyObj = {
      email: email,
      password: password
    }
    console.log(bodyObj);
    axios.post("/api/login", bodyObj).then(res => {
      console.log('login response:');
      console.log(res);
      if (res.status === 200) {
        props.updateUser(res.data)
        history.push("/browse-game");
      }
    }).catch(err => console.log(err));

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
                type="text"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button onClick={loginUser} className="btn btn-outline-success site-button" type="submit">
            Submit
          </button>
          <h3>Not a member?</h3> <Link className="link-text" to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;