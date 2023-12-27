import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  api.defaults.headers.common.Authorization = '';
};
