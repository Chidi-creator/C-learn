import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuthContext";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");

  // Constructing the URLs
  const COURSE_DETAILS_URL = `/admin/course/${id}`;
  const ENROLL_COURSES_URL = user ? `/students/enroll/courses/${user.user._id}` : null;

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(COURSE_DETAILS_URL);
        console.log(user)
        setCourse(response.data);  // Set the course state with the fetched data
      } catch (err) {
        console.error("Failed to fetch course details:", err);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleEnroll = async () => {
    if (!ENROLL_COURSES_URL) {
      setError("User not logged in or URL not available");
      return;
    }
        const courseparams = {course_id:id}
    try {
      const response = await axios.post(ENROLL_COURSES_URL, JSON.stringify(courseparams));
      console.log(response.data);
      console.log(ENROLL_COURSES_URL)
      navigate(`/`); // Navigate to the course page after enrollment
    } catch (err) {
      setError("Failed to enroll in course. You may already be enrolled.");
      console.error("Failed to enroll in course:", err);
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-light-purple mb-6">
        {course.courseName}
      </h2>
      <img
        src={`http://localhost:3000/files/${course.thumbnail}`}
        alt={course.coursename}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <p className="text-gray-800 text-lg mb-4">{course.description}</p>
      {error && <p className="text-red-600">{error}</p>}
      <button
        onClick={handleEnroll}
        className="bg-light-purple text-white p-2 rounded"
      >
        Enroll in Course
      </button>
    </div>
  );
};

export default CourseDetails;
