import React from 'react';
import GameContainer from '../../GameContainer';
import { Link } from 'react-router-dom';
import Navbar from "../../navbar"

function BrowseGame({loggedIn, currentUser}) {
    
    if (!loggedIn) return (<div> Please log in before browsing games! <Link to="/login">Login</Link>
    </div>);
    return (<div>
                <Navbar loggedIn={loggedIn}/>
                <button><Link to="/create-game">Create Game</Link></button>
                <p> Join a hosted game: </p>
                <GameContainer currentUser={currentUser} />
             </div> );
}


export default BrowseGame;