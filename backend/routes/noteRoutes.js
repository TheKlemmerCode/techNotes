const express = require('express')
const router = express.Router()
const usersController = require('../controllers/notesController')

// route route of /notes
router.route('/')
    // read
    .get(usersController.getAllNotes)
    // create
    .post(usersController.createNewNote)
    // update
    .patch(usersController.updateNote)
    // delete
    .delete(usersController.deleteNote)

module.exports = router