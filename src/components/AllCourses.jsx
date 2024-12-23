import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuthContext";

const ALL_COURSES_URL = "/admin/courses";

const AllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const {user} = useAuth()

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const response = await axios.get(ALL_COURSES_URL);
        setAllCourses(response.data);
      } catch (err) {
        console.error("Failed to fetch all courses:", err);
      }
    };

    fetchAllCourses();
    console.log(user)
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-light-purple mb-6">All Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.length ? (
          allCourses.map((course) => (
            <div key={course._id} className="bg-white p-4 shadow-md rounded">
              <img
                src={`http://localhost:3000/files/${course.thumbnail}`}
                alt={course.courseName}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800">{course.coursename}</h4>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <Link to={`/course/${course._id}`} className="text-light-purple mt-4 inline-block">
                View Course
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
