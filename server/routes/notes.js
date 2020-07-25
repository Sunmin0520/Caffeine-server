const express = require('express');
const router = express.Router();

const { notesController } = require('../controller');

router.post('/',notesController.addNote.post)
router.get('/',notesController.noteList.get)

module.exports = router;