import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  registerThunk,
  refreshUserThunk,
} from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: null,
  },
  extraReducers: builder =>
    builder
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(registerThunk.fulfilled, state => {
        state.isRefreshing = false;
      })
      .addCase(registerThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(registerThunk.rejected, state => {
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(registerThunk.fulfilled, logInThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(logInThunk.pending, registerThunk.pending, logOutThunk.pending),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logInThunk.rejected,
          refreshUserThunk.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoggedIn = false;
          state.isError = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
