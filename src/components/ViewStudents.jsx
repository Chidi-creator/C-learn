import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

const ViewStudents = () => {
  const { courseId } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the API
    axios
      .get(`/api/courses/${courseId}/students`)
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, [courseId]);
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-light-purple mb-6">
          Students Enrolled in Course {courseId}
        </h2>
        <div className="bg-white p-4 shadow-md rounded">
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

export default ViewStudents;
