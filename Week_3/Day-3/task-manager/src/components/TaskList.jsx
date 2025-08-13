import React from 'react';

export default function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p className="mt-6">No tasks found. Add a new task!</p>;
  }

  return (
    <ul className="space-y-4 mt-6">
      {tasks.map(task => (
        <li key={task._id} className="flex justify-between items-center p-4 border rounded shadow bg-white">
          <div>
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-gray-600">Status: {task.completed ? 'Completed' : 'Pending'}</p>
            {task.description && <p className="text-gray-500 text-sm">{task.description}</p>}
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(task)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
