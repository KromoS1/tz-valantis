export type TFilterProducts = {
  product?: string;
  brand?: string;
  price?: number;
};

export type StateType = {
  state: TFilterProducts;
};

export type ActionsType = {
  setParam: (param: TFilterProducts) => void;
  reset: () => void;
};
