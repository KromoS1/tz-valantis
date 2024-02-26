import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";

const usePaginationBase = create<StateType & ActionsType>(set => ({
  state: {
    page: 1,
    countPage: 10,
  },
  setPage: page =>
    set(store => ({
      state: {
        ...store.state,
        page,
      },
    })),
}));

export const usePagination = createSelectors(usePaginationBase);
