import React from "react";
import axios from "axios";
import Mojs from "./mojs";

function Navbar({ loggedIn }) {

  function logout() {
    axios.get("/logout").then(window.location.replace("/"));
  }

  return (
    <div className="container d-flex">

      <h3 className="mr-auto nav-name">Golfclub</h3>
      <Mojs />
      {loggedIn ? <button type="button" className="ml-auto btn btn-outline-success site-button" onClick={logout}> Logout </button> : null}

    </div>
  );
}

export default Navbar;