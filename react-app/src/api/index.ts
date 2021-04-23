import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: '/api/',
  headers: {
    accept: 'application/json',
  },
});

export default axiosAPI;