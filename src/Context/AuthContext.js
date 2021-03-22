import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    const { push } = useHistory('')

    //axios calls go here
    const getUser = () => {
        axios.get('/api/user')
            .then(({ data }) => {
                setUser(data)
            })
    }
    
    const register = () => {
        axios.post('/api/auth/register', { userName, email, firstName, lastName, password })
        .then(({data}) => {
            setUser(data)
            push('/')
        })
    }

    const login = () => {
        axios.post('/auth/login', { userName, password })
            .then(({ data }) => {
                setUser(data)
                push('/')
            })
            .catch(err => console.log(err))
    }

    const logout = () => {
        axios.post('/api/logout')
        .then(() => {
            setUser('')
            push('/')
        })
    }

    const updateUser = () => {
        axios.put('/api/edit_user', { userId, isMember: true })
        .then()
    }


    return (
        <AuthContext.AuthProvider value={{ user, getUser, setUser, login, logout, register, updateUser, deleteUser }}>
            {props.children}
        </AuthContext.AuthProvider>
    )
}