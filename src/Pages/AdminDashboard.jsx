import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
const STATISTICS_URL = '/admin/statistics'
const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalTeachers: 0,
        totalCourses: 0,
        totalEnrollments: 0,
    })
    useEffect(() => {
        const fetchData = async () =>{
            const response = await axios.get(STATISTICS_URL)
            setStats({
                totalUsers: response.data.totalUsers,
                totalTeachers: response.data.totalTeachers,
                totalCourses: response.data.totalCourses,
                totalEnrollments: response.data.totalEnrollments
            })
        }
        fetchData()

    }, []);
    return ( 

<div className="p-6">

      <h2 className="text-2xl font-bold text-light-purple mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold text-gray-800">Total Users</h3>
          <p className="mt-2 text-gray-600">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold text-gray-800">Total Teachers</h3>
          <p className="mt-2 text-gray-600">{stats.totalTeachers}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold text-gray-800">Total Courses</h3>
          <p className="mt-2 text-gray-600">{stats.totalCourses}</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h3 className="text-lg font-bold text-gray-800">Total Enrollments</h3>
          <p className="mt-2 text-gray-600">{stats.totalEnrollments}</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-light-purple mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/admin/create-course" className="bg-light-purple text-white p-4 rounded shadow-md text-center">
            Create Course
          </Link>
          <Link to="/admin/enroll-teacher" className="bg-light-purple text-white p-4 rounded shadow-md text-center">
            Enroll Teacher
          </Link>
          <Link to="/admin/view-student-users" className="bg-light-purple text-white p-4 rounded shadow-md text-center">
            View Students
          </Link>
          <Link to="/admin/view-teachers" className="bg-light-purple text-white p-4 rounded shadow-md text-center">
            View Teachers
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-light-purple mb-4">Recent Activities</h3>
        <div className="bg-white p-4 shadow-md rounded">
          <ul>
           
              <li  className="mb-2">
                <span className="text-gray-800 font-bold">Username</span> -Activity Action -{" "}
                <span className="text-gray-600">Time</span>
              </li>
         
          </ul>
        </div>
      </div>
    </div>
    );
}
 
export default AdminDashboard;