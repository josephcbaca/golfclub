import React from "react";
import Navbar from "../../navbar.js"
import backgroundImage from "../../images/TheGolfClub_BG.jpg"
import { Link } from 'react-router-dom';
import './style.css'

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
          <div className="col-2"></div>
            <Link className="col-4" to="/scorecard"><button type="button" className="btn btn-outline-success site-button col-12">Create Game</button></Link>
            <Link className="col-4" to="/login"><button type="button" className="btn btn-outline-success site-button col-12">Login</button></Link>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;