import React from 'react';
import './style.css'

let players = [];  //this array is called with onChange  Should be filled by localStorage onSubmit


class PlayersList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            showScoreCard: false
        };
    }

// this handle change sets players array to local storage.
    handleChange(event) {
        let obj = this.state; obj[event.target.name] = event.target.value;
        this.setState(obj);
        localStorage.setItem('players', JSON.stringify(obj));
    }

// onClick for "OK button" -- Want to set Scorecard to visible
    handleSubmit = event => {
        event.preventDefault();
        let obj = this.state; 
        obj.showScoreCard = !this.state.showScoreCard;
        console.log(obj);
        this.setState(obj);
        console.log("OK was clicked but Scorecard did not show");
//  WANT TO SHOW SCORECARD 
    }

//PLAYERLIST SHOULD BE THE ONLY THING ON SCREEN WHEN PAGE LOADS  *MAY BE EASIER TO MAKE TWO PAGES*
    render() {
        return (
            <div>
                {this.state.showScoreCard ? 
                    <Scorecard players={this.state} /> : <div>
                    <h1> Please Enter Each Players Name </h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Player 1:
                        <input className="textInput1" type="text" name="player1" value1={this.state.text}
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <label>
                            Player 2:
                        <input className="textInput2" type="text" name="player2" value2={this.state.text}
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <label>
                            Player 3:
                        <input className="textInput3" type="text" name="player3" value3={this.state.text}
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <label>
                            Player 4:
                        <input className="textInput4" type="text" name="player4" value4={this.state.text}
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <input type="submit" value="OK" />
                    </form></div>
                }

{/* DISPLAYS SCORECARD BUT WILL BE REMOVED WHEN PAGE LOADS WITH ONCLICK */}
                
            </div>
        )
    }
}

export default PlayersList;

// Scorecard will be rendered with onClick  
// Want to set player names from localStorage
class Scorecard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            holes: [1, 2, 3, 4, 5, 6, 7, 8, 9, "Out", 10, 11, 12, 13, 14, 15, 16, 17, 18, "In", "Total"],
        };
    }

    componentDidMount() {
        let players = JSON.parse(localStorage.getItem('players'));
        let obj = {};
        obj.holes = this.state.holes;
        for (let i = 1; i<= 4; i++){
            let propName = "player"+i;
            obj[propName] = players[propName];
        }
        this.setState(obj);
        console.log(players)
    }

        handleChange(event) {
        let obj = this.state; obj[event.target.name] = event.target.value;
        let players = [obj];
        this.setState(obj);
        console.log(players)
        localStorage.setItem('players', JSON.stringify(players));
    }

    handleSubmit() {
        console.log('Change happened')
    }

    render() {
        return (
            <div className="scorecard">
                <div className="header">
                    <h1>Scorecard Appears Here with onClick </h1>
                </div>
                <div className="scorecardGrid">
                    <div className="columnOne">
                        <div className="rowOne">Hole</div>
                        <p className="rowTwo">Par</p>
{/*  NEED TO LIST PLAYERS FROM LOCAL STORAGE  */}
                        <p className="playerOne" placeholder="Player 1">{this.state.player1}</p>
                        <p className="playerTwo" placeholder="Player 2">{this.state.player2}</p>
                        <p className="playerThree" placeholder="Player 3">{this.state.player3}</p>
                        <p className="playerFour" placeholder="Player 4">{this.state.player4}</p>
                    </div>
{/* holes uses dynamic mapping cannot get grid to line up yet  */}
                    <div className="inputRowsAndColumns">
                        <div className="grid-container">
                            {this.state.holes.map((hole) => {
                                return <span className="grid-item holes"> {hole} </span>
                            })
                            }
                        </div>

{/* WANT TO MAKE THESE INPUTS DYMANIC BUT HAVE NOT BEEN ABLE TO FIGURE THAT OUT.  
    WILL NEED ONCHANGE TO LOCALSTORAGE SIMILAR TO PLAYERLIST  
    VERY IMPORTANT TO GET THESE TO SOME KIND OF DYNAMIC MAPPING
*/}
                        <div className="rowTwo ParInput">
                            <input size="2" maxLength="2" className="HoleOnePar" onChange={this.handleChange} type={Number}></input>
                            <input size="2" maxLength="2" className="HoleTwoPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleThreePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFourPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFivePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSixPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSevenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleEightPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleNinePar" type={Number}></input>
{/*  NEED FUNCTION TO RENDER SUM OF INPUTS FROM LOCAL STORAGE  */}
                            <span size="2" maxLength="2" className="FrontNineTotalPar" type={Number}> Sum of Front-9 </span>
                            <input size="2" maxLength="2" className="HoleTenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleElevenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleTwelvePar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleThirteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFourteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleFifteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSixteenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleSeventeenPar" type={Number}></input>
                            <input size="2" maxLength="2" className="HoleEighteenPar" type={Number}></input>
{/*  NEED FUNCTION TO RENDER SUM OF INPUTS FROM LOCAL STORAGE  */}
                            <span size="2" maxLength="2" className="playerOneBackNineTotal"> Sum of Back-9 </span>
{/*  NEED FUNCTION TO RENDER SUM OF INPUTS FROM LOCAL STORAGE  */}
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal"> 18 hole Sum </span>
                        </div>
{/*  NEED TO GET SOME KIND OF DYNAMIC MAPPING TO ELIMINATE REDUNDANT CODE
    ****************I COULD NOT FIGURE OUT HOW TO DO DYNAMIC MAPPING WITH INPUTS***************************
*/}
                        <div className="rowThree PlayerOneInput">
                            <input size="2" maxLength="2" className="playerOneHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Sum of Front-9 </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal"> Sum of Back-9 </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal"> 18 hole Sum </span>
                        </div>
                        <div className="rowFour PlayerTwoInput">
                            <input size="2" maxLength="2" className="playerTwoHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Sum of Front-9 </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal"> Sum of Back-9 </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal"> 18 hole Sum </span>
                        </div>
                        <div className="rowFive PlayerThreeInput">
                            <input size="2" maxLength="2" className="playerThreeHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Sum of Front-9 </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal"> Sum of Back-9 </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal"> 18 hole Sum </span>
                        </div>
                        <div className="rowSix PlayerFourInput">
                            <input size="2" maxLength="2" className="playerFourHoleOneScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}> Sum of Front-9 </span>
                            <input size="2" maxLength="2" className="playerOneHoleTenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleElevenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleTwelveScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleThirteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFourteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleFifteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSixteenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleSeventeenScore" type={Number}></input>
                            <input size="2" maxLength="2" className="playerOneHoleEighteenScore" type={Number}></input>
                            <span size="2" maxLength="2" className="playerOneBackNineTotal"> Sum of Back-9 </span>
                            <span size="2" maxLength="2" className="playerOneEighteenHoleTotal"> 18 hole Sum </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
