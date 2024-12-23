import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";


const TeacherCourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch course details and students from the API
    axios
      .get(`/api/courses/${courseId}`)
      .then((response) => setCourse(response.data))
      .catch((error) => console.error("Error fetching course:", error));

    axios
      .get(`/api/courses/${courseId}/students`)
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, [courseId]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-light-purple mb-6">
          {course.title}
        </h2>
        <p className="mt-2 text-gray-600">{course.description}</p>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800">Upload Resources</h3>
          <UploadResources courseId={courseId} />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-800">Students Enrolled</h3>
          <ul>
            {students.map((student) => (
              <li key={student.id} className="border-b border-gray-200 py-2">
                {student.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeacherCourseDetails;
