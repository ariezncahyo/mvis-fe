// @/store/loading/slices

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/store/store";

export interface LoadingState {
  loadingActions: string[]
}

const initialState: LoadingState = {
  loadingActions: [],
}

// Slice
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoadingAction: (
      state: LoadingState,
      action: PayloadAction<string>
    ) => ({
      ...state,
      loadingActions: [...state.loadingActions, action.payload]
    }),

    stopLoadingAction: (
      state: LoadingState,
      action: PayloadAction<string>
    ) => ({
      ...state,
      loadingActions: state.loadingActions.filter(
        (item) => item !== action.payload
      ),
    })
  }
});

// Actions
export const loadingActions = {
  startLoadingAction: loadingSlice.actions.startLoadingAction,
  stopLoadingAction: loadingSlice.actions.stopLoadingAction,
}

// Selectors
export const selectLoading= (state: RootState) => state.loading;

// Slice
export default loadingSlice.reducer;
