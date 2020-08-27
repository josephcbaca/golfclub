import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function loginUser () {
    const bodyObj = {  
      email: email,
      password: password
    }
    console.log(bodyObj);
    fetch("/api/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    }).then(res=> window.location.replace("/browse-game"));
  }

  return (
    <div>
      {<Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={e => setEmail(e.target.value)} 
          className="col-4" 
          type="email" 
          placeholder="Enter email" />
          <Form.Text className="text-muted">
            Please enter your login email.
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e => setPassword(e.target.value)} 
          className="col-4" 
          type="password" 
          placeholder="Password" />
        </Form.Group>
        <Button onClick={loginUser}
        variant="primary" 
        type="submit">
          Submit
        </Button>
      </Form>}
      <h3>Not a member?</h3> <a><Link to="/sign-up">Sign Up</Link></a>
    </div>
  );
};

export default Login;