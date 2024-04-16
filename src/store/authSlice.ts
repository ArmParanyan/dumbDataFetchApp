import { createSlice } from '@reduxjs/toolkit';

export interface User {
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  users: User[]; 
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
  users: [], 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess(state, action) {
      state.users.push(action.payload);
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    authFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { registerSuccess, loginSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
