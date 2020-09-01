import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GameCard(props) {

    const currentUserId = props.currentUser.id;
    const [game, setGame] = useState(props);
    const [players,setPlayers] = useState([props.host.userName]);
    const [numPlayers, setNumPlayers] = useState(1);
    const [hasJoined, setHasJoined] = useState(false);
    const [isHost, setIsHost] = useState(false);

    useEffect(()=>{
        if (game.host.id === currentUserId) setIsHost(true);
        let players_tmp = [players[0]];
        let numPlayers_tmp = 1;
        for (let i = 1; i<=3; i++){
            let propName = "player_"+i;    
            if (game[propName]) {
                players_tmp.push(game[propName]["userName"]);
                numPlayers_tmp++;
                if (game[propName]["id"] === currentUserId) setHasJoined(true);
                setPlayers(players_tmp);
                setNumPlayers(numPlayers_tmp);
            }
        }
    },[game]);

    const joinGame = () => {
        let slot_number = "player_id_"+numPlayers;
        const postObj = {
            id: props.id,
            slot_number: slot_number
        }
        axios.put("api/joingame", postObj).then(res=>{
            setGame(res.data);
        }).catch(err=> console.log(err));
    }
    if (numPlayers===4) return null;
    return (<div>
            <p>{props.gameTime}</p>
            <ul>Attendees:
            {players.map(player => <li>{player}</li>)}
            </ul>
            <p>{`At: ${props.golfCourse}`}</p>
            {isHost ? 
                <button> You are the host of this game!</button> :
                hasJoined ? 
                    <button> You have joined this game! </button>: 
                    <button onClick={joinGame}> Join this game!</button>}
        </div>) 
    ;
}

export default GameCard;