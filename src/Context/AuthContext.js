import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthProvider = (props) => {
  const [user, setUser] = useState('')
  const { push } = useHistory()



    const getUser = () => {
      axios.get('/api/auth/user').then(({data}) => {
    console.log({data})
        setUser(data)
      })
    }

    const register = (firstName, lastName, birthday, email, username, password) => {
        axios.post('/api/auth/register', {firstName, lastName, birthday, email, username, password})
            .then(({data}) => {
                setUser(data)
                push('/payment')
            })
    }

    const login = (username, password) => {
        axios.post('/api/auth/login', {username, password}).then(({data}) => {
          console.log(data)
          setUser(data)
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

    // const updateUser = (user, userId) => {
    //     axios.put('/api/auth/edit_user', {userId, isMember: true})
    //         .then(() => {
    //             setUser(...user)
    //             push('/')
    //         })
    // }

  const updateUser = (firstName, lastName, email,  password, id) => {
    // console.log('hi', firstName, lastName, email, password, id)
    axios.put(`/api/auth/update/${id}`, {firstName, lastName, email, password}).then(({data}) => {
      // getUser(user)
      setUser(data)
      push('/')
    })
  }

  const deleteUser = (user) => {
    axios.delete(`/api/auth/delete_user/:${user.userId}`).then(() => {
      setUser('')
      push('/')
    })
  }


    return (
        <AuthContext.Provider value={{user, getUser, setUser, login, logout, register, updateUser, deleteUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}