const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const { Request, Response, NextFunction } = require('express');
const secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { CodNumericPersonal, emailAddress, password } = req.body;
    try {
        const user = await userModel.findOne({ emailAddress }) /* Finds user by emailAddress */
        if (user) {
            /* User is already registered */
            return res.status(400).json({message: "Email already in use."});
        } else {
            const hashedPassword = await bcrypt.hash(password, 10); /* Hashing password for security storage */

            const newUser = new userModel({ /* Creates new user if user doesn't exist */
                CodNumericPersonal, 
                emailAddress,
                password: hashedPassword,
            })
            
            await newUser.save(); /* Saving user to DB */
            return res.status(200).json({ message: "User registered successfully!"});
        }  

    } catch (err) {
        console.error("Error posting user.");
        return res.status(400).json({ message: err }); /* Server error */
    }
}

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        jwt.verify(authHeader, secret, (err) => {
            if (err) { /* Error checking */
                return res.status(403);
            };
            next();

        })
    } else {
        return res.status(401);
    }
}

const loginUser = async (req, res) => {
    const { emailAddress, password } = req.body;

    try {
        const user = await userModel.findOne({ emailAddress }) /* Finding if existing user */
        if (user) {
            
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) { /* Invalid password */
                return res.status(503).json({ message: "Invalid password - email combination. "});
            }
            
            jwt.sign({ id: user.id}, secret);
            return res.json({token, userID: user.id});    
               
            
        }
        return res.status(503).json({ message: "Invalid password - email combination. "});

    } catch (err) {
        console.error("Internal server error.");
        return res.status(400)
    }
}

const getUserByID = async ( userID ) => {
    const user = await userModel.findOne({ userID });
    if (user) {
        return JSON.stringify(user);
    }
}

module.exports = { registerUser, loginUser, verifyToken, getUserByID };