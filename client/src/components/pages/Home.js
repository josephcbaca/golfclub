import React from "react";
import Navbar from "../navbar.js"
import backgroundImage from "../images/TheGolfClub_BG.jpg"

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <img className="col-8" src={backgroundImage}></img>
          <div className="col-2"></div>
        </div>
        <div className="row mt-2">
          <div className="col-3"></div>
          <button type="button" className="btn col-2">Quick Start</button>
          <div className="col-2"></div>
          <button type="button" className="btn col-2">Login</button>
          <div className="col-3"></div>
        </div>
      </div>

    </div>
  );
};

export default Home;