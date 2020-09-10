import React from 'react';
import GameContainer from '../../GameContainer';
import { Link } from 'react-router-dom';
import Navbar from "../../navbar"
import './style.css'

function BrowseGame({ loggedIn, currentUser }) {

    if (!loggedIn) return (<div> Please log in before browsing games! <Link to="/login">Login</Link>
    </div>);
    return (<div>
        <Navbar loggedIn={loggedIn} />
        <div className="container">
            <div className="row">
                <Link to="/create-game"><button type="button" className="btn btn-outline-success site-button">Host Game</button></Link>
            </div>
            <div className="row">
                <h4 className="black-headings">Join a hosted game:</h4>
            </div>
            <GameContainer currentUser={currentUser} />
        </div>
    </div>);
}


export default BrowseGame;