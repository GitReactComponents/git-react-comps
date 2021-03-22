import { useContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)

    //axios calls go here
    const getUser = () => {
        axios.get()
    }


    return (
        <AuthContext.AuthProvider value={{ user, getUser, setUser, login, logout, register, updateUser, deleteUser }}>
            {props.children}
        </AuthContext.AuthProvider>
    )
}




// const AuthContext = React.createContext()

// const AuthProvider = AuthContext.Provider
// const AuthConsumer = AuthContext.Consumer

// export { AuthProvider, AuthConsumer }