// @/store/post/slice

// DUCKS pattern
import { createAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export interface UserState {
  post: Array<Object>
}

const initialState: UserState = {
  post: []
}

// Slice
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload
    },
  },
});

// Actions
export const postActions = {
  getPost: createAction(`${postSlice.name}/getPost`),
  setPost: postSlice.actions.setPost,
  deletePost: createAction(`${postSlice.name}/deletePost`),
}

// Selectors
export const selectPost = (state: RootState) => state.post;

// Reducer
export default postSlice.reducer;
