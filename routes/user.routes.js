

const express = require('express');
const router = express.Router();
const controller = require('../services/user.services');

// Get all users
router.get('/user/all', controller.getAllUsers);

module.exports = router;
