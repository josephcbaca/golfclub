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
        // console.log("OK was clicked but Scorecard did not show");
        //  WANT TO SHOW SCORECARD 
    }

    //PLAYERLIST SHOULD BE THE ONLY THING ON SCREEN WHEN PAGE LOADS  *MAY BE EASIER TO MAKE TWO PAGES*
    render() {
        return (
            <div>
                {this.state.showScoreCard ?
                    <Scorecard players={this.state} handleSubmit={this.handleSubmit} /> : <div>
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
        for (let i = 1; i <= 4; i++) {
            let propName = "player" + i;
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

    // handleSubmit() {
    //     console.log('Change happened')
    

    // }

    render() {
        return (
            <div className="scorecard">
                <div className="header">
                    <h1 >Scorecard </h1>
                </div>
                <div className="scorecardGrid">

                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {/* Use forLoop to get numbers from array */}
                                <th class="col">Holes</th>
                                {this.state.holes.map((hole) => {
                                    return <th>{hole}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Use forLoop to get numbers from array */}
                            <tr >
                                <td>Par</td>
                                {this.state.holes.map((hole) => {
                                    return <td><input type='text' size='2' maxLength='2' placeholder='0' /></td>
                                })}

                            </tr>
                            {this.state.player1 ? <tr >
                                <td>{this.state.player1}</td>
                                {this.state.holes.map((hole) => {
                                    return <td><input type='text' size='2' maxLength='2' placeholder='0' /></td>
                                })}

                            </tr> : null}
                            {this.state.player2 ? <tr >
                                <td>{this.state.player1}</td>
                                {this.state.holes.map((hole) => {
                                    return <td><input type='text' size='2' maxLength='2' placeholder='0' /></td>
                                })}

                            </tr> : null}
                            {this.state.player3 ? <tr >
                                <td>{this.state.player1}</td>
                                {this.state.holes.map((hole) => {
                                    return <td><input type='text' size='2' maxLength='2' placeholder='0' /></td>
                                })}

                            </tr> : null}
                            {this.state.player4 ? <tr >
                                <td>{this.state.player1}</td>
                                {this.state.holes.map((hole) => {
                                    return <td><input type='text' size='2' maxLength='2' placeholder='0' /></td>
                                })}

                            </tr> : null}
                        </tbody>
                    </table>
                </div>
                    <button type='button' className='btn btn-outline-success col-12' onClick={this.props.handleSubmit}>Back</button>
            </div>
        )
    }
}
