const express = require('express');
const router = express.Router();

const { cafesController } = require('../controller');

router.get('/', cafesController.regionList.get);
router.get('/region/:region_id', cafesController.cafeList.get);
router.post('/', cafesController.addCafe.post);
router.get('/:cafe_id', cafesController.cafe.get);
router.post('/:cafe_id', cafesController.addReview.post);
router.get('/rating/:cafe_id', cafesController.avgRating.get);

module.exports = router;