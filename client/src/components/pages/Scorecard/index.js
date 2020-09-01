import React, { Component, useState } from 'react';
// import Navbar from ".../Navbar"
import './style.css'
import { array } from 'prop-types';


let players = [];


class playersList extends React.Component
{

    constructor(props)
    {
    super(props);
    this.state = {player1: "", player2: "", player3: "", player4: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        let obj =this.state; obj[event.target.name] = event.target.value;
        this.setState(obj);
    }
    
    handleSubmit(event)
    {
        
        console.log(this.state)
        event.preventDefault();
    }



    render()    
    {
        return (
        <div>
           <h1> Please Enter Each Players Name </h1>
           <form onSubmit = {this.handleSubmit}>
  <label>
    Player 1:
    <input 
    className="textInput1"
    type="text" 
    name="player1"
    value1 = {this.state.text}
    onSubmit={(text) => this.setState({text})}
    onChange = {this.handleChange}
    />
  </label>
  <br></br>
  <label>
    Player 2:
    <input 
    className="textInput2"
    type="text" 
    name="player2"
    value2 = {this.state.text}
    onSubmit={(text) => this.setState({text})}
    onChange = {this.handleChange}
    />
  </label>
  <br></br>
  <label>
    Player 3:
    <input 
    className="textInput3"
    type="text" 
    name="player3"
    value3 = {this.state.text}
    onSubmit={(text) => this.setState({text})}
    onChange = {this.handleChange}
    />
  </label>
  <br></br>
  <label>
    Player 4:
    <input 
    className="textInput4"
    type="text" 
    name="player4"
    value4 = {this.state.text}
    onSubmit={(text) => this.setState({text})}
    onChange = {this.handleChange}
    />
  </label>
  <br></br>
  <input 
  type="submit" 
  value="OK"  
  
    />
</form>
<scorecard players={this.state} />
        </div>
        )
    }
}


// scorecard will be rendered with onClick  
// 
class scorecard extends React.Component
{
    constructor(props) {
        super(props);
      }

    render() 
    {
        return (
        <div className = "scorecardContainer">
           <h1>Scorecard Appears Here with onClick </h1>
            <div className="frontNineHoles" row="holesRow">
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
            <div className="frontNinePar">
            <span size="10" className="parBox">  Par  </span>
                <input size="2" maxLength="2" className="holeOneScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeTwoScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeThreeScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeFourScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeFiveScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeSixScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeSevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeEightScore" type={Number}></input>
                <input size="2" maxLength="2" className="holeNineScore" type={Number}></input>
                <span size="2" maxLength="2" className="frontNineParTotal" type={Number}> {/*{Sum of front nine pars} */} </span>
            </div>
            <div className="player1FrontNineScore">
            <span> { this.state.player1 } </span>
                <input size="2" maxLength="2" className="playerOneHoleOneScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleTwoScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleThreeScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleFourScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleFiveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleSixScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleSevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleEightScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerOneHoleNineScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerOneFrontNineTotal" type={Number}>{/*{Sum of front nine pars} */} </span>
            </div>
            <div className="player2FrontNineScore">
            <span> player2 </span>
                <input size="2" maxLength="2" className="playerTwoHoleOneScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleTwoScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleThreeScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleFourScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleFiveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleSixScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleSevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleEightScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerTwoHoleNineScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerTwoFrontNineTotal" type={Number}>{/*{Sum of front nine pars} */} </span>
            </div>
            <div className="player3FrontNineScore">
            <span> player3 </span>
                <input size="2" maxLength="2" className="playerThreeHoleOneScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleTwoScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleThreeScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleFourScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleFiveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleSixScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleSevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleEightScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerThreeHoleNineScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerThreeFrontNineTotal" type={Number}>{/*{Sum of front nine pars} */} </span>
            </div>
            <div className="player4FrontNineScore">
            <span> player4 </span>
                <input size="2" maxLength="2" className="playerFourHoleOneScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleTwoScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleThreeScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleFourScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleFiveScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleSixScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleSevenScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleEightScore" type={Number}></input>
                <input size="2" maxLength="2" className="playerFourHoleNineScore" type={Number}></input>
                <span size="2" maxLength="2" className="playerFourFrontNineTotal" type={Number}>{/*{Sum of front nine pars} */} </span>
            </div>
        </div>
        )
    }
}

class setPage extends React.Component{
    render()
    {
        const pages = [playersList, scorecard] 
        const pagesToRender = pages.map((Component, i) => (
            <Component key = {i}/>
        ));
        return <div> 
            {/* <Navbar/> */}
 
            {pagesToRender} 
            
            </div>
    }
}

export default setPage;



// constructor(props)
// {
//     super(props);
//     this.state = {
//         players: [player1.value, player2.value, player3.value, player4.value]
//     }
// }


// function setPage() 
// {
//     const [page, setPage] = useState();
//     return(
//         <div>

//         </div>
//     )

// }






//User inputs:Column1:Par, PlayerName1, PlayerName2, PlayerName3, PlayerName4


//create player list function


// export GameID, PlayerID, Score to DB

