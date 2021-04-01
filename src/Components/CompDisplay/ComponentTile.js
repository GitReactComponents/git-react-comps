import './ComponentTile.scss'

const ComponentTile = (comp) => {
  // TODO: Change URL to be the url passed in by the map
  // TODO: Change h2 to be the name of the component passed in by the map

  return (
    <div className='compTile'>
      <div className='compImage' style={{ backgroundImage: `url('${comp.component_image}')` }}></div> 
      <div className='compTileName' >{comp.component_description}</div>
    </div>
  )
}

export default ComponentTile