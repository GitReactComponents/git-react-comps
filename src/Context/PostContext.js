import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const PostContext = createContext(null);

export const PostProvider = (props) => {
  const [post, setPost] = useState([]);
  const { push } = useHistory("");

  const readPosts = () => {
    axios.get("/api/posts-nm").then(({ data }) => {
      setPost(...post, data);
    });
  };

  const readAllPosts = () => {
    axios.get("/api/member-posts").then(({ data }) => {
      setPost(...post, data);
    });
  };

  const createPost = (postText) => {
    axios
      .post("/api/create-post", { postText })
      .then(({ data }) => {
        setPost(...post, data);
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPost = (postId, postText) => {
    axios
      .put("/api/edit-post", { postId, postText })
      .then(({ data }) => {
        setPost(...post, data);
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId, userId) => {
    axios.delete(`/api/delete-post/:${postId}/:${userId}`).then(({ data }) => {
      setPost(...post, data);
      push("/");
    });
  };

  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        readPosts,
        readAllPosts,
        createPost,
        editPost,
        deletePost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
