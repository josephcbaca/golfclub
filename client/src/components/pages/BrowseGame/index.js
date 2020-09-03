import React from 'react';
import GameContainer from '../../GameContainer';
import { Link } from 'react-router-dom';
import Navbar from "../../navbar"
import './style.css'

function BrowseGame({loggedIn, currentUser}) {
    
    if (!loggedIn) return (<div> Please log in before browsing games! <Link to="/login">Login</Link>
    </div>);
    return (<div>
                <Navbar loggedIn={loggedIn}/>
                <button><Link to="/create-game">Create Game</Link></button>
                <Link className="create-game-button" to="/create-game"><button type="button" className="create-game-button btn btn-outline-success col-12">Create Game</button></Link>
                <p> Join a hosted game: </p>
                <GameContainer currentUser={currentUser} />
             </div> );
}


export default BrowseGame;