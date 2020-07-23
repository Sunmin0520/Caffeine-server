const express = require('express');
const router = express.Router();

const { usersController } = require('../controller');

router.post('/signup', usersController.signup.post);
router.post('/signin', usersController.signin.post);
router.post('/signout', usersController.signout.post);

module.exports = router;