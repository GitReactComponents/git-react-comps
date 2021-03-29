import * as React from 'react'
import {useParams} from 'react-router-dom'


const CategoryLibrary = () => {

  const compContext = React.useContext(CompContext)
  const [category, setCategory] = React.useState('')
  const {catName} = useParams()

  React.useEffect(() => {
    compContext
  }, catName)

  const handleClick = () => {
    
  }

  return (
    <div>
      <CategoryTile />
    </div>
  )
}

export default CategoryLibrary