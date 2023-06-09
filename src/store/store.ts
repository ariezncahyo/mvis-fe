// @store

import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootSaga } from '@/store/rootSaga';
import authReducer from '@/store/auth/slices';
import loadingReducer from '@/store/loading/slices';
import userReducer from '@/store/user/slices';
import postReducer from '@/store/post/slices';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      auth: authReducer,
      loading: loadingReducer,
      user: userReducer,
      post: postReducer,
    },
    devTools: true, // .env
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: false, serializableCheck: false })
        .concat(sagaMiddleware)
        // .concat(routerMiddleware)
        // .concat(logger),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
