import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./reducers/products";
import usersReducer from "./reducers/users";
import cartReducer from "./reducers/cart";
import categoryReducer from "./reducers/category";

const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
    cartReducer,
    categoryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
