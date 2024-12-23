import { useState, useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuthContext";
import { FaBookOpen } from "react-icons/fa";
import { FaUpload } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const ViewTeacherCourses = () => {
    const { user } = useAuth();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    const TEACHER_COURSES_URL = user ? `/admin/enrollTeachers/${user.user._id}` : null;
  
    const fetchCourses = async () => {
      if (!TEACHER_COURSES_URL) {
        setError("User not logged in or URL not available");
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get(TEACHER_COURSES_URL);
        console.log(response.data)
        setCourses(response.data);
      } catch (err) {
        // setError("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (user) {
        fetchCourses();
      }
    }, [user]);
  
    if (loading) return <div>Loading...</div>;
    // if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    <h2 className="text-2xl font-bold text-light-purple mb-6">My Assigned Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.length ? (
        courses.map((course) => (
          <div key={course._id} className="bg-white p-4 shadow-md rounded hover:shadow-lg transition duration-300">
            <img
              src={`http://localhost:3000/files/${course.thumbnail}`}
              alt={course.courseName}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{course.courseName}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <div className="flex items-center mt-4">
              <FaBookOpen className="text-light-purple mr-2" />
              <Link to={`/teacher/courses/${course._id}`} className="text-light-purple">
                View Course
              </Link>
              <FaUpload className="text-light-purple mr-2 ml-4" />
              <Link to={`/teacher/upload-resources/${course._id}`} className="text-light-purple">
                Upload Resources
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No assigned courses available.</p>
      )}
    </div>
  </div>
  );
};

export default ViewTeacherCourses;
