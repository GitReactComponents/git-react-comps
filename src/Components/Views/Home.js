import React, {useState, useContext} from 'react'
import ReactSpringBtn from '../CompDisplay/ReactSpringBtn'
import ComponentCategories from '../CompDisplay/ComponentCategories'
import CategoryTile from '../CompDisplay/CategoryTile'
import './SCSS/Home.scss'




function Home() {
  const [categories, setCategories] = useState(['Button', 'Header', 'Footer', 'Navbar', 'Form', 'Card', 'List', 'Menu', 'Search', 'Tabs'])
  

  return (
    <div className='home'>
      <div>
        {categories.map((category) => {
          return <CategoryTile category={category}/>
        })}
      </div>
    </div>
  )
}

export default Home






// import React, {useState, useContext} from 'react'
// import CategoryTile from '../CompDisplay/CategoryTile'

// import ReactSpringBtn from '../CompDisplay/ReactSpringBtn'
// import ComponentCategories from '../CompDisplay/ComponentCategories'

// import './SCSS/Home.scss'



// function Home() {
//   const [categories, setCategories] = useState(['Buttons', 'Headers', 'Footers', 'Navbars', 'Forms', 'Cards', 'Lists', 'Menus', 'Searches', 'Tabs'])
  

//   return (
//     <div className='home'>
//       <div className='home-container'>
//         {categories.map((category) => {
//           return <CategoryTile category={category}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Home