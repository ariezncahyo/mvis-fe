// @/store/rootSaga
import { all, fork } from 'redux-saga/effects';

import { authWatcherSaga } from '@/store/auth/sagas';
import { userWatcherSaga } from '@/store/user/sagas';
import { loadingWatcherSaga } from '@/store/loading/sagas';
import { postWatcherSaga } from '@/store/post/sagas';

export function* rootSaga() {
  yield all([
    fork(authWatcherSaga),
    fork(userWatcherSaga),
    fork(loadingWatcherSaga),
    fork(postWatcherSaga),
  ])
}

export default rootSaga;
