const { Router, Request, Response } = require('express');
const { verifyToken, registerUser, loginUser } = require('../controllers/user');
const Router = router(); 

Router.post('/register', (req, res) => { registerUser()});

Router.post('/login', verifyToken, (req, res) => { loginUser()});