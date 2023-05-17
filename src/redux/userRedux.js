import { createSlice, configureStore } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null,
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Export the actions
export const { login, logout } = userSlice.actions;
