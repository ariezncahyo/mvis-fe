// @/store/user/slice

// DUCKS pattern
import { createAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export interface UserState {
  password_changed: Boolean,
}

const initialState: UserState = {
  password_changed: false,
}

// Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    passwordChanged: (state, action) => {
      state.password_changed = action.payload
    }
  },
});

// Actions
export const userActions = {
  changePassword: createAction(`${userSlice.name}/changePassword`),
  changePasswordSucceded: userSlice.actions.passwordChanged,
}

// Selectors
export const selectAuth = (state: RootState) => state.user;

// Reducer
export default userSlice.reducer;
