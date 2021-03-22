import React, {useContext, useState} from 'react'
import {MenuItems} from './MenuItems'
import {Link} from 'react-router-dom'
import './Dropdown.scss'

function Dropdown() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item, i) => {
          return (
            <li key={i}>
              <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dropdown
