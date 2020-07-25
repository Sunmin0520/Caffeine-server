const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const { usersController } = require('../controller');

router.post('/signup', auth, usersController.signup.post);
router.post('/signin', auth, usersController.signin.post);
router.post('/signout', auth, usersController.signout.post);

module.exports = router; 