import { getStorage } from "@/core/lib/storage";
import { TypeApp } from "./uiFactory";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "@/core/store";

export type FilterAppType = TypeApp | "All";

export type ProjectsStateType = {
  currFilter: FilterAppType;
};

const defState: ProjectsStateType = {
  currFilter: "All",
};

const init: ProjectsStateType = getStorage("apps") ?? defState;

export const projectsSlice = createSlice({
  name: "projects",
  initialState: init,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterAppType>) => {
      state.currFilter = action.payload;
    },
  },
});

export const getProjectsState = (state: RootStateType) => state.projects;
