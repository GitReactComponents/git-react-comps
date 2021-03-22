import { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)

    //axios calls go here
    const getUser = () => {
        axios.get('/api/user')
        .then()
    }


    return (
        <AuthContext.AuthProvider value={{ user, getUser, setUser, login, logout, register, updateUser, deleteUser }}>
            {props.children}
        </AuthContext.AuthProvider>
    )
}