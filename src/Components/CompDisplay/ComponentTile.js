import './ComponentTile.scss'

const ComponentTile = () => {
  // TODO: Change URL to be the url passed in by the map
  // TODO: Change h2 to be the name of the component passed in by the map
  return (
    <div className='compTile'>
      <div className='compImage' style={{ backgroundImage: `url('')` }}></div> 
      <div className='compTileName' >I am the component name</div>
    </div>
  )
}

export default ComponentTile