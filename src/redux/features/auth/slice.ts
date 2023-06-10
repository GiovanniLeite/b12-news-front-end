/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';
import { User } from '../../models/user';

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  user?: User;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: '',
  user: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerRequest(state, action) {
      state.isLoading = true;
    },
    updateRequest(state, action) {
      state.isLoading = true;
    },
    updateSuccess(state, action) {
      state.user = action.payload;
      state.isLoading = false;
    },
    loginRequest(state, action) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    logout(state) {
      delete axios.defaults.headers.common['Authorization'];
      state.isLoggedIn = false;
      state.token = '';
      state.user = undefined;
      state.isLoading = false;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
