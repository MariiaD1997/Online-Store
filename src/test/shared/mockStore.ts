import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../../redux/reducers/products";
import usersReducer from "../../redux/reducers/users";
import singleProductReducer from "../../redux/reducers/singleProduct";
import cartReducer from "../../redux/reducers/cart";
import categoryReducer from "../../redux/reducers/category";

const createStore = () => {
  const store = configureStore({
    reducer: {
      productsReducer,
      usersReducer,
      singleProductReducer,
      cartReducer,
      categoryReducer,
    },
  });
  return store;
};

export default createStore;
