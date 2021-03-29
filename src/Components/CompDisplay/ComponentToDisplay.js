import React, {useContext}from 'react'
import CompContext from '../../Context/CompContext'
import ComponentToDisplay from '../Codepen/CodepenEmbed'

const ComponentToDisplay = () => {
  const compContext = useContext(CompContext)

  return (
    <div>
      <CodepenEmbed />
      {/* Post Component Goes Here */}
    </div>
  )
}

export default ComponentToDisplay
