"use client";
import { useEffect } from "react";
import { updateRequestIntercept } from "./lib";
import { instance } from "./base";

export const useAxiosAuthClient = () => {
  useEffect(() => {
    const requestIntercept = updateRequestIntercept(instance);

    return () => {
      instance.interceptors.request.eject(requestIntercept);
    };
  }, []);

  return instance;
};
