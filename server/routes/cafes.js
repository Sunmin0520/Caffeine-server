const express = require('express');
const router = express.Router();

const { cafesController } = require('../controller');

router.get('/', cafesController.regionList.get);
router.get('/:region_id', cafesController.cafeList.get)

module.exports = router;