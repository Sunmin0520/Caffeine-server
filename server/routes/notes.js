const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { notesController } = require('../controller');

router.get('/', auth, notesController.noteList.get);
router.post('/',auth, notesController.addNote.post);
router.get('/:note_id', auth, notesController.note.get);
router.delete('/:note_id', auth, notesController.deleteNote.delete);
router.put('/:note_id',auth, notesController.modifyNote.put);
router.get('/flavors', auth, notesController.flavors.get);

module.exports = router;