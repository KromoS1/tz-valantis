import { TFilterPayload, TGetIdsPayload } from "./types";

const get_ids = (params: TGetIdsPayload) => ({
  action: "get_ids",
  params: { ...params, limit: 50 },
});

const get_items = (ids: string[]) => ({
  action: "get_items",
  params: { ids },
});

const filter_products = (payload: TFilterPayload) => ({
  action: "filter",
  params: { ...payload },
});

export const actions = { get_ids, get_items, filter_products };
