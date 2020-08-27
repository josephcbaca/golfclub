import React from "react";
import { Form, Col, Button, Navbar } from 'react-bootstrap';



// function setPage() {

//     constructor(props) {
//         super(props);
      
//         this.state = {
//           playerList: true,
//           Scorecard: false
//         }
//       }
    
// }

// First input page to get list of players 
function playerList() {
    // let players = [];
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
                <Button as="input" type="submit" value="OK"  onClick={(e) => {return Scorecard} } />{' '}
            </Form.Group>
        </div>

    )
}


// Will create scorecard on submit
// function Scorecard(players, holes) {
    class Scorecard extends React.Component {
        //unsure how to pull Players into an array
        constructor(props){
            super(props)
            this.state = {Player1:[]}
        }

        onInputPlayer1 = (e, inx) => {
            var arrCopy = [...this.state.Player1]
            arrCopy[inx] = e.target.value
            this.setState({
                Player1: arrCopy
            })
            console.log(this.state)
        }
        render(){
        return (
        <div className="scorecardContainer" style={ {height: '400px', width: '900px'} } >
            <Navbar />      
            <div className="frontNine">
                <div className="frontNineHoles">
                    <span>Hole</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>Out</span>
                </div>
                <div className="FrontNinePar">
                    <span size="10">Par</span>
                    {/* might need to make these forms */}
                    <input size="2" maxLength="2" className="holeOneScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeTwoScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeThreeScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeFourScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeFiveScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeSixScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeSevenScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeEightScore" type={Number}></input>
                    <input size="2" maxLength="2" className="holeNineScore" type={Number}></input>
                    <span size="2" maxLength="2" className="frontNineParTotal">{/*{Sum of front nine pars} */} </span>
                </div>
                <div className="hostFrontNineScore">
                    <span size="10">Player1</span>
                    {/* might need to make these forms */}
                    <input onBlur={(e, inx) => this.onInputPlayer1(0) } type={Number}></input>  {/* can I make these only 2 characters???*/}
                    <input onBlur={(e, inx) => this.onInputPlayer1(1) } type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(2) }  type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(3) } type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(4) } type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(5) } type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(6) } type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(7) } type={Number}></input>
                    <input onBlur={(e, inx) => this.onInputPlayer1(8) } type={Number}></input>
                    <span onBlur={(e, inx) => this.onInputPlayer1(9) }>{/*{Sum of front nine pars} */} </span>
                </div>
                <div className="playerOneFrontNineScore">
                    <span>Player2</span>
                    {/* might need to make these forms */}
                    <input size="2" maxLength="2" className="playerOneHoleOneScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                    <span size="2" maxLength="2" className="playerOneFrontNineTotal">{/*{Sum of front nine pars} */} </span>
                </div>
                <div className="playerTwoFrontNineScore">
                    <span>Player3</span>
                    {/* might need to make these forms */}
                    <input size="2" maxLength="2" className="playerTwoHoleOneScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleTwoScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleThreeScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleFourScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleFiveScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleSixScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleSevenScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleEightScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerTwoHoleNineScore" type={Number}></input>
                    <span size="2" maxLength="2" className="playerTwoFrontNineTotal">{/*{Sum of front nine pars} */} </span>
                </div>
                <div className="playerThreeFrontNineScore">
                    <span>Player4</span>
                    {/* might need to make these forms */}
                    <input size="2" maxLength="2" className="playerThreeHoleOneScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleTwoScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleThreeScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleFourScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleFiveScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleSixScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleSevenScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleEightScore" type={Number}></input>
                    <input size="2" maxLength="2" className="playerThreeHoleNineScore" type={Number}></input>
                    <span size="2" maxLength="2" className="playerThreeFrontNineTotal">{/*{Sum of front nine pars} */} </span>
                </div>
            </div>
        <div className="back9">
             <div size="2" maxLength="2" className="holes">
                <span>Hole</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>In</span>
                <span>Total</span>
            </div>
            <div className="par">
                <span>Par</span>
                {/* might need to make these forms */}
                <input size="2" maxLength="2" className="holeTenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeElevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeTwelveScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeThirteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeFourteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeFifteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeSixteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeSeventeenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeEighteenScore" type={Number}></input>
                <span size="2" maxLength="2" className="backNineParTotal">{/*{Sum of back nine pars} */} </span>
		        <span size="2" maxLength="2" className="eighteenHoleParTotal">{/*{Sum of ALL pars} */} </span>
            </div>
            <div className="hostBackNineScore">
                <span>Player1</span>
                {/* might need to make these forms */}
                <input size="2" maxLength="2" className="hostHoleTenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleElevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleTwelveScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleThirteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleFourteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleFifteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleSixteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleSeventeenScore" type={Number}></input>
                <input size="2" maxLength="2" className="hostHoleEighteenScore" type={Number}></input>
                <span size="2" maxLength="2" className="hostBackNineTotal">{/*{Sum of back nine pars} */} </span>
                <span size="2" maxLength="2" className="hostEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
            </div>
            <div className="playerOneBackNineScore">
                <span>Player2</span>
                {/* might need to make these forms */}
                <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerOneBackNineTotal">{/*{Sum of back nine pars} */} </span>
                <span size="2" maxLength="2" className="playerOneEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
            </div>
            <div className="playerTwoBackNineScore">
                <span>Player3</span>
                {/* might need to make these forms */}
                <input size="2" maxLength="2" className="playerTwoHoleTenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleElevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleTwelveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleThirteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleFourteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleFifteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleSixteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleSeventeenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleEighteenScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerTwoBackNineTotal">{/*{Sum of back nine pars} */} </span>
                <span size="2" maxLength="2" className="playerTwoEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
                </div>
            <div className="playerThreeBackNineScore">
                <span>Player4</span>
                {/* might need to make these forms */}
                <input size="2" maxLength="2" className="playerThreeHoleTenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleElevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleTwelveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleThirteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleFourteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleFifteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleSixteenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleSeventeenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleEighteenScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerThreeBackNineTotal">{/*{Sum of back nine pars} */} </span>
                <span size="2" maxLength="2" className="playerThreeEighteenHoleTotal">{/*{Sum of ALL pars} */} </span>
            </div>
        </div>
</div>

)
}
}


// export default Scorecard;
export default playerList;







//User inputs:Column1:Par, PlayerName1, PlayerName2, PlayerName3, PlayerName4


//create player list function


// export GameID, PlayerID, Score to DB

