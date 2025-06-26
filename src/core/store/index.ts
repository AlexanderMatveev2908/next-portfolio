import { popSlice } from "@/features/Popup/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    popup: popSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  devTools: {
    name: "Portfolio 🧠",
    trace: true,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
