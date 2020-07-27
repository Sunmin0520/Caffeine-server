const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { notesController } = require('../controller');

router.get('/', auth, notesController.noteList.get);
router.post('/',notesController.addNote.post);
router.get('/:note_id', notesController.note.get);
router.delete('/:note_id', notesController.deleteNote.delete);
router.put('/:note_id',notesController.modifyNote.put);
router.get('/flavors', notesController.flavors.get);

module.exports = router;