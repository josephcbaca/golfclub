import React, { useState } from "react";
import courses from "../../db";
import { Link } from 'react-router-dom';
import Navbar from "../../navbar";
import Calendar from "../../Calendar";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

function CreateGame({ loggedIn, currentUser }) {
    const [isDate, setIsDate] = useState("");
    const [isTime, setIsTime] = useState("");
    const [isCourse, setIsCourse] = useState("");

    const handleDateChange = e => {
        console.log(e)
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
            gameTime: isTime + " " + isDate,
            golfCourse: isCourse,
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
            <Navbar />
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col-4"></div>
                    <Calendar onClick={handleDateChange}/>
                    <div className="col-4"></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4"></div>
                    <h4 className="col-3">Choose Tee Time</h4>
                    <select onChange={handleTimeChange} id="dropdown">
                        <option value=""></option>
                        <option value="6:00am">6:00am</option>
                        <option value="6:15am">6:15am</option>
                        <option value="6:30am">6:30am</option>
                        <option value="6:45am">6:45am</option>
                        <option value="7:00am">7:00am</option>
                        <option value="7:15am">7:15am</option>
                        <option value="7:30am">7:30am</option>
                        <option value="7:45am">7:45am</option>
                        <option value="8:00am">8:00am</option>
                        <option value="8:15am">8:15am</option>
                        <option value="8:30am">8:30am</option>
                        <option value="8:45am">8:45am</option>
                        <option value="9:00am">9:00am</option>
                        <option value="9:15am">9:15am</option>
                        <option value="9:30am">9:30am</option>
                        <option value="9:45am">9:45am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="10:15am">10:15am</option>
                        <option value="11:30am">11:30am</option>
                        <option value="11:45am">11:45am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="12:15pm">12:15pm</option>
                        <option value="12:30pm">12:30pm</option>
                        <option value="12:45pm">12:45pm</option>
                        <option value="1:00pm">1:00pm</option>
                        <option value="1:15pm">1:15pm</option>
                        <option value="1:30pm">1:30pm</option>
                        <option value="1:45pm">1:45pm</option>
                        <option value="2:00pm">2:00pm</option>
                        <option value="2:15pm">2:15pm</option>
                        <option value="2:30pm">2:30pm</option>
                        <option value="2:45pm">2:45pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="3:15pm">3:15pm</option>
                        <option value="3:30pm">3:30pm</option>
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