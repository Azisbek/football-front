import { configureStore } from "@reduxjs/toolkit";

import { screenSlice } from "./screen.slice";

export const store = configureStore({
  reducer: {
    [screenSlice.name]: screenSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat($api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
