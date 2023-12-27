import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearAuthToken, setAuthToken } from 'configAxios/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/login', credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('/users/logout');
      clearAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      setAuthToken(token);
      const res = await api.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
