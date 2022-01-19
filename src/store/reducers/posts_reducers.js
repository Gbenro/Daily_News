import { GET_POSTS, ADD_NEWSLETTER } from "../types";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action.payload };
    case ADD_NEWSLETTER:
      return { ...state, ...action.payload };
    default:
      return false;
  }
}
