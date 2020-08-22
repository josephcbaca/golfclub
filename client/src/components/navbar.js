import React from "react";

function Navbar ()
{
    return(
        <div className="container">
        <ul class="navbar-nav navbar-expand-lg navbar-light bg-light">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link startGameButton" href="./StartGame.js">Start Game</a>
          </li>
          <li class="nav-item">
            <a class="nav-link loginButton" href="./Login.js">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link signUpButton" href="./SignUp.js">Sign Up</a>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;