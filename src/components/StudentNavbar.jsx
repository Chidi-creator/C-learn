import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import useAuth from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const StudentNavbar = ({ toggleSidebar }) => {
  const { logout } = useAuth();

  return (
    <nav className="bg-light-purple p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-2">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold ml-2">C-learn</h1>
        </div>
        <div className="flex gap-2">
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Courses</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <div onClick={logout}>
            <PowerSettingsNewIcon /> Logout
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StudentNavbar;
