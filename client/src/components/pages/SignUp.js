import React from "react";
import Navbar from ".../navbar.js"
import backgroundImage from "./images/TheGolfClub_BG.jpg"


function userSignUp() {
    return (
      <Navbar/>
        <div styles={{backgroundImage: `url(${backgroundImage})`}} >
      </div>
      <div className="loginCard">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="firstName" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="lastName" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
      </div>
    )
};  

// ...????  Need event listener to run username function

function welcomeUser(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'formGridFirstName', 
  lastName: 'formGridLastName'  
};

const element = (
  <h1>
    Welcome to THE GOLF CLUB, {formatName(user)}!
  </h1>
);


// (This may be unnecessary or be moved to another page)
ReactDOM.render(
  element,
  document.getElementById('root')
);
