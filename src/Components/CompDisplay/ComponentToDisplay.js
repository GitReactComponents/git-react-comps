import React, {useContext, useEffect, useState} from 'react'
import CodepenEmbed from '../Codepen/CodepenEmbed'
import {CompContext} from '../../Context/CompContext'
import Post from './../Post/Post'


const ComponentToDisplay = () => {
  const compContext = useContext(CompContext)
  const [component, setComponent] = useState({})

  useEffect(() => {
    compContext.getSingleComp(compContext.singleComp)
  }, [compContext.singleComp])
  

  console.log(compContext.componentToDisplay)

  return (
    <div className='component'>
      {compContext.componentToDisplay && <CodepenEmbed componentToDisplay={compContext.componentToDisplay} />}
      <Post/>
    </div>
  )
}

export default ComponentToDisplay
