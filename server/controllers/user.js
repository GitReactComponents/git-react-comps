const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {

    register: async (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {firstName, lastName, birthday, email, username, password} = req.body
        const foundUser = await db.auth_db.get_user_by_email(email)
        if (foundUser.length > 0) {
            return res.status(403).send('User already exists. Please')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.auth_db.add_user([firstName, lastName, birthday, email, username, hash])
        req.session.user = {
            userId: newUser.user_id,
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            birthday: newUser.birthday,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password
        }
        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const [foundUser] = await db.auth_db.get_user_by_email(email)
        console.log(foundUser)
        if (!foundUser) {
            return res.status(404).send('Login failed. Please try again.')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated) {
            req.session.user = {
                userId: foundUser.user_id,
                userName: foundUser.username,
                firstName: foundUser.first_name,
                lastName: foundUser.last_name,
                email: foundUser.email,
                password: foundUser.password
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Login failed. Please try again.')
        }
    },

    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('Please Log In')
        }
    },

    editUser: async (req, res) => {
        const db = req.app.get('db')
        const { userId, isMember } = req.body
        const [updatedUser] = await db.auth_db.update_user(userId, isMember)
        return res.status(200).send(updatedUser)
    },

    deleteUser: async (req, res) => {
        const db = req.app.get('db')
        const { userId } = req.query
        const deletedUser = await db.auth_db.delete_user(userId)
        return res.sendStatus(200)
    }
}

