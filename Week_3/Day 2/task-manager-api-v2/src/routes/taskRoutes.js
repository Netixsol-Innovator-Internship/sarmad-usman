const express = require('express');
const { body } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const auth = require('../middleware/auth');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', auth, getTasks);
router.post('/', auth, [
  body('title').notEmpty()
], validateRequest, createTask);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
