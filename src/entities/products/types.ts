import { TProduct } from "@/shared";

export type StateType = {
  state: TProduct[];
};

export type ActionsType = {
  setProducts: (products: TProduct[]) => void;
};
