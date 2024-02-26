"use client";
import { useApp } from "@/entities";
import { ListItems, PaginationProducts } from "@/features";
import { useGetProducts } from "@/features/tableProduct/module";
import { Loader } from "@/shared";
import { memo } from "react";

export const ProductsWidget = memo(() => {
  useGetProducts();
  const isLoad = useApp.use.state().isLoad;
  return (
    <>
      <PaginationProducts />
      {isLoad ? <Loader /> : <ListItems />}
      <PaginationProducts />
    </>
  );
});
