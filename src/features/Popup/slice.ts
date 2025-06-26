import { getStorage } from "@/core/lib/storage";
import { RootState } from "@/core/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PopContent = null | {
  title: string;
  txt: string;
};
export type PopState = {
  isPop: boolean | null;
  content: PopContent;
};

const defState = {
  isPop: null,
  content: null,
};

const init: PopState = getStorage("popup") ?? defState;
export const popSlice = createSlice({
  name: "popup",
  initialState: init,
  reducers: {
    openPop: (state, action: PayloadAction<NonNullable<PopContent>>) => {
      state.isPop = true;
      state.content = action.payload;
    },
    closePop: (state) => {
      state.isPop = false;
    },

    resetPop: () => defState,
  },
});

export const getPopState = (state: RootState) => state.popup;
