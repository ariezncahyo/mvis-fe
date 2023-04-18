// @/store/auth/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { TPost } from "@/store/post/types";

import { postActions } from '@/store/post/slices';
import { loadingActions } from "../loading/slices";
import { getPost } from "@/services/index";

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

// Watcher Saga
export function* postWatcherSaga(): SagaIterator {
  yield takeEvery(postActions.getPost.type, getPostSaga);
}

export default postWatcherSaga;