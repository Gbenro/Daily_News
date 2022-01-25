import * as api from "../../api";
import { GET_POSTS, ADD_NEWSLETTER, CLEAR_NEWSLETTER } from "../types";

export const getPosts = (homePost, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(homePost, page, order, limit),
});

export const addNewsletter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsletter(data),
});

export const clearNewsletter = () => ({
  type: CLEAR_NEWSLETTER,
  payload: {}
});
