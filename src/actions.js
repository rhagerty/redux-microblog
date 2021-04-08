import { ADD_POST, REMOVE_POST, UPDATE_POST } from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function removePost(post) {
  return {
    type: REMOVE_POST,
    post
  };
}

export function updatePost(post) {
  return { type: UPDATE_POST, post };
}
