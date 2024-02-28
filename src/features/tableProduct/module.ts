import { useApp, useFilter, usePagination, useProducts } from "@/entities";
import { TFilterProducts } from "@/entities/filter/types";
import { useDebounce } from "@/hooks";
import { TProduct, actions, useAxiosAuthClient } from "@/shared";
import { TFilterPayload } from "@/shared/api/types";
import { useEffect, useState } from "react";

const getIdsAction = (filter: TFilterProducts, page: number) => {
  const { brand, price, product } = filter;

  if (brand || price || product) {
    return actions.filter_products(filter as TFilterPayload);
  }

  return actions.get_ids({ offset: (page - 1) * 50 });
};

const useGetActualIds = () => {
  const instance = useAxiosAuthClient();
  const page = usePagination.use.state().page;
  const setLoad = useApp.use.setLoad();
  const filter = useFilter.use.state();

  const debounceProduct = useDebounce(filter.product);
  const debouncePrice = useDebounce(filter.price);
  const debounceBrand = useDebounce(filter.brand);

  const [ids, setIds] = useState<string[]>([]);

  const getIds = async () => {
    try {
      setLoad(true);
      const action_ids = getIdsAction(filter, page);

      const res = await instance.post<{ result: string[] }>("/", action_ids);

      const arrIds = new Set(res.data.result);
      setIds(Array.from(arrIds));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIds();
  }, [debounceProduct, debouncePrice, debounceBrand, page]);

  return ids;
};

export const useGetProducts = () => {
  const instance = useAxiosAuthClient();
  const setProducts = useProducts.use.setProducts();
  const setLoad = useApp.use.setLoad();

  const ids = useGetActualIds();

  const getProducts = async () => {
    if (ids.length == 0) {
      setLoad(false);
      setProducts([]);
      return;
    }

    try {
      const resItems = await instance.post<{ result: TProduct[] }>(
        "/",
        actions.get_items(ids)
      );

      setProducts(resItems.data.result);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [ids]);
};
