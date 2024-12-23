import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";

const TEACHER_URL = "/admin/teachers";
const COURSE_URL = "/admin/courses";
const ENROL_TEACHERS_URL = "/admin/enrollTeachers";

const EnrollTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [err, setErr] = useState(null);
  const teacherInputRef = useRef();
  const courseInputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teacherRes = await axios.get(TEACHER_URL);
        const courseRes = await axios.get(COURSE_URL);
        setTeachers(teacherRes.data);
        setCourses(courseRes.data);
      } catch (err) {
        if (err?.response?.data?.message) {
          setErr(err.response.data.message);
        }
      }
    };
    fetchData();
  }, []);

  const handleEnroll = async () => {
    const enrollParameters = { selectedTeacher, selectedCourse };

    try {
      const response = await axios.post(ENROL_TEACHERS_URL, enrollParameters, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);

      // Clear inputs and state
      setSelectedTeacher("");
      setSelectedCourse("");
      teacherInputRef.current.value = "";
      courseInputRef.current.value = "";
      setErr(null);

      alert("Teacher enrolled successfully!");
    } catch (err) {
      if (err?.response?.data?.message) {
        setErr(err.response.data.message);
      } else {
        setErr("Failed to enroll teacher.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-light-purple mb-6">Enroll Teacher in Course</h2>
      {err && <p className="text-red-600">{err}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Select Teacher</label>
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="w-full p-2 border rounded"
            ref={teacherInputRef}
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.username}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Select Course</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full p-2 border rounded"
            ref={courseInputRef}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.coursename}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleEnroll} className="bg-light-purple text-white p-2 rounded">
          Enroll Teacher
        </button>
      </div>
    </div>
  );
};

export default EnrollTeachers;
 