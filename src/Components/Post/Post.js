import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {PostContext} from '../../Context/PostContext'


const Post = () => {
  const [post, setPost] = useState([])
  const [mapPost, setMapPost] = useState([])

  const postContext = useContext(PostContext)

  useEffect(() => {
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
