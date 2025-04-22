import React, { useState } from 'react';

const CourseManager = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Hindi' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Urdu' },
  ]);

  const [newCourse, setNewCourse] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = () => {
    if (!newCourse.trim()) return alert('Please enter a course name');
    const newEntry = {
      id: Date.now(),
      name: newCourse.trim(),
    };
    setCourses([...courses, newEntry]);
    setNewCourse('');
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = () => {
    if (!editName.trim()) return alert('Please enter a valid name');
    setCourses(
      courses.map((course) =>
        course.id === editId ? { ...course, name: editName.trim() } : course
      )
    );
    setEditId(null);
    setEditName('');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Course Manager</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="New Course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>

      <ul>
        {courses.map((course) => (
          <li key={course.id} className="flex items-center justify-between border-b py-2">
            {editId === course.id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="border px-2 py-1 mr-2"
                />
                <button onClick={handleUpdate} className="bg-green-500 text-white px-2 py-1 mr-2 rounded">
                  Save
                </button>
                <button onClick={() => setEditId(null)} className="bg-gray-300 px-2 py-1 rounded">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{course.name}</span>
                <div>
                  <button
                    onClick={() => handleEdit(course.id, course.name)}
                    className="text-yellow-600 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;
