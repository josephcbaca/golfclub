import React from 'react';
import GameContainer from '../../GameContainer';
import { Link } from 'react-router-dom';

function BrowseGame({loggedIn, currentUser}) {
    return ({loggedIn} ? 
            (<div>
                <button><Link to="/create-game">Create Game</Link></button>
                <p> Join a hosted game: </p>
                <GameContainer />
             </div> ): 
             (<div> Please log in before browsing games! <Link to="/login">Login</Link>
             </div>)
    );
}


export default BrowseGame;