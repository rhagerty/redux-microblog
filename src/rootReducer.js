import uuid from "uuid/v4";

const INITIAL_STATE = {
  posts: [],
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.posts, { post: action.post, id: uuid() }],
    };
  }
  if (action.type === "UPDATE_POST") {
    const posts = state.posts.map((post) => {
      if (post.id === action.id) {
        return { ...post, post: action.updatedPost };
      }
      return post;
    });

    return {
      ...state,
      posts,
    };
  }
  if (action.type === "REMOVE_POST") {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== action.id),
    };
  }
  return state;
}

export default reducer;
