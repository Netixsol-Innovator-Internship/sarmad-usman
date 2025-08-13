import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import TaskList from '../TaskList';
import TaskForm from '../TaskForm';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch {
      setError('Failed to fetch tasks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData);
      setTasks(prev => [...prev, response.data]);
    } catch {
      alert('Failed to add task.');
    }
  };

  const updateTask = async (taskData) => {
    try {
      const response = await api.put(`/tasks/${editingTask._id}`, taskData);
      setTasks(prev =>
        prev.map(task => (task._id === editingTask._id ? response.data : task))
      );
      setEditingTask(null);
    } catch {
      alert('Failed to update task.');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks(prev => prev.filter(task => task._id !== taskId));
    } catch {
      alert('Failed to delete task.');
    }
  };

  const handleFormSubmit = (taskData) => {
    if (editingTask) {
      updateTask(taskData);
    } else {
      addTask(taskData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>

      {error && <p className="mb-4 text-red-600">{error}</p>}

      <TaskForm
        onSubmit={handleFormSubmit}
        editingTask={editingTask}
        onCancel={() => setEditingTask(null)}
      />

      {loading ? (
        <p className="mt-6">Loading tasks...</p>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={deleteTask}
        />
      )}
    </div>
  );
}
