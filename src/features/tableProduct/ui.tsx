"use client";
import { memo, useMemo } from "react";
import { Product, generateRandomString } from "@/shared";

import { Box } from "@mui/material";
import { useProducts } from "@/entities";

export const ListItems = memo(() => {
  const products = useProducts.use.state();

  const list = useMemo(
    () =>
      products.map(pr => (
        <Product key={generateRandomString(12)} product={pr} />
      )),
    [products]
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 250,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexGrow: 1,
      }}
    >
      {list}
    </Box>
  );
});
