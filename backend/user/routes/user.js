const express = require('express')
const router = express.Router()
const { postUser, logUser, getUser } = require('../controllers/user')

router
    .post('/', postUser)
    .get('/:id', getUser)
router.post('/login', logUser)

module.exports = router 