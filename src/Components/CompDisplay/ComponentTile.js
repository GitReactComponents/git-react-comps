import './ComponentTile.scss'
import {useState, useEffect, useContext} from 'react'
import {CompContext} from '../../Context/CompContext'

const ComponentTile = (comp) => {
  // TODO: Change URL to be the url passed in by the map
  // TODO: Change h2 to be the name of the component passed in by the map

  const [componentTile, setComponentTile] = useState([])

  useEffect(() => {
    
  })
  return (
    <div className='compTile'>
      <div className='compImage' style={{ backgroundImage: `url('${comp.component_info}')` }}></div> 
      <div className='compTileName' >{comp.component_dscription}</div>
    </div>
  )
}

export default ComponentTile