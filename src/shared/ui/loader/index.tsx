import { Box, CircularProgress } from "@mui/material";
import { FC, PropsWithChildren, memo } from "react";

export const Loader: FC<PropsWithChildren> = memo(() => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
});
