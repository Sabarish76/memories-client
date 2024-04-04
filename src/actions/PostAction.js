import * as constants from "../constants/PostConstants";

export const fetchPostRequest = () => ({
  type: constants.GET_POST_REQUEST,
});

export const fetchPostSuccess = (posts) => ({
  type: constants.GET_POST_SUCCESS,
  payload: posts,
});

export const fetchPostFailure = (error) => ({
  type: constants.GET_POST_FAILURE,
  payload: error,
});

export const addPostsRequest = (postData) => ({
  type: constants.ADD_POST_REQUEST,
  payload: postData,
});

export const addPostsSuccess = (postData) => ({
  type: constants.ADD_POST_SUCCESS,
  payload: postData,
});

export const addPostsFailure = (error) => ({
  type: constants.ADD_POST_FAILURE,
  payload: error,
});