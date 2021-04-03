import React, {useState, useContext, useEffect} from 'react'
import ReactSpringBtn from '../CompDisplay/ReactSpringBtn'
import ComponentCategories from '../CompDisplay/ComponentCategories'
import CategoryTile from '../CompDisplay/CategoryTile'
import './SCSS/Home.scss'
import { AuthContext } from '../../Context/AuthContext'




function Home() {
  const userAuth = useContext(AuthContext)

  const [categories, setCategories] = useState(['Button', 'Header', 'Footer', 'Navbar', 'Form', 'Card', 'List', 'Menu', 'Search', 'Tabs'])
  
  useEffect(() => {
    userAuth.getUser()
  }, [])

  return (
    <div className='home'>

      {userAuth.user 
        ? <div>
            <div className='page-header-section'>
              <h2 className='page-header'>Select a Comp Category below</h2>
            </div>
            <div className='cat-btns'>
              {categories.map((category) => {
                return <CategoryTile category={category}/>
              })}
            </div>
          </div>
        : <div>
            <h2 className='home-title'>Welcome to Git React Comps</h2>
            <h2 className='home-sub'>Register or Login to see more!</h2>
          </div>
      }
    </div>
  )
}

export default Home
