let tasks = [
  { id: 1, title: 'Learn Express', completed: false }
];

// GET all tasks
const getAllTasks = (req, res) => {
  res.status(200).json({
    success: true,
    data: tasks,
    message: 'Tasks retrieved successfully',
  });
};

// GET a task by ID
const getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }
  res.status(200).json({
    success: true,
    data: task,
    message: 'Task retrieved successfully',
  });
};

// POST a new task
const createTask = (req, res) => {
  const { title, completed } = req.body;
  if (typeof title !== 'string' || typeof completed !== 'boolean') {
    return res.status(400).json({
      success: false,
      message: 'Invalid data, title should be a string and completed should be a boolean',
    });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    completed,
  };
  tasks.push(newTask);
  res.status(201).json({
    success: true,
    data: newTask,
    message: 'Task created successfully',
  });
};

// PUT (update) a task by ID
const updateTask = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }

  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json({
    success: true,
    data: task,
    message: 'Task updated successfully',
  });
};

// DELETE a task by ID
const deleteTask = (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }
  tasks.splice(taskIndex, 1);
  res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
  });
};

// Define routes
const router = require('express').Router();
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
