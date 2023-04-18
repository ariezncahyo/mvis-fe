// @/store/loading/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";

import { loadingActions } from "../loading/slices";

// Worker Sagas
export function* showMessageSaga(
  action: PayloadAction<{type: string, message: 'string'}>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { type, message} = action.payload;
    type == 'success' ? toast.success(message) : toast.error(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

// Watcher Saga
export function* loadingWatcherSaga(): SagaIterator {
  yield takeEvery(loadingActions.showMessage.type, showMessageSaga);
}

export default loadingWatcherSaga;
