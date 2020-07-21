const express = require('express');
const router = express.Router();

const { userController } = require('../controller');

router.post('/signup', userController.signup.post);
router.post('/signin', userController.signin.post);
router.post('/signout', userController.signout.post);