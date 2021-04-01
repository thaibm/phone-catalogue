import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    accept: 'application/json',
  },
});

export default axiosAPI;
