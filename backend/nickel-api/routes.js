const express = require('express')
const router = express.Router()
const { postPhoto } = require('./controllers')
const { getAccessToken } = require('./middleware')

router
    .post('/', getAccessToken, postPhoto)

module.exports = router 