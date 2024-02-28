import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";

const useProductsBase = create<StateType & ActionsType>(set => ({
  state: [],
  setProducts: products =>
    set(() => ({
      state: [...products],
    })),
}));

export const useProducts = createSelectors(useProductsBase);
