import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: {
      isAuthenticated: false,
      user: null,
      error: null,
      users: [],
    },
  },
});

export default store;
