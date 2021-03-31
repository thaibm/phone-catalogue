import axios from "axios";

const baseURL = process.env.API_URL;

const axiosAPI = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  headers: {
    accept: "application/json",
  },
});

export default axiosAPI;
