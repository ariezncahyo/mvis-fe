// @/store/auth/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginBody, TRegister } from "@/store/auth/types";

import { authActions } from '@/store/auth/slices';
import { loadingActions } from "../loading/slices";
import { login, register } from "@/services/index";

// Worker Sagas
export function* loginSaga(
  action: PayloadAction<LoginBody>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { data, success } = yield call(login, action.payload);
    const userData = {
      isLogin: success === true,
      data
    }
    window.localStorage.setItem("LOCAL_USER_KEY", JSON.stringify(data));
    yield put(authActions.loginSucceded(userData));
    toast.success(data.message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* registerSaga(
  action: PayloadAction<TRegister>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { data, message } = yield call(register, action.payload);
    yield put(authActions.registerSucceded(data));
    toast.success(message);
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

// Watcher Saga
export function* authWatcherSaga(): SagaIterator {
  yield takeEvery(authActions.login.type, loginSaga);
  yield takeEvery(authActions.register.type, registerSaga);
}

export default authWatcherSaga;
