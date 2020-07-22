const express = require('express');
const router = express.Router();

const { notesController } = require('../controller');

router.get('/notelist', notesController.note_list.get);
router.get('/note',notesController.note.get);