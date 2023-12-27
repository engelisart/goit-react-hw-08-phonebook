// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

// axios.defaults.baseURL = `https://658417c04d1ee97c6bcef5f8.mockapi.io`;

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.get('/contacts');
      console.log(data);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, ThunkAPI) => {
    try {
      const { data } = await api.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, ThunkAPI) => {
    try {
      const { data } = await api.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
