import React, {useContext, useEffect, useState} from 'react'
import CodepenEmbed from '../Codepen/CodepenEmbed'
import {CompContext} from '../../Context/CompContext'
import Post from './../Post/Post'


const ComponentToDisplay = () => {
  const compContext = useContext(CompContext)
  const [component, setComponent] = useState({})

  useEffect(() => {
    compContext.getSingleComp(compContext.singleComp)
    setComponent(compContext.component)
  }, [])


  return (
    <div className='component'>
      <CodepenEmbed component={component} />
      <Post/>
    </div>
  )
}

export default ComponentToDisplay
