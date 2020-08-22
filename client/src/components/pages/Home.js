import React from "react";
import Navbar from ".../navbar.js"
import backgroundImage from "./images/TheGolfClub_BG.jpg"

function startHomePage() {
  return (
    <Navbar/>
      <div styles={{backgroundImage: `url(${backgroundImage})`}}>
    </div>
  );
};  