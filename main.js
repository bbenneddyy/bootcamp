
async function getData() {
    const response = await fetch('https://firstact-api.thinc.in.th/courses');
    const data = await response.json();

    const courses_container = document.getElementById('courses-container')
    data.courses.forEach((course)=>{
        const new_course = document.createElement('div');
        const course_heading = document.createElement('h3');
        course_heading.innerText = course.abbrName + ' ' + course.courseNo;
        const course_credit = document.createElement('h4');
        course_credit.innerText = "credit: " + course.credit;
        const course_name = document.createElement('h4');
        course_name.innerText = course.courseNameTh;

        new_course.append(course_heading);
        new_course.append(course_credit);
        new_course.append(course_name);

        new_course.style= 'background-color:red';
        courses_container.append(new_course)
    })
}
getData()

