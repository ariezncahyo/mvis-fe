// @/store/auth/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginBody } from "@/store/auth/types";

import { authActions } from '@/store/auth/slices';
import { loadingActions } from "../loading/slices";
import { login } from "@/services/index";

// Worker Sagas
export function* loginSaga(
  action: PayloadAction<LoginBody>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const data = yield call(login, action.payload);
    const { result } = data;
    const userData = {
      isLogin: data?.success === true,
      data: result
    }
    window.localStorage.setItem("LOCAL_USER_KEY", JSON.stringify(result));
    yield put(authActions.loginSucceded(userData));
    toast.success(data.message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

// Watcher Saga
export function* authWatcherSaga(): SagaIterator {
  yield takeEvery(authActions.login.type, loginSaga);
}

export default authWatcherSaga;
