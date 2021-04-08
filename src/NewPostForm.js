import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import uuidv4 from "uuid/v4";

const DEFAULT_FORM = {
  title: "",
  description: "",
  body: "",
};
function NewPostForm({ createPost }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const history = useHistory();
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    createPost({ ...form, id: uuidv4() });
    setForm(DEFAULT_FORM);
    history.push("/");
  }

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={form.title}
        />
        <label htmlFor="title">Description:</label>
        <input
          name="description"
          type="text"
          onChange={handleChange}
          value={form.description}
        />
        <label htmlFor="body">Body:</label>
        <input
          name="body"
          type="text"
          onChange={handleChange}
          value={form.body}
        />
        <button type="submit">Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default NewPostForm;
