import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function loginUser (e) {
    e.preventDefault();
    const bodyObj = {  
      email: email,
      password: password
    }
    console.log(bodyObj);
    axios.post("/api/login", bodyObj).then(res=> {
      console.log('login response:');
      console.log(res);
      if (res.status===200){
        props.updateUser(res.data)
        window.location.replace("/browse-game");
      }
    }).catch(err=> console.log(err));

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
      <h3>Not a member?</h3> <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};

export default Login;