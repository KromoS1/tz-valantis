import { create } from "zustand";
import { ActionsType, StateType } from "./types";
import { createSelectors } from "@/shared";

const useProductsBase = create<StateType & ActionsType>(set => ({
  state: [],
  setProducts: products =>
    set(store => ({
      state: [...products, ...store.state],
    })),
}));

export const useProducts = createSelectors(useProductsBase);
