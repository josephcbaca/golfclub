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
            <Link className="create-game-button" to="/create-game"><button type="button" className="create-game-button btn btn-outline-success col-2">Host Game</button></Link>
            <p className="col-2"> Join a hosted game: </p>
            <GameContainer currentUser={currentUser} />
        </div>
    </div>);
}


export default BrowseGame;