import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";

const COURSE_URL = "/admin/courses";

const CreateCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [courses, setCourses] = useState([]);
  const [thumbnailPreview, setThumbnailPreview] = useState()

  const fileInputRef = useRef(); // Add ref for the file input
//   const convertToBase64 = (e) => {
//     console.log(e);
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = () => {
//       console.log(reader.result); // base64encoded string
//       setThumbnail(reader.result);
//     };
//     reader.onerror = (error) => {
//       console.log("error: ", error);
//     };
//   };

useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get(COURSE_URL);
        console.log(response.data);
        setCourses(response.data);
      } catch (err) {
        if (err?.response?.data?.message) {
          console.error(err);
        }
      }
    };
    getAllCourses();
  }, []);

const handleFileChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    setThumbnailPreview(URL.createObjectURL(file)); // Set the preview URL
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("courseName", courseName)
    formData.append("description", description)
    formData.append("thumbnail", thumbnail)

  
    try {
      const response = await axios.post(
        COURSE_URL,
       formData,
        {
          headers: {
           "Content-Type": "multipart/form-data" 
          },
        }
      );
      console.log(response.data);
      setCourseName("");
      setDescription("");
      setThumbnail(null);
      setThumbnailPreview(null); // Clear thumbnail preview 
      fileInputRef.current.value = null
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-light-purple mb-8">Create Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow-md">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-light-purple"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Course Image</label>
          {thumbnailPreview && <img src={thumbnailPreview} alt="Course thumbnail" className="mb-4 w-32 h-32 object-cover rounded" />}
          <input
            accept="image/*"
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-light-purple"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Course Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-light-purple"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-light-purple text-white py-3 rounded shadow-md hover:bg-purple-600 transition duration-300"
        >
          Create Course
        </button>
      </form>
    
    
    </div>
  );
};

export default CreateCourse;
