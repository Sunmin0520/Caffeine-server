const express = require('express');
const router = express.Router();

const { notesController } = require('../controller');

router.get('/notelist', notesController.notelist.get);
router.get('/note',notesController.note.get);
router.post('/note/add', notesController.add_note.post);
router.put('/note/modify', notesController.modify_note.put);
//router.delete('/note/delete', notesController.delete_note.delete);

module.exports = router; 