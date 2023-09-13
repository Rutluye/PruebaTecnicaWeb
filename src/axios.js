import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://10.20.12.162:30156/',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
  });

export default axiosInstance;