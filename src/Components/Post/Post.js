import {useState, useEffect} from 'react'
import axios from 'axios'
import PostContext from './../../Context/PostContext'


const Post = () => {
  const [post, setPost] = useState([])

  const postContext = useContext(PostContext)

  // * call functions in PostContext using the above "postContext".function-name in PostContext

  useEffect(() => {
    postContext.readAllPosts()
    setPost(postContext.post(component_id))

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
