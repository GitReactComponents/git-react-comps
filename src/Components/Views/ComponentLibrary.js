import CompContext from '../../Context/CompContext'
import {useState, useContext, useEffect} from 'react'

const ComponentLibrary = () => {
  const compDisplay = useContext(CompContext)

  const [readComps, setReadComps] = useState([])

  useEffect(() => {
    compDisplay.getMemberComp()
  }, [])

  return (
    <div>
      {}
    </div>
  )
}

export default ComponentLibrary