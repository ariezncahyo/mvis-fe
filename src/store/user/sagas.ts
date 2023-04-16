// @/store/auth/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { TChangePassword } from "@/store/user/types";

import { userActions } from '@/store/user/slices';
import { loadingActions } from "../loading/slices";
import { changePassword } from "@/services/index";

// Worker Sagas
export function* changePasswordSaga(
  action: PayloadAction<TChangePassword>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { data, message } = yield call(changePassword, action.payload);
    yield put(userActions.changePasswordSucceded(true));
    toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

// Watcher Saga
export function* userWatcherSaga(): SagaIterator {
  yield takeEvery(userActions.changePassword.type, changePasswordSaga);
}

export default userWatcherSaga;
