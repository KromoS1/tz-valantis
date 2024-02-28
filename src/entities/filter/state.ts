import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";

const initState = { name: undefined, brand: undefined, price: undefined };

const useFilterBase = create<StateType & ActionsType>(set => ({
  state: { ...initState },
  setParam: param =>
    set(store => ({
      state: {
        ...store.state,
        ...param,
      },
    })),
  reset: () =>
    set(() => {
      return {
        state: { ...initState },
      };
    }),
}));

export const useFilter = createSelectors(useFilterBase);
