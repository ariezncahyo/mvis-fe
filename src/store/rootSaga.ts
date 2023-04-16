// @/store/rootSaga
import { all, fork } from 'redux-saga/effects';

import { authWatcherSaga } from '@/store/auth/sagas';

export function* rootSaga() {
  yield all([
    fork(authWatcherSaga),
  ])
}

export default rootSaga;
