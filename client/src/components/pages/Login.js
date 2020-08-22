import React from "react";
import Navbar from ".../navbar.js"
import backgroundImage from "./images/TheGolfClub_BG.jpg"

function userLogin() {
  return (
    <Navbar/>
      <div styles={{backgroundImage: `url(${backgroundImage})`}}>
    </div>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Please enter your login email.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
};  