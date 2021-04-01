import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    const { push } = useHistory('')

    const [loggedIn, setLoggedIn] = useState(false)


    const getUser = () => {
        axios.get('/api/auth/user')
            .then(({ data }) => {
                setUser(data)
            })
    }

    const register = (firstName, lastName, birthday, email, username, password) => {
        axios.post('/api/auth/register', {firstName, lastName, birthday, email, username, password})
            .then(({data}) => {
                setUser(data)
                // setLoggedIn(true)
                push('/payment')
            })
    }

    const login = (username, password) => {
        axios.post('/api/auth/login', {username, password}).then(({data}) => {
          console.log(loggedIn)
            setUser(data)
            // setLoggedIn(true)
            push('/')
        })
    }

    const logout = () => {
        axios.post('/api/auth/logout')
            .then(() => {
                setUser('')
                push('/')
            })
    }

    const updateUser = (user, userId) => {
        axios.put('/api/auth/edit_user', {userId, isMember: true})
            .then(() => {
                setUser(...user)
                push('/')
            })
    }

    const deleteUser = (user) => {
        axios.delete(`/api/auth/delete_user/:${user.userId}`)
            .then(() => {
                setUser('')
                push('/')
            })
    }


    return (
        <AuthContext.Provider value={{user, loggedIn, setLoggedIn, getUser, setUser, login, logout, register, updateUser, deleteUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}