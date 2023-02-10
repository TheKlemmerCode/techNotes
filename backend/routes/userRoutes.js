const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// route route of /users
router.route('/')
    // read
    .get(usersController.getAllUsers)
    // create
    .post(usersController.createNewUser)
    // update
    .patch(usersController.updateUser)
    // delete
    .delete(usersController.deleteUser)

module.exports = router