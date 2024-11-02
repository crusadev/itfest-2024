const { Router, Request, Response } = require('express');
const { verifyToken, registerUser, loginUser } = require('../controllers/user');
const router = Router(); 

router.post('/register', (req, res) => { registerUser()});

router.post('/login', verifyToken, (req, res) => { loginUser()});

module.exports = router;