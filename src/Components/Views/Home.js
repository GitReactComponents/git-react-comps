import React from 'react'
// import {useChain, animated} from 'react-spring'
import CategoryTile from '../CompDisplay/CategoryTile'

function Home() {
  
  const [category, setCategory] = React.useState(['Button', 'Card', 'Footer', 'Form', 'Header', 'List', 'Menu', 'Nav Bar', 'Search', 'Tabs'])

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
