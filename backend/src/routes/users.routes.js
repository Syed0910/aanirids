// src/routes/users.routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

// Routes
router.get('/', userController.getUsers);   // GET all users

module.exports = router;
module.exports = router;
