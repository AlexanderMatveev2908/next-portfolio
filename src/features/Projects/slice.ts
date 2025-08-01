import { getStorage } from "@/core/lib/storage";
import { TypeApp } from "./uiFactory";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "@/core/store";

export type FilterAppType = TypeApp | "All";

export type ProjectsStateType = {
  currFilter: FilterAppType;
  currSorter: string;
  currPage: number;
  currBlock: number;
};

const defState: ProjectsStateType = {
  currFilter: "All",
  currSorter: "",
  currPage: 0,
  currBlock: 0,
};

export type PaginationFieldType = "currPage" | "currBlock";

const init: ProjectsStateType = getStorage("apps") ?? defState;

export const projectsSlice = createSlice({
  name: "projects",
  initialState: init,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterAppType>) => {
      state.currFilter = action.payload;
    },
    setSorter: (state, action: PayloadAction<string>) => {
      state.currSorter = action.payload;
    },
    setPagination: (
      state,
      action: PayloadAction<{ field: PaginationFieldType; val: number }>
    ) => {
      state[action.payload.field] = action.payload.val;
    },
  },
});

export const getProjectsState = (state: RootStateType) => state.projects;
