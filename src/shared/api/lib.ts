"use client";
import { AxiosInstance } from "axios";
import { md5 } from "js-md5";

function getUTCTimestamp() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = (now.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = now.getUTCDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
}

export const updateRequestIntercept = (instance: AxiosInstance) => {
  return instance.interceptors.request.use(
    config => {
      if (!config.headers["X-Auth"]) {
        const timestamp = getUTCTimestamp();

        config.headers["X-Auth"] = md5(
          `${process.env.NEXT_PUBLIC_AUTH_PASSWORD}_${timestamp}`
        );
      }

      return config;
    },
    error => Promise.reject(error)
  );
};
