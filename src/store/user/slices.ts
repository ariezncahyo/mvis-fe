// @/store/user/slice

// DUCKS pattern
import { createAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export interface UserState {
  password_changed: Boolean,
  user: Array<Object>
}

const initialState: UserState = {
  password_changed: false,
  user: []
}

// Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    passwordChanged: (state, action) => {
      state.password_changed = action.payload
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload
    },
    updateUserSuccess: (state, action) => {
      state.user = action.payload
    },
  },
});

// Actions
export const userActions = {
  changePassword: createAction(`${userSlice.name}/changePassword`),
  changePasswordSucceded: userSlice.actions.passwordChanged,
  getUser: createAction(`${userSlice.name}/getUser`),
  getUserSuccess: userSlice.actions.getUserSuccess,
  updateUser: createAction(`${userSlice.name}/updateUser`),
  updateUserSuccess: userSlice.actions.updateUserSuccess,
}

// Selectors
export const selectAuth = (state: RootState) => state.user;

// Reducer
export default userSlice.reducer;
