import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Define base API configuration
const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create axios instance with base configuration
const apiClient: AxiosInstance = axios.create(baseConfig);

// Request interceptor for adding auth token, etc.
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    // If token exists, add to headers
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common responses
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle common errors (401, 403, 500, etc.)
    if (error.response) {
      const { status } = error.response;
      
      // Handle unauthorized errors
      if (status === 401) {
        // Clear local storage and redirect to login
        localStorage.removeItem('authToken');
        // You can add more logic here for redirecting to login
      }
      
      // Handle forbidden errors
      if (status === 403) {
        // Handle forbidden access
        console.error('Access forbidden');
      }
      
      // Handle server errors
      if (status >= 500) {
        console.error('Server error occurred');
      }
    }
    
    return Promise.reject(error);
  }
);

// Helper functions for common API operations
export const apiService = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.get<T>(url, config);
  },
  
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.post<T>(url, data, config);
  },
  
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.put<T>(url, data, config);
  },
  
  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.patch<T>(url, data, config);
  },
  
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return apiClient.delete<T>(url, config);
  },
};

export default apiClient;
