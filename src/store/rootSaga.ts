// @/store/rootSaga
import { all, fork } from 'redux-saga/effects';

import { authWatcherSaga } from '@/store/auth/sagas';
import { userWatcherSaga } from '@/store/user/sagas';

export function* rootSaga() {
  yield all([
    fork(authWatcherSaga),
    fork(userWatcherSaga),
  ])
}

export default rootSaga;
