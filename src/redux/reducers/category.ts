import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Category, NewCategory } from "../../types/category";

const initialState: Category[] = [];

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const result = await axios.get(
    "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
  );
  const data = result.data;
  return data;
});

export const createCategory = createAsyncThunk(
  "createCategory",
  async (categoryData: Category) => {
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/categories/",
      categoryData
    );
    const data = result.data;
    return data;
  }
);

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async ({ id, categoryData }: { id: number; categoryData: NewCategory }) => {
    const result = await axios.put(
      `https://api.escuelajs.co/api/v1/categories/${id}`,
      categoryData
    );
    const data = result.data;
    return data;
  }
);

export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (id: number) => {
    const result = await axios.delete(
      `https://api.escuelajs.co/api/v1/categories/${id}`
    );
    const data = result.data;
    return data;
  }
);

const categorySlice = createSlice({
  name: "categorySlicer",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            item = action.payload;
          }
          return item;
        });
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        return state;
      });
  },
});
const categoryReducer = categorySlice.reducer;
export default categoryReducer;
