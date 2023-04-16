// @/store/auth/slice

// DUCKS pattern
import { createAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

// check if user logged
const LOCAL_USER_KEY = JSON.parse(window.localStorage.getItem("LOCAL_USER_KEY")!);
const isLogin = LOCAL_USER_KEY?.hasOwnProperty("access_token") || false;

export interface AuthState {
  isLogin: boolean,
  data: Array<Object>,
}

const initialState: AuthState = {
  isLogin: isLogin,
  data: LOCAL_USER_KEY || [],
}

// Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccedeed: (state, action) => {
      // it's okay to do this here, because immer makes it immutable under the hood😊
      state.isLogin = action.payload.isLogin;
      state.data = action.payload.data;
    }
  },
});

// Actions
export const authActions = {
  login: createAction(`${authSlice.name}/login`),
  loginSucceded: authSlice.actions.loginSuccedeed,
}

// Selectors
export const selectAuth = (state: RootState) => state.auth;

// Reducer
export default authSlice.reducer;
