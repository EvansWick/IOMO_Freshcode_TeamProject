import axios from 'axios';

export const axiosInstanceServer = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 5000,
});
