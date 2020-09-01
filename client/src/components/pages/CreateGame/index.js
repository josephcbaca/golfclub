import React, { useState } from "react";
import courses from "../../db";
import { Link } from 'react-router-dom';
import Navbar from "../../navbar";
import Calendar from "../../Calendar";

function CreateGame({ loggedIn, currentUser }) {
    const [isChecked, setIsChecked] = useState("");

    const handleChange = e => {
        setIsChecked(e.target.name);
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
                    <Calendar />
                    <div className="col-4"></div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4"></div>
                    <h4 className="col-3">Choose Tee Time</h4>
                    <select id="dropdown">
                        <option value=""></option>
                        <option value="600">6:00am</option>
                        <option value="615">6:15am</option>
                        <option value="630">6:30am</option>
                        <option value="645">6:45am</option>
                        <option value="700">7:00am</option>
                        <option value="615">7:15am</option>
                        <option value="630">7:30am</option>
                        <option value="645">7:45am</option>
                        <option value="700">8:00am</option>
                        <option value="615">8:15am</option>
                        <option value="630">8:30am</option>
                        <option value="645">8:45am</option>
                        <option value="700">9:00am</option>
                        <option value="615">9:15am</option>
                        <option value="630">9:30am</option>
                        <option value="645">9:45am</option>
                        <option value="700">10:00am</option>
                        <option value="615">10:15am</option>
                        <option value="630">11:30am</option>
                        <option value="645">11:45am</option>
                        <option value="700">12:00pm</option>
                        <option value="615">12:15pm</option>
                        <option value="630">12:30pm</option>
                        <option value="645">12:45pm</option>
                        <option value="700">1:00pm</option>
                        <option value="615">1:15pm</option>
                        <option value="630">1:30pm</option>
                        <option value="645">1:45pm</option>
                        <option value="700">2:00pm</option>
                        <option value="615">2:15pm</option>
                        <option value="630">2:30pm</option>
                        <option value="645">2:45pm</option>
                        <option value="700">3:00pm</option>
                        <option value="615">3:15pm</option>
                        <option value="630">3:30pm</option>
                    </select>
                </div>
                <br></br>
                <div>
                    {courses.map(course => <div className="row" key={course.id}>
                        <input onChange={handleChange} name={course.name} checked={isChecked === course.name} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <h3 className="col-3">{course.name}</h3>
                        <h6 className="col-5">{course.address}</h6>
                        <h6 className="col-2">{course.holes}</h6>
                        <a className="col-2" href={course.link}>Link</a>
                    </div>)}
                </div>
            </div>
        </div>);
}

export default CreateGame;