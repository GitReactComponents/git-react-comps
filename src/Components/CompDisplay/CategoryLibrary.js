import {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {CompContext} from '../../Context/CompContext';
import CategoryTile from './CategoryTile';

const CategoryLibrary = () => {

  const compContext = useContext(CompContext)
  const [category, setCategory] = useState('')
  const {catName} = useParams()

  console.log(catName);

  useEffect(() => {
    compContext.getCompType(category)
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