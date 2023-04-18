// @/store/auth/sagas

import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
import { TChangePassword, TUser } from "@/store/user/types";

import { userActions } from '@/store/user/slices';
import { loadingActions } from "../loading/slices";
import { changePassword, getUser, updateUser } from "@/services/index";

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

export function* getUserSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    const { data } = yield call(getUser);
    yield put(userActions.getUserSuccess(data));
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

export function* updateUserSaga(
  action: PayloadAction<any>
): SagaIterator {
  try {
    yield put(loadingActions.startLoadingAction(action.type));
    console.log("saa")
    const { data , message} = yield call(updateUser, action.payload);
    console.log(data)
    // yield put(userActions.getUserSuccess(data));
  } catch {}
  finally {
    yield put(loadingActions.stopLoadingAction(action.type));
  }
}

// Watcher Saga
export function* userWatcherSaga(): SagaIterator {
  yield takeEvery(userActions.changePassword.type, changePasswordSaga);
  yield takeEvery(userActions.getUser.type, getUserSaga);
  yield takeEvery(userActions.updateUser.type, updateUserSaga);
}

export default userWatcherSaga;
