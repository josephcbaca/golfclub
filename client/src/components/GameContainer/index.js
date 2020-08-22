import React, {useState, useEffect} from 'react';
import GameCard from '../GameCard';

function GameContainer(){
    const [games, setGames] = useState([]);

    // function to fetch games VIA api
    
    let demoGames = [{
        id: 0,
        time: '2020-09-01 13:00:00',
        host_id: 'abc',
        player1_id: 'def',
        player2_id: 'ghi',
        player3_id: '',
        CourseName: 'Interbay Golf Course'
    },
    {   
        id: 1,
        time: '2020-09-01 14:00:00',
        host_id: 'abc',
        player1_id: 'def',
        player2_id: 'ghi',
        player3_id: '',
        CourseName: 'Interbay Golf Course'
    },
    {
        id: 2,
        time: '2020-09-01 15:00:00',
        host_id: 'abc',
        player1_id: 'def',
        player2_id: '',
        player3_id: '',
        CourseName: 'Interbay Golf Course'
    }]

    useEffect(()=> {
        // (function to fetch games VIA api).then(res => setGames(res))
        setGames(demoGames);
    }, []);

    return (<div className='gameContainer'>
        {games.map(game => <GameCard {...game} />)}
    </div>
    )

}

export default GameContainer;