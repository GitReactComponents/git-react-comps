import {useState, useEffect} from 'react'
import axios from 'axios'
import PostContext from './../../Context/PostContext'
import CompContext from './../../Context/CompContext'


const Post = () => {
  const [component, setComponent] = useState([])
  const [post, setPost] = useState([])

  const postContext = useContext(PostContext)
  const compContext = useContext(CompContext)

  // * call functions in PostContext using the above "posts".function-name in PostContext

  useEffect(() => {
    postContext.readAllPosts()
    setPost(postContext.post(component_id))

    compContext.getMemberComp()
    setComponent(compContext.component(component_id))
  }, [post])

  return (
    <div>
      {post.map(p => {
        <h3>{p.postText(component_id)}</h3>
      })}
    </div>
  )
}

export default Post
