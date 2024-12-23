import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuthContext";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const TeacherNavbar = ({ toggleSidebar }) => {
  const { logout } = useAuth();

  return (
    <>
      <nav className="bg-light-purple p-4 text-white flex justify-between">
        <div className="text-xl font-bold">
          <Link to="/"> C-learn Teacher</Link>
        </div>
        <button onClick={toggleSidebar} className="md:hidden">
          ☰
        </button>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/teacher/courses" className="hover:text-gray-300">
            Courses
          </Link>
          <Link to="/profile" className="hover:text-gray-300">
           Profile
          </Link>
          <Link to="/settings" className="hover:text-gray-300">
            Settings
          </Link>
          <div onClick={logout}>
            <PowerSettingsNewIcon /> Logout
          </div>
        </div>
      </nav>
    </>
  );
};

export default TeacherNavbar;
