const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {

    register: async (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const {firstName, lastName, birthday, email, username, password} = req.body
        const foundUser = await db.auth_db.get_user_username(username)
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
        const {username, password} = req.body
        const foundUser = await req.app.get('db').auth_db.get_user_username([username])
        const user = foundUser[0]
        if (!user) {
            return res.status(401).send('No user found, you must register to login.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password, please try again.')
        }
        req.session.user = {
            userId: user.user_id,
            username: user.username,
            // firstName: user.first_name,
            // lastName: user.last_name,
            // email: user.email,
            password: user.password
        }
        return res.send(req.session.user)
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
    const {id} = req.session.user
    const {firstName, lastName, email, password} = req.body
    const db = req.app.get('db')
    const result = await db.user.find_user([email])
    const existingUser = result[0]
    if(existingUser){
      console.log(req.body)
      let newPassword = existingUser.password
      if(password){
        const salt = bcrypt.genSaltSync(10)
        newPassword = bcrypt.hashSync(password, salt)
      }
      const updatedUser = await db.user.update_user([firstName, lastName, email, newPassword, id])
      const user = updatedUser[0]
      req.session.user = {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        profilePic: user.profile_pic
      }
      return res.status(200).send(req.session.user)
    }
    return res.sendStatus(404)
  },

    deleteUser: async (req, res) => {
        const db = req.app.get('db')
        const { userId } = req.query
        const deletedUser = await db.auth_db.delete_user(userId)
        return res.sendStatus(200)
    }
}

