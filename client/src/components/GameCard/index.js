import React from 'react';

function GameCard(props) {
    const players = [props.host_id];
    if (props.player1_id) players.push(props.player1_id);
    if (props.player2_id) players.push(props.player2_id);
    if (props.player3_id) players.push(props.player3_id);
    return (

        <div>
            <p>{props.time}</p>
            <ul>Attendees:
            {players.map(player => <li>{player}</li>)}
            </ul>
            <p>{`At: ${props.CourseName}`}</p>
            <button> Join this game!</button>
        </div>
    );
}

export default GameCard;