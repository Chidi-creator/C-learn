import useAuth from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { FaBook, FaUpload, FaCog } from "react-icons/fa";  // Importing icons

const TeachersSection = () => {
  const { user } = useAuth();
  const nameArr = user?.user?.username.split(' ')
  const username = nameArr[0]
  const currentDate = new Date().toLocaleDateString(); // Get the current date

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-light-purple">Dashboard</h2>
          <p className="text-gray-600">Welcome, {username}!</p>
          <p className="text-gray-400">{currentDate}</p>
        </div>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-md rounded hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <FaBook className="mr-2 text-light-purple" /> My Courses
          </h3>
          <p className="mt-2 text-gray-600">View and manage your courses.</p>
          <Link to="/teacher/view/courses" className="text-light-purple mt-4 inline-block">
            View Courses
          </Link>
        </div>
        <div className="bg-white p-4 shadow-md rounded hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <FaUpload className="mr-2 text-light-purple" /> Upload Resources
          </h3>
          <p className="mt-2 text-gray-600">Upload course materials and resources.</p>
          <Link to="/teacher/upload-resources" className="text-light-purple mt-4 inline-block">
            Upload Resources
          </Link>
        </div>
        <div className="bg-white p-4 shadow-md rounded hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <FaCog className="mr-2 text-light-purple" /> Settings
          </h3>
          <p className="mt-2 text-gray-600">Manage your account settings.</p>
          <Link to="/teacher/settings" className="text-light-purple mt-4 inline-block">
            Go to Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;
