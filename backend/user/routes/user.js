const { Router, Request, Response } = require('express');
const { verifyToken, registerUser, loginUser } = require('../controllers/user');
const router = Router(); 

router.post('/register', registerUser);

router.post('/login', verifyToken, loginUser);

module.exports = router;