const express = require('express');
const router = express.Router();

const { usersController } = require('../controller');

router.post('/signup', usersController.signup.post);
router.post('/signin', usersController.signin.post);
router.post('/signout', usersController.signout.post);
router.post('/google', usersController.google.post);
router.post('/facebook', usersController.facebook.post);

module.exports = router; 