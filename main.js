function greeting() {
    alert("hello")
} 

async function getData() {
    const response = await fetch('https://firstact-api.thinc.in.th/courses');
    const data = await response.json();

    const courses_container = document.getElementById('courses-container')
    data.courses.forEach((courses)=>{
        const new_course = document.createElement('article');
        const course_heading = document.createElement('h3');



    }
    )
    alert(data.studyProgram)
}

const data = await getData();

alert("hello")