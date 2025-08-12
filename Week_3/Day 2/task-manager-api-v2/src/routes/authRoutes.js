const express = require('express');
const { body } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
  body('username').notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], validateRequest, register);

router.post('/login', [
  body('email').isEmail(),
  body('password').exists()
], validateRequest, login);

module.exports = router;
