// * This will be the main component which the home page will display inside of Home.js upon entering the website, 
// * and from here the user
// * will navigate to their desired component

import {useState, useEffect, useContext} from 'react'
import {CompContext} from '../../Context/CompContext'
import ComponentTile from './ComponentTile'
import './ComponentCategories.scss'

const ComponentCategories = (props) => {
  const compContext = useContext(CompContext)

  const [landingComponents, setLandingComponents] = useState([])

  useEffect(() => {
    compContext.getCompType(compContext.compType)
      setLandingComponents(compContext.component)
  },[])


  return (
    
    <div className='component_category'>
        {landingComponents.map(({component_image, component_description, component_id}) => {
          return <ComponentTile key={component_id} component_image={component_image} component_description={component_description}/>
        })}
    </div>
  )
}

export default ComponentCategories
