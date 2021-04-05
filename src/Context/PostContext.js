import {createContext, useState} from 'react'
import axios from 'axios'

export const PostContext = createContext(null);

export const PostProvider = (props) => {
  const [postS, setPostS] = useState([])

  // const readPosts = () => {
  //  axios.get('/api/post-nm').then(({data}) => {
  //    setPostS(...postS, data)
  //  })
  // }

  const readAllPosts = (component_id) => {
    axios.get('/api/member-posts', {component_id}).then(({data}) => {
      setPostS(...postS, data)
    })
  }

  const createPost = (postText) => {
    axios.post('/api/create-post', {postText}).then(({data}) => {
      setPostS(...postS, data)
    }).catch(err => {
      console.log(err)
    })
  }

  const editPost = (postId, postText) => {
    axios.put('/api/edit-post', {postId, postText}).then(({data}) => {
      setPostS(...postS, data)
    }).catch(err => {
      console.log(err)
      })
  }

  const deletePost = (postId, userId) => {
    axios.delete(`/api/delete-post/:${postId}/:${userId}`).then(({data}) => {
      setPostS(...postS, data)
    })
  }

  return (
    <PostContext.Provider value={{postS, setPostS, readAllPosts, createPost, editPost, deletePost}}>
      {props.children}
    </PostContext.Provider>
  )
}
