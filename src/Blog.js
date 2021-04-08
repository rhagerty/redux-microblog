import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import NewPostForm from "./NewPostForm";
import Post from "./Post"

function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector(st => st.posts);

  function handleCreate(post) {
    dispatch({
      type: "ADD_POST",
      post
    });
  }

  function handleUpdate(id, updatedPost) {
    dispatch({
      type: "UPDATE_POST",
      id,
      updatedPost 
    });
  }
  
  function handleDelete(id) {
    dispatch({ type: "REMOVE_POST", id });
  }

  const postsJSX = posts.map(post => (
    <Post
      deletePost={handleDelete}
      id={post.id}
      key={post.id}
      title={post.title}
      description={post.description}
      updatePost={handleUpdate}
    />
  ));
  return (
    <div>
      <NewPostForm createPost={handleCreate} />
      <ul>{postsJSX}</ul>
    </div>
  );
}

export default Blog;