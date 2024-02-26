export type StateType = {
  state: {
    page: number;
    countPage: number;
  };
};

export type ActionsType = {
  setPage: (page: number) => void;
};
