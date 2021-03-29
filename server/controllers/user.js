const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db')
        const { firstName, lastName, birthday, email, userName, password } = req.body
        const foundUser = await db.auth_db.get_user_by_email(email)
        if (foundUser.length > 0) {
            return res.status(403).send('User already exists. Please')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.auth_db.add_user([firstName, lastName, birthday, email, userName, hash])
        req.session.user = {
            userId: newUser.user_id,
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            birthday: newUser.birthday,
            email: newUser.email,
            userName: newUser.userName,
            password: newUser.password
        }

    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body
        const [foundUser] = await db.auth_db.get_user_by_email(email)
        if (!foundUser) {
            return res.status(404).send('Login failed. Please try again.')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)
        if (authenticated) {
            req.session.user = {
                userId: newUser.user_id,
                firstName: newUser.first_name,
                lastName: newUser.last_name,
                email: newUser.email,
                password: newUser.password
            }
            res.status(200).send(req.user)
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
        const deletedUser = await db.auth_db.delet_user(userId)
        return res.sendStatus(200)
    }
}

