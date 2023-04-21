// @/store/auth/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { TPost } from "@/store/post/types";

import { postActions } from '@/store/post/slices';
import { loadingActions } from "../loading/slices";
import {
  getPost,
  deletePost,
  uploadFile,
  updatePost,
  createPost,
  likePost,
  unlikePost
} from "@/services/index";

// Worker Sagas
export function* getPostSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { data } = yield call(getPost, action.payload);
    yield put(postActions.setPost(data));
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* deletePostSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { message } = yield call(deletePost, action.payload);
    const { data } = yield call(getPost, action.payload);
    yield put(postActions.setPost(data));
    toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* updatePostSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    let result : any = yield call(uploadFile, action.payload);
    let { message } = yield call(updatePost, result);
    let { data } = yield call(getPost, {});
    yield put(postActions.setPost(data));
    toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* createPostSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    let result : any = yield call(uploadFile, action.payload);
    let { message } = yield call(createPost, result);
    let { data } = yield call(getPost, {});
    yield put(postActions.setPost(data));
    toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* likePostSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    let { message } = yield call(likePost, action.payload);
    const { data } = yield call(getPost, action.payload?.pagination);
    yield put(postActions.setPost(data));
    toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* unlikePostSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
      let { message } = yield call(unlikePost, action.payload);
      const { data } = yield call(getPost, action.payload?.pagination);
      yield put(postActions.setPost(data));
      toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

// Watcher Saga
export function* postWatcherSaga(): SagaIterator {
  yield takeEvery(postActions.getPost.type, getPostSaga);
  yield takeEvery(postActions.deletePost.type, deletePostSaga);
  yield takeEvery(postActions.updatePost.type, updatePostSaga);
  yield takeEvery(postActions.createPost.type, createPostSaga);
  yield takeEvery(postActions.likePost.type, likePostSaga);
  yield takeEvery(postActions.unlikePost.type, unlikePostSaga);
}

export default postWatcherSaga;
