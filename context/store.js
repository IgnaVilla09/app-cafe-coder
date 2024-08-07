import { configureStore } from "@reduxjs/toolkit";

import counterReduce from "../features/CounterSlice";
import cartReduce from "../features/CartSlice";
import authReduce from "../features/UserSlice";

import { shopApi } from "../services/shopServices";
import { authApi } from "../services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    counter: counterReduce,
    cart: cartReduce,
    auth: authReduce,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
