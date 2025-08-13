import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Change to your backend URL
});

// Add token to every request if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses and errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized: token might be invalid or expired');
      // Optional: You can decide whether to auto-logout here or not
      // Example: logout only if token is missing or backend confirms it's expired
      // localStorage.removeItem('token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
