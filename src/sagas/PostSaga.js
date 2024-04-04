import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/PostAction";
import * as constant from "../constants/PostConstants";

function* addPosts(action) {
  try {
    const response = yield axios.post(
      "http://localhost:8000/posts",
      action.payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      yield put(actions.addPostsSuccess(response.data));
    } else {
      yield put(actions.addPostsFailure("Failed to add posts"));
    }
  } catch (error) {
    yield put(actions.addPostsFailure(error));
  }
}

function fetchpostapi() {
  return axios.get("http://localhost:8000/posts");
}

function* fetchPosts() {
  try {
    const response = yield call(fetchpostapi);
    yield put(actions.fetchPostSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostFailure(error));
  }
}

export function* watchFetchPosts() {
  yield takeEvery(constant.ADD_POST_REQUEST, addPosts);
  yield takeLatest(constant.GET_POST_REQUEST, fetchPosts);
}