/**
 * @desc
 * Module provide routes for Create user, Retrive user/s, Update user and Delete user
 * @author
 * Created by mmihic (milos.mihic.17@singimail.rs) on 09.12.2017
 * @license
 * None
 */

const express = require('express');
const router = express.Router();
const controller = require('../services/user.services');

// Get all users
router.get('/user/all', controller.getAllUsers);

module.exports = router;