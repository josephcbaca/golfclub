import React from 'react';
import GameContainer from '../../GameContainer';
import { Link } from 'react-router-dom';

function BrowseGame() {
    return (<div>
        <button><Link to="/create-game">Create Game</Link></button>
        <p> Join a hosted game: </p>
        <GameContainer />
    </div>
    );
}


export default BrowseGame;