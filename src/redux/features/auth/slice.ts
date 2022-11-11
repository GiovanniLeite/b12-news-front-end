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
    loginRequest(state, action) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    loginFailure(state) {
      delete axios.defaults.headers.common['Authorization'];
      state.isLoggedIn = false;
      state.token = '';
      state.user = undefined;
      state.isLoading = false;
    },

    registerRequest(state, action) {
      state.isLoading = true;
    },
    registerCreatedSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    registerFailure(state) {
      delete axios.defaults.headers.common['Authorization'];
      state.isLoading = false;
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
