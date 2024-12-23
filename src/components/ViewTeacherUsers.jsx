import { useState, useEffect } from "react";
import axios from "../api/axios";
const VIEW_TEACHERS_URL = 'admin/teachers'

const ViewTeacherUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       const getUsers = async() =>{
        try{
            const response = await axios.get(VIEW_TEACHERS_URL)
            setUsers(response.data)
        }catch(err){
            console.log(err.message)
        }
       }
       getUsers()
    }, []);



    return ( <>
     <div className="p-6">
        <h2 className="text-2xl font-bold text-light-purple mb-6">View Users</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">ID</th>
              <th className="py-2 px-4 border-b border-gray-300">Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b border-gray-300">{user._id}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.username}</td>
                <td className="py-2 px-4 border-b border-gray-300">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </> );
}
 
export default ViewTeacherUsers;