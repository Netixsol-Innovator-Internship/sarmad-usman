import React, { useState, useEffect } from 'react';

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setCompleted(editingTask.completed);
      setDescription(editingTask.description || '');
    } else {
      setTitle('');
      setCompleted(false);
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, completed, description });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-4">
        {editingTask ? 'Edit Task' : 'Add New Task'}
      </h2>

      <div className="mb-4">
        <label htmlFor="title" className="block font-medium mb-1">Title</label>
        <input
          id="title"
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
            className="mr-2"
          />
          Completed
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-1">Description</label>
        <textarea
          id="description"
          className="w-full border px-3 py-2 rounded"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Optional task description"
          rows={3}
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
