import React, {useState} from 'react'
// import Post from '../Post/Post'
import ComponentCategories from '../CompDisplay/ComponentCategories'
// import {useChain, animated} from 'react-spring'
import CategoryTile from '../CompDisplay/CategoryTile'

function Home() {
  
  const [category, setCategory] = useState(['Button', 'Card', 'Footer', 'Form', 'Header', 'List', 'Menu', 'Nav Bar', 'Search', 'Tabs', 'Show All'])

  return (
    <div className='home'>
      This is the Home Page
      {category.map((category) => {
        return <CategoryTile category={category}/>
      })}
    </div>
  )
}

export default Home
