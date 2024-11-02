const express = require('express')
const router = express.Router()
const { postPhoto } = require('./controllers')
const { getAccessToken } = require('./middleware')
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({storage:storage})


router
    .post('/', getAccessToken,upload.single("file"),postPhoto)

module.exports = router 