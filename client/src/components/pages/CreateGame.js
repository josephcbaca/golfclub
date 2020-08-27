// import ListHeader from "../ListHeader";
import courses from "../db"

function CreateGame() {

    return (
        <div>
            {/* <ListHeader /> */}
            {courses.map(course => <div className="row" key={course.id}>
                <h3 className="col-3 img-size my-1">{course.name}</h3>
                <h6 className="col-5">{course.address}</h6>
                <h6 className="col-2">{course.holes}</h6>
                <a className="col-2" src={course.link}>Link</a>
            </div>)}
        </div>
    );
}


export default CreateGame;