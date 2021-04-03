import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CompContext} from '../../Context/CompContext'

import './ComponentTile.scss'

const ComponentTile = (comp) => {
  const compContext = useContext(CompContext)
  const {push} = useHistory('')

  const handleClick = async () => { 
    await compContext.setSingleComp(comp.component_id)
    console.log(comp)
    push('/component')
  }

  return (
      <div className='comp-tile'>
        <button className='comp-btn' onClick={handleClick}>
          <div className='comp-image' style={{ backgroundImage: `url('${comp.component_image}')` }}></div> 
          <div className='comp-tile-name' >{comp.component_description}</div>
        </button>
      </div>
  )
}

export default ComponentTile