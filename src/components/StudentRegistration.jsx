import React, { useState } from 'react';

const StudentRegistration = () => {

  const [courses] = useState([
    { id: 1, name: 'Hindi', type: 'Individual' },
    { id: 2, name: 'English', type: 'Group' },
    { id: 3, name: 'Urdu', type: 'Special' },
    { id: 4, name: 'Math', type: 'Group' },
    { id: 5, name: 'Science', type: 'Individual' },
  ]);


  const [students, setStudents] = useState([]);


  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [studentName, setStudentName] = useState('');

  
  const handleRegisterStudent = () => {
    if (!studentName.trim()) return alert('Please enter a student name');
    if (!selectedCourse) return alert('Please select a course');
    
    setStudents([...students, { name: studentName.trim(), course: selectedCourse }]);
    setStudentName('');
  };

  
  const filteredCourses = selectedCourseType
    ? courses.filter(course => course.type === selectedCourseType)
    : courses;

  const getRegisteredStudents = (courseName) => {
    return students.filter(student => student.course === courseName);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Student Registration</h2>


      <div className="mb-4">
        <select
          value={selectedCourseType}
          onChange={(e) => setSelectedCourseType(e.target.value)}
          className="border px-2 py-1 mb-4 w-full"
        >
          <option value="">Select Course Type</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Special">Special</option>
        </select>
      </div>

      
      <div className="mb-4">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border px-2 py-1 mb-4 w-full"
        >
          <option value="">Select a Course</option>
          {filteredCourses.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Student Name Input */}
      <div className="mb-4">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter student name"
          className="border px-2 py-1 mb-4 w-full"
        />
        <button onClick={handleRegisterStudent} className="bg-blue-500 text-white px-3 py-1 rounded w-full">
          Register Student
        </button>
      </div>

      {/* Display Registered Students for Selected Course */}
      {selectedCourse && (
        <div>
          <h3 className="text-lg font-bold mb-2">
            Registered Students for {selectedCourse}:
          </h3>
          <ul>
            {getRegisteredStudents(selectedCourse).map((student, index) => (
              <li key={index} className="border-b py-2">
                {student.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentRegistration;
