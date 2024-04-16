// authenticationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
}

interface AuthenticationState {
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
