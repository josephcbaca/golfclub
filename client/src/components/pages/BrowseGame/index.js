import React from 'react';
import GameContainer from '../../GameContainer';

function BrowseGame() {
    return (<div>
        <button> Create a new Game</button>
        <p> Join a hosted game: </p>
        <GameContainer />
    </div>
    );
}


export default BrowseGame;