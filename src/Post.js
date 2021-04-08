import React, { useState } from "react";

function Post({title, updatePost, deletePost, id, description}) {
  const [editingPost, setEditingPost] = useState(id);
  const [isEditing, setIsEditing] = useState(false);

  function handleRemove(){
    deletePost(id)
  }

  function toggleEdit() {
    setIsEditing(e => !e);
  }

  function handleChange(evt) {
    setEditingPost(evt.target.value);
  }

  function stopEditing(evt) {
    evt.preventDefault();
    updatePost(id, title, description);
    setIsEditing(false);
  }
  
  if (isEditing) {
    return (
      <div>
        <form onSubmit={stopEditing}>
          <input
            type="text"
            value={editingPost}
            onChange={handleChange}
          />
          <button>Stop Editing</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleRemove}>X</button>
      <li>{editingPost}</li>
    </div>
  );
}

export default Post;
