import Login from "./Pages/Login";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuthContext";
import TeachersSection from "./Pages/TeachersSection";
import StudentsSection from "./Pages/StudentsSection";
import StudentNavbar from "./components/StudentNavbar";
import Resources from "./components/Resources";
import Settings from "./components/Settings";
import Assignments from "./components/Assignments";
import ViewStudents from "./components/ViewStudents";
import Sidebar from "./components/Sidebar";
import TeacherNavbar from "./components/TeaherNavbar";
import TeacherCourses from "./Pages/TeacherCourses";
import TeacherCourseDetails from "./components/TeacherCourseDetails";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminNavbar from "./components/AdminNavbar";
import CreateCourse from "./components/CreateCourse";
import EnrollTeachers from "./components/EnrollTeachers";
import ViewStudentUsers from "./components/ViewStudentUsers";
import ViewTeacherUsers from "./components/ViewTeacherUsers";
import AllCourses from "./components/AllCourses";
import CourseDetails from "./components/CourseDetails";
import ViewTeacherCourses from "./components/ViewTeacherCourses";
import UploadResources from "./components/UploadResources";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      navigate("/user/login");
    }
  }, [user]);
  return (
    <>
      <div className=" min-h-screen flex flex-col">
        {user?.user?.role === "student" ? (
          <StudentNavbar toggleSidebar={toggleSidebar} />
        ) : user?.user?.role === "teacher" ? (
          <TeacherNavbar toggleSidebar={toggleSidebar} />
        ) : user?.user?.role === "admin" ? (
          <AdminNavbar toggleSidebar={toggleSidebar} />
        ) : null}
        <div>
          {sidebarOpen && <Sidebar />}
          <main className="flex-1 ">
            <Routes>
              {/* protected Routes */}
              <Route
                path="/"
                element={
                  user && user.user.role === "student" ? (
                    <StudentsSection />
                  ) : user && user.user.role === "teacher" ? (
                    <TeachersSection />
                  ) : user && user.user.role === "admin" ? (
                    <AdminDashboard />
                  ) : (
                    <Navigate to="/user/login" />
                  )
                }
              />
              <Route
                path="/profile/change-password"
                element={<ChangePassword />}
              />  
              <Route path="/all-courses" element={<AllCourses />} />
              <Route path="/course/:id" element={<CourseDetails />} />

              <Route path="/profile" element={<Profile />} />

              {/* Student Routes */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/resources/course/:id" element={<Resources />} />
              <Route path="/assignments" element={<Resources />} />

              {/* Techer routes */}

              <Route path="/teacher/courses" element={<TeacherCourses />} />
              <Route
                path="/teacher/upload-resources/:id"
                element={<UploadResources />}
              />
              <Route
              path="teacher/view/courses"
                element={<ViewTeacherCourses />}
              />
              <Route
                path="/teacher/course/:id"
                element={<TeacherCourseDetails />}
              />
              <Route
                path="/teacher/view-students/:courseId"
                element={<ViewStudents />}
              />

              {/* Admin Routes */}
              <Route path="/admin/create-course" element={<CreateCourse />} />
              <Route
                path="/admin/enroll-teacher"
                element={<EnrollTeachers />}
              />
              <Route
                path="/admin/view-student-users"
                element={<ViewStudentUsers />}
              />
              <Route
                path="/admin/view-teachers"
                element={<ViewTeacherUsers />}
              />

              {/* public route */}
              <Route
                path="/user/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}
