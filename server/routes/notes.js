const express = require('express');
const router = express.Router();

const { notesController } = require('../controller');

router.post('/',notesController.addNote.post)
router.get('/',notesController.noteList.get)
router.get('/:note_id', notesController.note.get)

module.exports = router;