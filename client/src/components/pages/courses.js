const $courseName = $(".course-name");
const $courseAddress = $(".course-address");
const $courseHoles = $(".course-holes");
const $courseLink = $(".course-link");

const getCourses = () => {
    return $.ajax({
        url: "/api/courses",
        method: "GET",
    });
}



function getCourses() {
    let courses = JSON.parse(fs.readFileSync("../db/golf.json", "utf8"));


    for (i = 0; i < courses.length; i++) {
        console.log(courses[i].name);
        console.log(courses[i].address);
        console.log(courses[i].holes);
        console.log(courses[i].link);
        console.log("------------------------")
        let courseCard = $(`<div class="card-body>`);
        let courseName = $(`<h5 class="card-title">`).text(courses[i].name);
        let courseAddress = $(`<p class="card-text">`).text(courses[i].address);
        let courseHoles = $(`<p class="card-text">`).text(courses[i].holes);
        let courseLink = $(`<a href="#" src=${courses[i].link} class="btn btn-primary">`).text("Link");

        $(courseCard).append(courseName);
        $(courseCard).append(courseAddress);
        $(courseCard).append(courseHoles);
        $(courseCard).append(courseLink);
        $("#courseList").append(courseCard);
    }
};



