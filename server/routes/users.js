const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const { usersController } = require('../controller');

router.post('/signup', usersController.signup.post);
router.post('/signin', usersController.signin.post);
router.post('/signout', usersController.signout.post);
//router.post('/google', usersController.google.post);

module.exports = router; 