const express = require('express');
const router = express.Router();
const multer = require("multer");

// 1. multer 미들웨어 등록
let upload = multer({
    dest: "upload/"
})


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
//router.post('/image', cafesController.uploadImage.post);
router.post('/upload', upload.array('photos', 3), function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
})

module.exports = router;