// * This will be the main component which the home page will display inside of Home.js upon entering the website, 
// * and from here the user
// * will navigate to their desired component

import {useState, useEffect, useContext} from 'react'
import {CompContext} from '../../Context/CompContext'
import ComponentTile from './ComponentTile'

const ComponentCategories = (props) => {
  const compContext = useContext(CompContext)
  console.log(compContext)

  const [landingComponents, setLandingComponents] = useState([])

  useEffect(() => {
    console.log(landingComponents)
    console.log(compContext.component)
    compContext.getMemberComp()
    setLandingComponents(compContext.component)
  })


  return (
    <div>
      {landingComponents}
      <ComponentTile/>
    </div>
  )
}

export default ComponentCategories