import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333' // 192.168.0.10 || 177.182.128.46
});

export default api;