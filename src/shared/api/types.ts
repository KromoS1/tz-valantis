export type TGetIdsPayload = { offset?: number; limit?: number };

export type TFilterPayload = {
  [key in "price" | "brand" | "product"]: string | number | undefined;
};
