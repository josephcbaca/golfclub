import React from 'react';

function GameCard(props) {
    const players = [props.host.userName];
    if (props.player_1) players.push(props.player_1.userName);
    if (props.player_2) players.push(props.player_2.userName);
    if (props.player_3) players.push(props.player_3.userName);
    return (

        <div>
            <p>{props.time}</p>
            <ul>Attendees:
            {players.map(player => <li>{player}</li>)}
            </ul>
            <p>{`At: ${props.golfCourse}`}</p>
            <button> Join this game!</button>
        </div>
    );
}

export default GameCard;