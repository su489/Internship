import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import CourseType from './components/CourseType';
import CourseManager from './components/CourseManager';
import CourseOffering from './components/CourseOffering';
import StudentRegistration from './components/StudentRegistration';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4 rounded-md shadow-lg">
          <ul className="flex space-x-6 justify-center">
            <li>
              <NavLink
                to="/"
                className="text-white text-lg font-semibold hover:text-blue-500 transition duration-300"
                style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}
              >
                Course Type 
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course-manager"
                className="text-white text-lg font-semibold hover:text-blue-500 transition duration-300"
                style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}
              >
                Course Manager
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course-offering-manager"
                className="text-white text-lg font-semibold hover:text-blue-500 transition duration-300"
                style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}
              >
                Course Offering 
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/student-registration"
                className="text-white text-lg font-semibold hover:text-blue-500 transition duration-300"
                style={({ isActive }) => isActive ? { textDecoration: 'underline' } : {}}
              >
                Student Registration
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<CourseType />} />
          <Route path="/course-manager" element={<CourseManager />} />
          <Route path="/course-offering-manager" element={<CourseOffering />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
