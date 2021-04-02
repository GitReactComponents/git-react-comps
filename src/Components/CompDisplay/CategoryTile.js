import {useContext} from 'react'
import {CompContext} from '../../Context/CompContext'
import {useHistory} from 'react-router-dom'
import './CategoryTile.scss'


const CategoryTile = (props) => {
  const compContext = useContext(CompContext)
  const {push} = useHistory('')

  const handleClick = async () => {
    await compContext.setCompType(props.category)
    push('/component_category')
  }
  
  return (
    <div className='button-area'>
      <button className='category-buttons' onClick={handleClick}>
          {props.category}
      </button>
    </div>
  )
}

export default CategoryTile