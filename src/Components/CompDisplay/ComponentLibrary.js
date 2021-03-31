import {CompContext} from '../../Context/CompContext'
import {useState, useContext, useEffect} from 'react'
import ComponentTile from '../CompDisplay/ComponentTile'

const ComponentLibrary = () => {
  const compDisplay = useContext(CompContext)

  // const [readComps, setReadComps] = useState([])

  // useEffect(() => {
  //   compDisplay.getMemberComp()
  // }, [])

  return (
    <div>
      {/* {compDisplay.component.map((comp) => {
        return <ComponentTile key={comp.component_id} comp={comp} />
      })} */}
    </div>
  )
}

export default ComponentLibrary