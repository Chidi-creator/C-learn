import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuthContext';


const Profile = () => {
    const {user} = useAuth()
    return ( <>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-light-purple mb-6">Profile Settings</h2>
      <div className="mb-6">
        <p className="text-xl"><span className="font-semibold">Username:</span> {user?.user?.username}</p>
        <p className="text-xl"><span className="font-semibold">Email:</span> {user?.user?.email}</p>
        <p className="text-xl"><span className="font-semibold">Role:</span> {user?.user?.role}</p>
      </div>
      <ul className="space-y-4">
        <li>
          <Link to="/profile/change-password" className="text-light-purple">
            Change Password
          </Link>
        </li>
        <li>
          <Link to="/profile/deactivate-account" className="text-light-purple">
            Deactivate Account
          </Link>
        </li>
        <li>
          <Link to="/profile/update-info" className="text-light-purple">
            Update Profile Information
          </Link>
        </li>
      </ul>
    </div>
    
    
    </> );
}
 
export default Profile;