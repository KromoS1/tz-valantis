export type StateType = {
  state: {
    isLoad: boolean;
  };
};

export type ActionsType = {
  setLoad: (isLoad: boolean) => void;
};
