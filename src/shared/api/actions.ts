import { TGetIdsPayload } from "./types";

const get_ids = (params: TGetIdsPayload) => ({
  action: "get_ids",
  params: { ...params, limit: 50 },
});

const get_items = (ids: string[]) => ({
  action: "get_items",
  params: { ids },
});

export const actions = { get_ids, get_items };
