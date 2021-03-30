// * This will be the main component which the home page will display upon entering the website, and from here the user
// * will navigate to their desired component

import {useState, useEffect} from 'react'
import CompContext from '../../Context/CompContext'

const ComponentCategories = () => {
  const compContext = useContext(CompContext)

  const [landingComponents, setLandingComponents] = useState([])

  useEffect(() => {
    console.log(landingComponents)
    compContext.getMemberComp()
    setLandingComponents(compContext.component)
  })


  return (
    <div>
      {landingComponents}
    </div>
  )
}

export default ComponentCategories
