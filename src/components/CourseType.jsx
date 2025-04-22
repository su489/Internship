import React, { useState } from 'react';

const CourseType= () => {
  const [courseTypes, setCourseTypes] = useState([
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Group' },
    { id: 3, name: 'Special' },
  ]);

  const [newType, setNewType] = useState('');
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = () => {
    if (!newType.trim()) return alert('Please enter a course type');
    const newCourseType = {
      id: Date.now(),
      name: newType.trim(),
    };
    setCourseTypes([...courseTypes, newCourseType]);
    setNewType('');
  };

  const handleDelete = (id) => {
    setCourseTypes(courseTypes.filter((ct) => ct.id !== id));
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  const handleUpdate = () => {
    if (!editName.trim()) return alert('Please enter a valid name');
    setCourseTypes(
      courseTypes.map((ct) =>
        ct.id === editId ? { ...ct, name: editName.trim() } : ct
      )
    );
    setEditId(null);
    setEditName('');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Course Type Manager</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="New Course Type"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>

      <ul>
        {courseTypes.map((ct) => (
          <li key={ct.id} className="flex items-center justify-between border-b py-2">
            {editId === ct.id ? (
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
                <span>{ct.name}</span>
                <div>
                  <button
                    onClick={() => handleEdit(ct.id, ct.name)}
                    className="text-yellow-600 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ct.id)}
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

export default CourseType;
