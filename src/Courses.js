import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course, index) => {
          return (
            <Course {...course} key={index} removeOneCourse={removeCourse} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;

// course={course} bu ilk yöntemimizdir bu şekilde bir compenentten child compenente props ile veri aktarabilirim.
