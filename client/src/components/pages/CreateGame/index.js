import React, { useState } from "react";
import courses from "../../db";
import { Link } from 'react-router-dom';
import Navbar from "../../navbar";
import Calendar from "../../Calendar";
import axios from "axios";
import moment from "moment"

function CreateGame({ loggedIn, currentUser }) {
    const [isDate, setIsDate] = useState("");
    const [isTime, setIsTime] = useState("");
    const [isCourse, setIsCourse] = useState("");

    console.log(currentUser)
    const handleDateChange = e => {
        console.log(e)
        setIsDate(moment(e).format("L"))
    }

    const handleCourseChange = e => {
        setIsCourse(e.target.name);
    }

    const handleTimeChange = e => {
        setIsTime(e.target.value)
        console.log(e.target.value)
    }

    // Posts a new hosted game to database
    // Otherwise we log any errors
    function hostNewGame(e) {
        e.preventDefault();
        const bodyObj = {
            gameTime: isDate + " " + isTime,
            golfCourse: isCourse,
            host_id: currentUser.id
        }
        console.log(bodyObj);
        axios.post("/api/host-new-game", bodyObj)
            .then(res => {
                console.log(res);
                if (!res.data.errmsg) {
                    console.log("success");
                    window.location.replace("/browse-game");
                } else {
                    console.log("ERR");
                }
            })
            .catch(err => {
                console.log("Create Game errored.  Try again.");
                console.log(err);
            })
    }

    if (!loggedIn) return (<div> Please log in before creating a new game! <Link to="/login">Login</Link>
    </div>);
    return (
        <div>
            <Navbar loggedIn={loggedIn}/>
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col-4"></div>
                    <Calendar handleDateChange={handleDateChange}/>
                    <div className="col-4"></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4"></div>
                    <h4 className="col-3">Choose Tee Time</h4>
                    <select onChange={handleTimeChange} id="dropdown">
                        <option value=""></option>
                        <option value="6:00:00">6:00am</option>
                        <option value="6:15:00">6:15am</option>
                        <option value="6:30:00">6:30am</option>
                        <option value="6:45:00">6:45am</option>
                        <option value="7:00:00">7:00am</option>
                        <option value="7:15:00">7:15am</option>
                        <option value="7:30:00">7:30am</option>
                        <option value="7:45:00">7:45am</option>
                        <option value="8:00:00">8:00am</option>
                        <option value="8:15:00">8:15am</option>
                        <option value="8:30:00">8:30am</option>
                        <option value="8:45:00">8:45am</option>
                        <option value="9:00:00">9:00am</option>
                        <option value="9:15:00">9:15am</option>
                        <option value="9:30:00">9:30am</option>
                        <option value="9:45:00">9:45am</option>
                        <option value="10:00:00">10:00am</option>
                        <option value="10:15:00">10:15am</option>
                        <option value="11:30:00">11:30am</option>
                        <option value="11:45:00">11:45am</option>
                        <option value="12:00:00">12:00pm</option>
                        <option value="12:15:00">12:15pm</option>
                        <option value="12:30:00">12:30pm</option>
                        <option value="12:45:00">12:45pm</option>
                        <option value="13:00:00">1:00pm</option>
                        <option value="13:15:00">1:15pm</option>
                        <option value="13:30:00">1:30pm</option>
                        <option value="13:45:00">1:45pm</option>
                        <option value="14:00:00">2:00pm</option>
                        <option value="14:15:00">2:15pm</option>
                        <option value="14:30:00">2:30pm</option>
                        <option value="14:45:00">2:45pm</option>
                        <option value="15:00:00">3:00pm</option>
                        <option value="15:15:00">3:15pm</option>
                        <option value="15:30:00">3:30pm</option>
                    </select>
                </div>
                <br></br>
                <div>
                    {courses.map(course => <div className="row" key={course.id}>
                        <input onChange={handleCourseChange} name={course.name} checked={isCourse === course.name} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <h3 className="col-3">{course.name}</h3>
                        <h6 className="col-5">{course.address}</h6>
                        <h6 className="col-2">{course.holes}</h6>
                        <a className="col-2" href={course.link}>Link</a>
                    </div>)}
                </div>
            </div>
            <button onClick={hostNewGame} type="button" className="btn btn-outline-success col-12 ">Create Game</button>
        </div>);
}

export default CreateGame;