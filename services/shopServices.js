import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const shopApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products.json`,
    }),
    getProductsById: builder.query({
      query: (id) => `products.json?orderBy="id"&equalTo=${id}`,
    }),
    getAccesories: builder.query({
      query: () => `accesories.json`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetAccesoriesQuery,
} = shopApi;
