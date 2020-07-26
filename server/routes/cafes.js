const express = require('express');
const router = express.Router();

const { cafesController } = require('../controller');

router.get('/', cafesController.regionList.get);

module.exports = router;