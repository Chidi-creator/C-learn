import { Link } from "react-router-dom";

const TeacherCourses = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-light-purple mb-6">
          My Courses
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-4 shadow-md rounded">
              <h3 className="text-xl font-bold text-gray-800">
                {course.title}
              </h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <Link
                to={`/teacher/course/${course.id}`}
                className="text-light-purple mt-4 inline-block"
              >
                View Course
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default TeacherCourses;
