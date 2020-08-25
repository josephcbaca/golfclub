import React from "react";
import { Form, Col, Button, Navbar } from 'react-bootstrap';


//First input page to get list of players  --  Scorecard may also need to be created from the DB???
function playerList() {
    let players = [];
    return (
        <div className="container col-md-10">
            <Form.Group>
                <Form.Row>
                    <Form.Label column lg={2}>
                        Player1
                </Form.Label>
                    <Col>
                        <Form.Control className="player1" type="text" placeholder="Player1" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column lg={2}>
                        Player2
                 </Form.Label>
                    <Col>
                        <Form.Control className="player2" type="text" placeholder="Player2" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column lg={2}>
                        Player3
                </Form.Label>
                    <Col>
                        <Form.Control className="player3" type="text" placeholder="Player3" />
                    </Col>
                </Form.Row>
                <br />
                <Form.Row>
                    <Form.Label column lg={2}>
                        Player4
                </Form.Label>
                    <Col>
                        <Form.Control className="player4" type="text" placeholder="Player4" />
                    </Col>
                </Form.Row>
                <br />
                <Button as="input" type="submit" value="OK" />{' '}
            </Form.Group>
        </div>
    )
}


// Will create scorecard on submit
// function Scorecard(players, holes) {
//         //unsure how to pull Players into an array
//         return (
//         <div className="scorecardContainer">
//             <div className="frontNine">
//                 <div className="frontNineHoles">
//                     <span>Hole</span>
//                     <span>1</span>
//                     <span>2</span>
//                     <span>3</span>
//                     <span>4</span>
//                     <span>5</span>
//                     <span>6</span>
//                     <span>7</span>
//                     <span>8</span>
//                     <span>9</span>
//                     <span>Out</span>
//                 </div>
//                 <div className="FrontNinePar">
//                     <span>Par</span>
//                     {/* might need to make these forms */}
//                     <input className="holeOneScore" type={Number}></input>
//                     <input className="holeTwoScore" type={Number}></input>
//                     <input className="holeThreeScore" type={Number}></input>
//                     <input className="holeFourScore" type={Number}></input>
//                     <input className="holeFiveScore" type={Number}></input>
//                     <input className="holeSixScore" type={Number}></input>
//                     <input className="holeSevenScore" type={Number}></input>
//                     <input className="holeEightScore" type={Number}></input>
//                     <input className="holeNineScore" type={Number}></input>
//                     <span className="frontNineParTotal">36</span>
//                 </div>
//                 <div className="hostFrontNineScore">
//                     <span>{this.host_id}</span>
//                     {/* might need to make these forms */}
//                     <input className="hostHoleOneScore" type={Number}></input>
//                     <input className="hostHoleTwoScore" type={Number}></input>
//                     <input className="hostHoleThreeScore" type={Number}></input>
//                     <input className="hostHoleFourScore" type={Number}></input>
//                     <input className="hostHoleFiveScore" type={Number}></input>
//                     <input className="hostHoleSixScore" type={Number}></input>
//                     <input className="hostHoleSevenScore" type={Number}></input>
//                     <input className="hostHoleEightScore" type={Number}></input>
//                     <input className="hostHoleNineScore" type={Number}></input>
//                     <span className="hostFrontNineTotal">{/*{Sum of front nine pars} */} </span>
//                 </div>
//                 <div className="playerOneFrontNineScore">
//                     <span>{this.player1_id}</span>
//                     {/* might need to make these forms */}
//                     <input className="playerOneHoleOneScore" type={Number}></input>
//                     <input className="playerOneHoleTwoScore" type={Number}></input>
//                     <input className="playerOneHoleThreeScore" type={Number}></input>
//                     <input className="playerOneHoleFourScore" type={Number}></input>
//                     <input className="playerOneHoleFiveScore" type={Number}></input>
//                     <input className="playerOneHoleSixScore" type={Number}></input>
//                     <input className="playerOneHoleSevenScore" type={Number}></input>
//                     <input className="playerOneHoleEightScore" type={Number}></input>
//                     <input className="playerOneHoleNineScore" type={Number}></input>
//                     <span className="playerOneFrontNineTotal">36</span>
//                 </div>
//                 <div className="playerTwoFrontNineScore">
//                     <span>{this.player2_id}</span>
//                     {/* might need to make these forms */}
//                     <input className="playerTwoHoleOneScore" type={Number}></input>
//                     <input className="playerTwoHoleTwoScore" type={Number}></input>
//                     <input className="playerTwoHoleThreeScore" type={Number}></input>
//                     <input className="playerTwoHoleFourScore" type={Number}></input>
//                     <input className="playerTwoHoleFiveScore" type={Number}></input>
//                     <input className="playerTwoHoleSixScore" type={Number}></input>
//                     <input className="playerTwoHoleSevenScore" type={Number}></input>
//                     <input className="playerTwoHoleEightScore" type={Number}></input>
//                     <input className="playerTwoHoleNineScore" type={Number}></input>
//                     <span className="playerTwoFrontNineTotal">36</span>
//                 </div>
//                 <div className="playerThreeFrontNineScore">
//                     <span>{this.player3_id}</span>
//                     {/* might need to make these forms */}
//                     <input className="playerThreeHoleOneScore" type={Number}></input>
//                     <input className="playerThreeHoleTwoScore" type={Number}></input>
//                     <input className="playerThreeHoleThreeScore" type={Number}></input>
//                     <input className="playerThreeHoleFourScore" type={Number}></input>
//                     <input className="playerThreeHoleFiveScore" type={Number}></input>
//                     <input className="playerThreeHoleSixScore" type={Number}></input>
//                     <input className="playerThreeHoleSevenScore" type={Number}></input>
//                     <input className="playerThreeHoleEightScore" type={Number}></input>
//                     <input className="playerThreeHoleNineScore" type={Number}></input>
//                     <span className="playerThreeFrontNineTotal">36</span>
//                 </div>
//             </div>
//         <div className="back9">
//              <div className="holes">
//                 <span>Hole</span>
//                 <span>10</span>
//                 <span>11</span>
//                 <span>12</span>
//                 <span>13</span>
//                 <span>14</span>
//                 <span>15</span>
//                 <span>16</span>
//                 <span>17</span>
//                 <span>18</span>
//                 <span>In</span>
//                 <span>Total</span>
//             </div>
//             <div className="par">
//                 <span>Par</span>
//                 {/* might need to make these forms */}
//                 <input className="holeTenScore" type={Number}></input>
//                 <input className="holeElevenScore" type={Number}></input>
//                 <input className="holeTwelveScore" type={Number}></input>
//                 <input className="holeThirteenScore" type={Number}></input>
//                 <input className="holeFourteenScore" type={Number}></input>
//                 <input className="holeFifteenScore" type={Number}></input>
//                 <input className="holeSixteenScore" type={Number}></input>
//                 <input className="holeSeventeenScore" type={Number}></input>
//                 <input className="holeEighteenScore" type={Number}></input>
//                 <span className="backNineParTotal">{/*{Sum of back nine pars} */} </span>
// 		        <span className="eighteenHoleParTotal">{/*{Sum of ALL pars} */} </span>
//             </div>
//             <div className="hostBackNineScore">
//                 <span>{this.host_id}</span>
//                 {/* might need to make these forms */}
//                 <input className="hostHoleTenScore" type={Number}></input>
//                 <input className="hostHoleElevenScore" type={Number}></input>
//                 <input className="hostHoleTwelveScore" type={Number}></input>
//                 <input className="hostHoleThirteenScore" type={Number}></input>
//                 <input className="hostHoleFourteenScore" type={Number}></input>
//                 <input className="hostHoleFifteenScore" type={Number}></input>
//                 <input className="hostHoleSixteenScore" type={Number}></input>
//                 <input className="hostHoleSeventeenScore" type={Number}></input>
//                 <input className="hostHoleEighteenScore" type={Number}></input>
//                 <span className="hostBackNineTotal">{/*{Sum of back nine pars} */} </span>
//                 <span className="hostEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
//             </div>
//             <div className="playerOneBackNineScore">
//                 <span>{this.player1_id}</span>
//                 {/* might need to make these forms */}
//                 <input className="playerOneHoleTenScore" type={Number}></input>
//                 <input className="playerOneHoleElevenScore" type={Number}></input>
//                 <input className="playerOneHoleTwelveScore" type={Number}></input>
//                 <input className="playerOneHoleThirteenScore" type={Number}></input>
//                 <input className="playerOneHoleFourteenScore" type={Number}></input>
//                 <input className="playerOneHoleFifteenScore" type={Number}></input>
//                 <input className="playerOneHoleSixteenScore" type={Number}></input>
//                 <input className="playerOneHoleSeventeenScore" type={Number}></input>
//                 <input className="playerOneHoleEighteenScore" type={Number}></input>
//                 <span className="playerOneBackNineTotal">{/*{Sum of back nine pars} */} </span>
//                 <span className="playerOneEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
//             </div>
//             <div className="playerTwoBackNineScore">
//                 <span>{this.player2_id}</span>
//                 {/* might need to make these forms */}
//                 <input className="playerTwoHoleTenScore" type={Number}></input>
//                 <input className="playerTwoHoleElevenScore" type={Number}></input>
//                 <input className="playerTwoHoleTwelveScore" type={Number}></input>
//                 <input className="playerTwoHoleThirteenScore" type={Number}></input>
//                 <input className="playerTwoHoleFourteenScore" type={Number}></input>
//                 <input className="playerTwoHoleFifteenScore" type={Number}></input>
//                 <input className="playerTwoHoleSixteenScore" type={Number}></input>
//                 <input className="playerTwoHoleSeventeenScore" type={Number}></input>
//                 <input className="playerTwoHoleEighteenScore" type={Number}></input>
//                 <span className="playerTwoBackNineTotal">{/*{Sum of back nine pars} */} </span>
//                 <span className="playerTwoEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
//                 </div>
//             <div className="playerThreeBackNineScore">
//                 <span>Score</span>
//                 {/* might need to make these forms */}
//                 <input className="playerThreeHoleTenScore" type={Number}></input>
//                 <input className="playerThreeHoleElevenScore" type={Number}></input>
//                 <input className="playerThreeHoleTwelveScore" type={Number}></input>
//                 <input className="playerThreeHoleThirteenScore" type={Number}></input>
//                 <input className="playerThreeHoleFourteenScore" type={Number}></input>
//                 <input className="playerThreeHoleFifteenScore" type={Number}></input>
//                 <input className="playerThreeHoleSixteenScore" type={Number}></input>
//                 <input className="playerThreeHoleSeventeenScore" type={Number}></input>
//                 <input className="playerThreeHoleEighteenScore" type={Number}></input>
//                 <span className="playerThreeBackNineTotal">{/*{Sum of back nine pars} */} </span>
//                 <span className="playerThreeEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
//             </div>
//         </div>
// </div>

// )

// }


// export default Scorecard;
export default playerList;





// function scoreCard(props) {
//     const players = [props.host_id];
//     if (props.player1_id) players.push(props.player1_id);
//     if (props.player2_id) players.push(props.player2_id);
//     if (props.player3_id) players.push(props.player3_id);
//     return (

//         <div>
//             <Navbar/>
//             <h3 className="gameID">Game ID: {this.gameID}  </h3>





//         </div>

//User inputs:Column1:Par, PlayerName1, PlayerName2, PlayerName3, PlayerName4


//create player list function
// function playerList() 
// {
//     return 
// }



// export GameID, PlayerID, Score to DB

