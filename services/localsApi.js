import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";

export const localsApi = createApi({
  reducerPath: "localsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getLocals: builder.query({
      query: () => `locales.json`,
    }),
  }),
});

export const { useGetLocalsQuery } = localsApi;
