import {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const CategoryLibrary = () => {

  const compContext = useContext(CompContext)
  const [category, setCategory] = useState('')
  const {catName} = useParams()

  useEffect(() => {
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