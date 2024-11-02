const userModel = require('../models/user')

const postUser = async (req, res) => {
    const { fullname, email, password } = req.body
    try {
        const User = await userModel.signup(email, password, fullname)
        res.status(200).json(User)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const logUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const User = await userModel.login(email, password)
        res.status(200).json(User)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const getUser = async (req, res) => {
    console.log(req.params.id)
    try {
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { postUser, logUser, getUser }