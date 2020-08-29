import React, {useState, useEffect} from 'react';
import GameCard from '../GameCard';
import axios from 'axios';

function GameContainer(){
    const [games, setGames] = useState([]);

    // function to fetch games VIA api
    const getGames = () => {
        axios.get("/api/games").then(res=> {
            console.log(res);
            setGames(res.data);
        })
    }

    useEffect(getGames, []);

    return (<div className='gameContainer'>
        {games.map(game => <GameCard {...game} />)}
    </div>
    )

}

export default GameContainer;