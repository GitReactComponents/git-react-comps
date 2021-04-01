import { createContext, useState } from 'react'
import axios from 'axios'


export const CompContext = createContext(null)

export const CompProvider = (props) => {
  const [componentToDisplay, setComponentToDisplay] = useState(null);
  const [component, setComponent] = useState([])
  const [compType, setCompType] = useState('Button')
  const [singleComp, setSingleComp] = useState('')

  // app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
  const getMemberComp = () => {
    axios.get('/api/member-comp').then(({ res }) => {
      setComponent(res.data)
    }).catch(err => console.log(err))
  }

  const getCompType = (component_type) => {
    axios.get(`/api/get_comp_type/${component_type}`).then((res) => {
      setComponent(res.data)
    }).catch(err => console.log(err))
  }

  const getSingleComp = (component_id) => {
    const index = component.findIndex(e => e.component_id === component_id);
    setComponentToDisplay(component[index])
    console.log(component[index])
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
    <CompContext.Provider value={{ componentToDisplay, component, getMemberComp, getCompType, createComp, deleteComp, compType, setCompType, singleComp, setSingleComp, getSingleComp }}>
      {props.children}
    </CompContext.Provider>
  )
}

