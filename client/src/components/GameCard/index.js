import React, {useState, useEffect} from 'react';
import axios from 'axios';

function GameCard(props) {

    const players = [props.host.userName];
    
    let numPlayers = 1;
    if (props.player_1) {
        players.push(props.player_1.userName);
        numPlayers++;
        }
    if (props.player_2) {
        players.push(props.player_2.userName);
        numPlayers++;
    }
    if (props.player_3) {
        players.push(props.player_3.userName);
        numPlayers++;
    }

    const joinGame = () => {
        let slot_number = "player_id_"+numPlayers;
        console.log("joining...");
        const postObj = {
            id: props.id,
            slot_number: slot_number
        }
        axios.put("api/joingame", postObj).then(res=>{
            console.log('joined.')
            console.log(res);
           // setGame(res.data);
        }).catch(err=> console.log(err));
    }
    if (numPlayers===4) return null
    return (<div>
            <p>{props.gameTime}</p>
            <ul>Attendees:
            {players.map(player => <li>{player}</li>)}
            </ul>
            <p>{`At: ${props.golfCourse}`}</p>
            <button onClick={joinGame}> Join this game!</button>
        </div>) 
    ;
}

export default GameCard;