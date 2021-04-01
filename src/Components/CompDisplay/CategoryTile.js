import {useContext} from 'react'
import {CompContext} from '../../Context/CompContext'
import {useHistory} from 'react-router-dom'



const CategoryTile = (props) => {
  const compContext = useContext(CompContext)
  const {push} = useHistory('')

  const handleClick = async () => {
    await compContext.setCompType(props.category)
    push('/component_category')
  }
  
  return (
    <div>
      <button onClick={handleClick}>
          {props.category}
      </button>
    </div>
  )
}

export default CategoryTile