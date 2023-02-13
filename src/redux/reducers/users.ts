import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserLoginCredential, UserReducer } from "../../types/user";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchProducts", async () => {
  const allUsers = await axios.get("https://api.escuelajs.co/api/v1/users");
  return allUsers.data;
});

export const createNewUser = createAsyncThunk(
  "createNewUser",
  async (data: UserLoginCredential) => {
    const result = await axios.post(
      "https://api.escuelajs.co/api/v1/users/",
      data
    );
    return result.data;
  }
);

export const authenticate = createAsyncThunk(
  "authenticate",
  async (token: string) => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState: UserReducer = {
  users: [],
  currentUser: undefined,
};
const userSlicer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = undefined;
      localStorage.clear();
    },
  },

  extraReducers: (build) => {
    build
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      })
      .addCase(authenticate.fulfilled, (state, action: PayloadAction<User>) => {
        state.currentUser = action.payload;
      })
      .addCase(
        createNewUser.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          [...state.users, action.payload];
        }
      );
  },
});

const usersReducer = userSlicer.reducer;
export default usersReducer;
export const { logout } = userSlicer.actions;
