import React, {useEffect} from "react";
import axios from "axios";
import mojs from "@mojs/core";

function Navbar({ loggedIn }) {

  useEffect(()=>{
    const animation = new mojs.Shape({
      parent: "#mojs",
      shape: "circle",
      fill: { "#306754": "#5cb85c" },
      radius: { 10: 15 },
      y:1,
      x:-1,
      duration: 1500,
      isYoyo: true,
      isShowStart: true,
      easing: "elastic.inout",
      repeat: 999
    });
    animation.play();
  },[]);

  function logout() {
    axios.get("/logout").then(window.location.replace("/"));
  }

  return (
    <div className="container d-flex">

<span id="mojs"/>
<h3 className="my-1 ml-4 mr-auto nav-name">Golfclub</h3>
      {loggedIn ? <button type="button" className="ml-auto btn btn-outline-success site-button" onClick={logout}> Logout </button> : null}

    </div>
  );
}

export default Navbar;