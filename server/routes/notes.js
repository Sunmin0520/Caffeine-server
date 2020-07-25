const express = require('express');
const router = express.Router();

const { notesController } = require('../controller');

router.post('/',notesController.addNote.post)

module.exports = router;