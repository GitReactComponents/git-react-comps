import {createContext, useState} from 'react'
import axios from 'axios'


export const CompContext = createContext(null)

export const CompProvider = (props) => {
  const [component, setComponent] = useState({})

// app.get('/api/comp-nm', ctrlComp.readComp)
const getNmComps = () => {
  axios.get('/api/comp-nm').then((res) => {
    setComponent(res.data)
  }).catch(err => console.log(err))
}

// app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
const getMemberComp = () => {
  axios.get('/api/member-comp').then((res) => {
    setComponent(res.data)
  }).catch(err => console.log(err))
} 

// app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
const createComp = (pic, title, code, desc) => {
  axios.post('/api/create-comp', {pic, title, code, desc}).then(({data}) => {
    setComponent(data)
  }).catch(err => console.log(err))
  } 

// app.delete('/api/delete-comp/:compId', auth.userOnly, ctrlComp.deleteComp)
const deleteComp = (compId) => {
  axios.delete(`/api/delete-comp/:compId`).then(res => {
    console.log(res.data)
    setComponent(res.data)
  }).catch(err => console.log(err))
} 

  return (
      <CompContext.Provider value={{ component, }}>
            {props.children}
      </CompContext.Provider>
  )
}