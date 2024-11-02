const express = require('express');

const { verifyToken, registerUser, loginUser } = require('../controllers/user');
const router = express.Router(); 

router.post('/register', registerUser);

router.post('/login', verifyToken, loginUser);

module.exports = router;