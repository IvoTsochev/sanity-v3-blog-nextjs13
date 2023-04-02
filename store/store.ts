import { configureStore } from "@reduxjs/toolkit";

import subModalSlice from "store/slices/subModalSlice";

export const store = configureStore({
  reducer: {
    subModal: subModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
