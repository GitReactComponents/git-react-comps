import React, {useState, useContext} from 'react'
import ReactSpringBtn from '../CompDisplay/ReactSpringBtn'
import ComponentCategories from '../CompDisplay/ComponentCategories'
import CategoryTile from '../CompDisplay/CategoryTile'



function Home() {
  const [categories, setCategories] = useState(['Button', 'Header', 'Footer', 'Navbar', 'Form', 'Card', 'List', 'Menu', 'Search', 'Tabs'])
  

  return (
    <div className='home'>
      Check Out Our Components By Selecting a Category
      <div>
        {categories.map((category) => {
          return <CategoryTile category={category}/>
        })}
      </div>
    </div>
  )
}

export default Home
