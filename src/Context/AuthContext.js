import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    const { push } = useHistory('')

    const getUser = () => {
        axios.get('/api/auth/user')
            .then(({ data }) => {
                setUser(data)
            })
    }

    const register = (firstName, lastName, birthday, email, userName, password) => {
        axios.post('/api/auth/register', {firstName, lastName, birthday, email, userName, password})
            .then(({data}) => {
                setUser(data)
                push('/')
            })
    }

    const login = (userName, password) => {
        axios.post('/api/auth/login', {userName, password})
            .then(({data}) => {
                setUser(data)
                push('/')
            })
            .catch(err => console.log(err))
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
        <AuthContext.AuthProvider value={{user, getUser, setUser, login, logout, register, updateUser, deleteUser}}>
            {props.children}
        </AuthContext.AuthProvider>
    )
}