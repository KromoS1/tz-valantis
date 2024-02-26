import { usePagination } from "@/entities";
import { Pagination, Stack } from "@mui/material";
import { memo, useCallback } from "react";

export const PaginationProducts = memo(() => {
  const { page, countPage } = usePagination.use.state();
  const setPage = usePagination.use.setPage();

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    []
  );

  return (
    <Stack spacing={2} sx={{ marginBottom: "40px" }}>
      <Pagination count={countPage} page={page} onChange={handleChange} />
    </Stack>
  );
});
