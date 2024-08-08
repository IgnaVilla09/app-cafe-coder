import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const shopApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["profileImageGet"],
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
    postOrders: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    getProfileimage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ["profileImageGet"],
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: "PUT",
        body: {
          image: image,
        },
      }),
      invalidatesTags: ["profileImageGet"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetAccesoriesQuery,
  usePostOrdersMutation,
  useGetProfileimageQuery,
  usePostProfileImageMutation,
} = shopApi;
