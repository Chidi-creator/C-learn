import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuthContext";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const AdminNavbar = ({ toggleSidebar }) => {
  const { logout } = useAuth();
  return (
    <nav className="bg-light-purple p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">C-learn Admin</Link>
      </div>
      <div className="flex space-x-3 items-center"> {/* Adjusted to always show items and center them */}
        {/* Menu toggle button for small screens */}
        <button onClick={toggleSidebar} className="md:hidden text-white">
          ☰
        </button>
        {/* Links section for medium screens and above */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/admin/create-course" className="hover:text-gray-300">
            Create Courses
          </Link>
          <Link to="/admin/view-student-users" className="hover:text-gray-300">
            View Users
          </Link>
          <Link to="/settings" className="hover:text-gray-300">
            Settings
          </Link>
        </div>
        {/* Logout button */}
        <div onClick={logout} className="flex items-center ml-auto md:ml-0"> {/* ml-auto pushes this to the right on small screens */}
          <PowerSettingsNewIcon />
          <span className="">Logout</span> {/* Show text on medium and larger screens */}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
