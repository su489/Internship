import React, { useState } from 'react';

const CourseOffering = () => {
  const [courseTypes] = useState(['Individual', 'Group', 'Special']);
  const [courses] = useState(['Hindi', 'English', 'Urdu']);
  const [offerings, setOfferings] = useState([]);

  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!selectedType || !selectedCourse) {
      alert('Please select both Course Type and Course');
      return;
    }

    const newOffering = `${selectedType} - ${selectedCourse}`;
    setOfferings([...offerings, newOffering]);
    setSelectedType('');
    setSelectedCourse('');
  };

  const handleDelete = (index) => {
    const updated = [...offerings];
    updated.splice(index, 1);
    setOfferings(updated);
  };

  const handleEdit = (index) => {
    const [type, course] = offerings[index].split(' - ');
    setSelectedType(type);
    setSelectedCourse(course);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (!selectedType || !selectedCourse) {
      alert('Please select both Course Type and Course');
      return;
    }

    const updated = [...offerings];
    updated[editIndex] = `${selectedType} - ${selectedCourse}`;
    setOfferings(updated);
    setSelectedType('');
    setSelectedCourse('');
    setEditIndex(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Course Offering Manager</h2>

      <div className="flex flex-col gap-3 mb-4">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type, i) => (
            <option key={i} value={type}>{type}</option>
          ))}
        </select>

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="">Select Course</option>
          {courses.map((course, i) => (
            <option key={i} value={course}>{course}</option>
          ))}
        </select>

        {editIndex === null ? (
          <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
            Add Offering
          </button>
        ) : (
          <button onClick={handleUpdate} className="bg-green-500 text-white px-3 py-1 rounded">
            Update Offering
          </button>
        )}
      </div>

      <ul className="mt-4">
        {offerings.map((offering, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span>{offering}</span>
            <div>
              <button
                onClick={() => handleEdit(index)}
                className="text-yellow-600 mr-3"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOffering;
