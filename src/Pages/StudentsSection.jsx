import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuthContext";
import axios from "../api/axios";

const StudentsSection = () => {
  const { user } = useAuth();
  const nameArr = user?.user?.username.split(" ");
  const username = nameArr[0];
  const STUDENT_COURSES_URL = `/students/enroll/courses/${user.user._id}`;

  const RECOMMENDED_COURSES_URL = `/recommended-courses/${user.user._id}`;

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get(STUDENT_COURSES_URL);
        setEnrolledCourses(response.data);
      } catch (err) {
        console.error("Failed to fetch enrolled courses:", err);
      }
    };

    const fetchRecommendedCourses = async () => {
      try {
        const response = await axios.get(RECOMMENDED_COURSES_URL);
        setRecommendedCourses(response.data);
      } catch (err) {
        console.error("Failed to fetch recommended courses:", err);
      }
    };

    fetchEnrolledCourses();
    fetchRecommendedCourses();
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen relative">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-light-purple">
            Welcome to C-learn, {username}!
          </h2>
          <p className="text-gray-700">Your personalized learning dashboard</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-light-purple mb-4">
            My Enrolled Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.length ? (
              enrolledCourses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white p-4 shadow-md rounded"
                >
                  <img
                    src={`http://localhost:3000/files/${course.thumbnail}`}
                    alt={course.courseName}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h4 className="text-xl font-bold text-gray-800">
                    {course.coursename}
                  </h4>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  <Link
                    to={`/resources/course/${course._id}`}
                    className="text-light-purple mt-4 inline-block"
                  >
                    View Resources
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                You are not enrolled in any courses yet.
              </p>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-light-purple mb-4">
            {" "}
            Courses Recommended For You
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.length ? (
              recommendedCourses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white p-4 shadow-md rounded"
                >
                  <img
                    src={`http://localhost:3000/files/${course.thumbnail}`}
                    alt={course.coursename}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h4 className="text-xl font-bold text-gray-800">
                    {course.coursename}
                  </h4>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  <Link
                    to={`/course/${course._id}`}
                    className="text-light-purple mt-4 inline-block"
                  >
                    View Course
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No recommended courses available.</p>
            )}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-light-purple mb-4">
            Upcoming Deadlines
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>No upcoming deadlines</li>
          </ul>
        </div>

        <div>
          <Link
            to="/all-courses"
            className="bg-light-purple text-white p-2 rounded"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentsSection;
