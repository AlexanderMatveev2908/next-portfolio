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

const init: PopState = getStorage("popup") ?? {
  isPop: null,
  content: null,
};

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
      state.content = null;
    },
  },
});

export const getPopState = (state: RootState) => state.popup;
