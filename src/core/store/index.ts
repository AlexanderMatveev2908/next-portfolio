import { popSlice } from "@/features/Popup/slice";
import { projectsSlice } from "@/features/Projects/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    popup: popSlice.reducer,
    projects: projectsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  devTools: {
    name: "Portfolio 🧠",
    trace: true,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
