// @/store/loading/slices

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "@/store/store";
import { toast } from "react-toastify";

export interface LoadingState {
  loadingActions: string[],
  messages: any
}

const initialState: LoadingState = {
  loadingActions: [],
  messages: null
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
    }),
    showMessage: (state, action) => {
      //
    },
  }
});

// Actions
export const loadingActions = {
  startLoadingAction: loadingSlice.actions.startLoadingAction,
  stopLoadingAction: loadingSlice.actions.stopLoadingAction,
  showMessage: loadingSlice.actions.showMessage
}

// Selectors
export const selectLoading= (state: RootState) => state.loading;

// Slice
export default loadingSlice.reducer;
