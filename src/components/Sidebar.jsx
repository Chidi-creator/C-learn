import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return ( <aside className="w-64 bg-white p-6 shadow-md absolute md:relative">
        <ul>
          <li className="mb-4">
            <NavLink to="/" exact className="text-gray-700 hover:text-light-purple" activeClassName="font-bold text-light-purple">
           Home
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/courses" className="text-gray-700 hover:text-light-purple" activeClassName="font-bold text-light-purple">
              My Courses
            </NavLink>
          </li>
         
          <li className="mb-4">
            {/* <NavLink to="/resources" className="text-gray-700 hover:text-light-purple" activeClassName="font-bold text-light-purple">
              Resources
            </NavLink> */}
          </li>
          <li className="mb-4">
            <NavLink to="/forums" className="text-gray-700 hover:text-light-purple" activeClassName="font-bold text-light-purple">
             Profile
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/settings" className="text-gray-700 hover:text-light-purple" activeClassName="font-bold text-light-purple">
              Settings
            </NavLink>
          </li>
        </ul>
      </aside> );
}
 
export default Sidebar;