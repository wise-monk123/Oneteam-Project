import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const api = {
  get(apiConfig) {
    const { url } = apiConfig;

    return http.get(url);
  },

  post(apiConfig) {
    const { url, params = {} } = apiConfig;

    return http.get(url, { params });
  },
};

export default api;
