const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { cafesController } = require('../controller');

router.get('/', auth, cafesController.regionList.get);
router.get('/region/:region_id', auth, cafesController.cafeList.get);
router.post('/', auth, cafesController.addCafe.post);
router.get('/:cafe_id', auth, cafesController.cafe.get);
router.post('/:cafe_id', auth, cafesController.addReview.post);
router.get('/rating/:cafe_id', auth, cafesController.avgRating.get);
router.post('/bookmark/:cafe_id', auth, cafesController.addBookmark.post);
router.get('/bookmark/all', auth, cafesController.bookmark.get);
router.delete('/bookmark/:bookmark_id', auth, cafesController.deleteBookmark.delete);

module.exports = router;