import { FC, memo } from "react";
import { TProduct } from "./types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

type PropsType = {
  product: TProduct;
};

export const Product: FC<PropsType> = memo(({ product }) => {
  const { id, brand, product: name, price } = product;

  return (
    <Paper
      sx={{
        width: "350px",
        height: "150px",
        marginBottom: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
      }}
      elevation={6}
    >
      <Box>
        <Typography
          sx={{ fontSize: 14, mb: 1.5 }}
          variant="h3"
          color="text.secondary"
        >
          {id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          {brand ?? "Without Brand"}
        </Typography>
        <Typography variant="body1">{price}</Typography>
      </Box>
    </Paper>
  );
});
