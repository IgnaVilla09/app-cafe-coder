import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAuthUrl, apikey } from "../databases/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signUp?key=${apikey}`,
        method: "POST",
        body: auth,
      }),
    }),
    signIn: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signInWithPassword?key=${apikey}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
