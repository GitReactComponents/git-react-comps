import React, {useState} from 'react'

const Search = () => {
  const [input, setInput] = useState('')
  let components = []
}

const handleChange = (e) => {
  e.preventDefault()
  setInput(e.target.value)
}

if (input.length > 0){
  components = components.filter((i) => {
    // return i.name.match(input)
  })
}

return (
  <div>{() => {
   <div>
      <input
      type='text'
      placeholder='Search Components'
      onChange={handleChange}
      value={input}/>
    </div>
  }}
  </div>
)

export default Search