import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CompContext} from '../../Context/CompContext'

import './ComponentTile.scss'

const ComponentTile = (comp) => {
  const compContext = useContext(CompContext)
  const {push} = useHistory('')

  const handleClick = () => { 
    compContext.setSingleComp(comp.component_id)
    console.log(comp)
    push('/component')
  }

  return (
    <div className='compTile'>
      <button onClick={handleClick}>
        <div className='compImage' style={{ backgroundImage: `url('${comp.component_image}')` }}></div> 
        <div className='compTileName' >{comp.component_description}</div>
      </button>
    </div>
  )
}

export default ComponentTile