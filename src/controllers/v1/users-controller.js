const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const users = []

const getUsers = (req, res) => {
    res.send(users)
}

const getUserById = (req, res) => {
    const { userId } = req.params;
    const index = users.findIndex((item) => item.id == userId)
    if (index !== -1) {
        res.send({ data: users[index] })
    } else {
        res.status(404).send({})
    }
}

const newUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const encrypassword = await bcrypt.hash(password, 10)
        users.push({
            id: users.length + 1,
            email: email,
            password: encrypassword
        })
        res.send({messagge: "User added"})
    } catch (error) {
        throw new Error(error)
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user =  users.find((element) => element.email == email)
        if(!user) {
            throw { code: 401, messagge: 'User or password incorrect'}
        }
        const isOk = await bcrypt.compare(password, user.password)
        if(!isOk) {
            throw { code: 401, messagge: 'User or password incorrect'}
        }

        const token = jwt.sign({
            userId: user.id,
            email: user.email
        }, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.send({token})
        
    } catch (error) {
        res.status(error.code).send({message: error.messagge})
    }
}

module.exports = {
    getUsers,
    getUserById,
    login,
    newUser
}