import { createContext, useState } from 'react'
import axios from 'axios'


export const CompContext = createContext(null)

export const CompProvider = (props) => {
  const [component, setComponent] = useState([])

  // app.get('/api/comp-nm', ctrlComp.readComp)
  // const getNmComps = () => {
  //   axios.get('/api/comp-nm').then((res) => {
  //     setComponent(res.data)
  //   }).catch(err => console.log(err))
  // }

  // app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
  const getMemberComp = () => {
    console.log('hit')
    console.log(component)
    axios.get('/api/member-comp').then(({res}) => {
      console.log(res.data)
      setComponent(res.data)
    }).catch(err => console.log(err))
  }

  // app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
  const createComp = (component_type, component_image, component_info, userId, username) => {
    axios.post('/api/create-comp', { component_type, component_image, component_info, userId, username })
      .then(({ data }) => {
        setComponent(data)
      }).catch(err => console.log(err))
  }

  // app.delete('/api/delete-comp/:compId', auth.userOnly, ctrlComp.deleteComp)
  const deleteComp = (component_id) => {
    axios.delete(`/api/delete-comp/:${component_id}`).then(res => {
      console.log(res.data)
      setComponent(res.data) // ? not usre about this line. Should we be setting the componet sate with res.data here?
    }).catch(err => console.log(err))
  }

  return (
    <CompContext.Provider value={{component, getMemberComp, createComp, deleteComp}}>
      {props.children}
    </CompContext.Provider>
  )
}

