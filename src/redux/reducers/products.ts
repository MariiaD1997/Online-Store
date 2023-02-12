import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CreateProduct, Product, UpdateProduct } from "../../types/products";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const result = await axios.get("https://api.escuelajs.co/api/v1/products");
  const data = result.data;
  return data;
});

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id: number) => {
    const result = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const data = result.data;
    return data;
  }
);

export const createProduct = createAsyncThunk(
  "createProduct",
  async (productData: CreateProduct) => {
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/products/",
      productData
    );
    return result.data;
  }
);

export const updateOne = createAsyncThunk(
  "updateOne",
  async (data: UpdateProduct) => {
    const { id, editedData } = data;
    const result = await axios.put(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      editedData
    );
    return result.data;
  }
);

export const deleteOne = createAsyncThunk("delete", async (id: number) => {
  const result = await axios.delete(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  const data = result.data;
  return data;
});

const initialState: Product[] = [];
const productsSlicer = createSlice({
  name: "products",
  initialState,
  reducers: {
    /*
    sortAsc: (state) => {
      state.slice().sort((a, b) => a.price - b.price);
    },
    sortDesc: (state) => {
      state.slice().sort((a, b) => b.price - a.price);
    },
    sortNames: (state) => {
      state.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
    },
    */
  },
  extraReducers: (build) => {
    build
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.sort();
        return action.payload;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(updateOne.fulfilled, (state, action) => {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            item = action.payload;
          }
          return item;
        });
      })
      .addCase(deleteOne.fulfilled, (state, action) => {
        return state;
      });
  },
});
const productsReducer = productsSlicer.reducer;
export default productsReducer;
