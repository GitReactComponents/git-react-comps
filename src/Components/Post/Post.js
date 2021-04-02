import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {PostContext} from '../../Context/PostContext'


const Post = () => {
  const [post, setPost] = useState([])
  const [mapPost, setMapPost] = useState([])

  const postContext = useContext(PostContext)

  

  // * call functions in PostContext using the above "postContext".function-name in PostContext

  useEffect(() => {
    // Todo Finish ComponentToDisplay so we can finish and start front-end styling the Post component
    // postContext.readAllPosts(component_id)
    setPost(postContext.postS)
  }, [post])

  return (
    <div>
      {post.map(p => {
        <h3>{p.postText}</h3>
      })}
    </div>
  )
}

export default Post
