import {createContext, useState} from 'react'
import axios from 'axios'

export const PostContext = createContext(null)

export const PostProvider = (props) => {
    const [post, setPost] = useState([])

    const readPosts = () => {
        axios.get('/api/posts-nm').then(({data}) => {
            setPost(...post, data)
        })
    }    

    

    return (
        <PostContext.Provider value={{post, setPost, readPosts, readAllPosts, createPost, editPost, deletePost}}>
            {props.children}
        </PostContext.Provider>
    )
}