import { createSlice } from "@reduxjs/toolkit";

export interface SubModalState {
  value: boolean;
}

const initialState: SubModalState = {
  value: false,
};

export const subModalSlice = createSlice({
  name: "subModal",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = subModalSlice.actions;

export default subModalSlice.reducer;
