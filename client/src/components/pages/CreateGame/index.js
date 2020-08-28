import React from "react";
import courses from "../../db";

function CreateGame() {
    return (
        <div>
            {courses.map(course => <div className="row" key={course.id}>
                <h3 className="col-3">{course.name}</h3>
                <h6 className="col-5">{course.address}</h6>
                <h6 className="col-2">{course.holes}</h6>
                <a className="col-2" href={course.link}>Link</a>
            </div>)}
        </div>
    );
}

export default CreateGame;