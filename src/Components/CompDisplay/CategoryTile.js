import {useContext} from 'react'
import {CompContext} from '../../Context/CompContext'
import {useHistory} from 'react-router-dom'



const CategoryTile = (props) => {
  const compContext = useContext(CompContext)
  const {push} = useHistory('')

  const handleChange = () => {
    compContext.setCompType(props.category)
    push('/component_category')
  }
  
  return (
    <div>
      <button onclick={handleChange}>
          {props.category}
      </button>
    </div>
  )
}

export default CategoryTile