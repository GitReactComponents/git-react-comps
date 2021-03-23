import {createContext, useState} from 'react'
import axios from 'axios'


export const CompContext = createContext(null)

export const CompProvider = (props) => {
  const [component, setComponent] = useState({})

  // app.get('/api/posts-nm', ctrlPost.readPosts)
const getNmComps = () => {
  axios.get('./api/comp-nm').then((res) => {
    setComponent(res.data)
  }).catch(err => console.log(err))
}

// app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
const getMemberPosts = () => {
  axios.get('./api/member-comp', {}).then(({}) => {

  }).catch()
} 

// app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
const createComp = () => {
  axios.post('/api/create-comp').then(() => {
    })
  } 

// app.put('/api/personal-post/:compId', auth.userOnly, ctrlComp.editComp)
const personalPost = () => {
  axios.put(`/api/personal-post/:compId`, {}).then(({}) => {
  })
} 

// app.delete('/api/personal-post/:compId', auth.userOnly, ctrlComp.deleteComp)
const deletePersonalPost = (compId) => {
  axios.delete(`/api/personal-post/:compId`).then(() => {
  }).catch(err => console.log(err))
} 

  return (
      <CompContext.Provider value={{ component, }}>
            {props.children}
      </CompContext.Provider>
  )
}