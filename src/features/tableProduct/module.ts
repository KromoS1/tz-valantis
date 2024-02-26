import { useApp, usePagination, useProducts } from "@/entities";
import { TProduct, actions, useAxiosAuthClient } from "@/shared";
import { useEffect } from "react";

export const useGetProducts = () => {
  const instance = useAxiosAuthClient();
  const setProducts = useProducts.use.setProducts();
  const page = usePagination.use.state().page;
  const setLoad = useApp.use.setLoad();

  useEffect(() => {
    const get = async () => {
      setLoad(true);
      try {
        const res = await instance.post<{ result: string[] }>(
          "/",
          actions.get_ids({ offset: (page - 1) * 50 })
        );

        const arrIds = new Set(res.data.result);

        try {
          const resItems = await instance.post<{ result: TProduct[] }>(
            "/",
            actions.get_items(Array.from(arrIds))
          );
          setProducts(resItems.data.result);
          setLoad(false);
        } catch (error) {
          setLoad(false);
          console.error(error);
        }
      } catch (error) {
        setLoad(false);
        console.error(error);
      }
    };

    get();
  }, [page]);
};
