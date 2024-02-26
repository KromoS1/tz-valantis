import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";

const useAppBase = create<StateType & ActionsType>(set => ({
  state: {
    isLoad: false,
  },
  setLoad: isLoad =>
    set(store => ({
      state: {
        ...store.state,
        isLoad,
      },
    })),
}));

export const useApp = createSelectors(useAppBase);
