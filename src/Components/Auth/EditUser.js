import React, {useState, useContext, useEffect} from 'react'
import AuthContext from '../../Context/AuthContext'



function EditUser(props) {
  const userAuth = useContext(AuthContext)

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div>
      
    </div>
  )
}


export default EditUser
