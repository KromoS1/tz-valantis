"use client";
import { useFilter } from "@/entities";
import { CustomInput } from "@/shared";
import { Button, Card } from "@mui/material";
import { ChangeEvent, memo, useCallback } from "react";

export const FilterProducts = memo(() => {
  const { product, price, brand } = useFilter.use.state();

  const setParam = useFilter.use.setParam();
  const reset = useFilter.use.reset();

  const setValueParam = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let { name, value } = e.currentTarget;

      let val: string | number = value;

      if (name == "price") val = +value;

      setParam({ [name]: val });
    },
    [product, price, brand]
  );

  return (
    <Card sx={{ p: 2, mb: 5 }}>
      <CustomInput
        name="product"
        placeholder={"Enter name product"}
        type="text"
        value={product}
        change={setValueParam}
      />
      <CustomInput
        name="brand"
        placeholder={"Enter name brand"}
        type="text"
        value={brand}
        change={setValueParam}
      />
      <CustomInput
        name="price"
        placeholder={"Enter price product"}
        type="number"
        value={price}
        change={setValueParam}
      />
      <Button onClick={reset}>Reset</Button>
    </Card>
  );
});
