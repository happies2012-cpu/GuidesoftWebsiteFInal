import axios from 'axios';

// Use proxy in development, direct URL in production
const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? '/api' : 'http://localhost:3001/api');

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000, // 30 seconds timeout
  withCredentials: false, // Don't send cookies
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    } else if (!error.response) {
      console.error('Network error - backend may be down');
    } else if (error.response.status === 401) {
      console.error('Unauthorized - clearing auth token');
      localStorage.removeItem('authToken');
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (email: string, password: string, name: string) =>
    api.post('/auth/register', { email, password, name }),
  getCurrentUser: () => api.get('/auth/me')
};

export const pagesAPI = {
  getAll: () => api.get('/pages'),
  getBySlug: (slug: string) => api.get(`/pages/${slug}`),
  create: (data: any) => api.post('/pages', data),
  update: (id: string, data: any) => api.put(`/pages/${id}`, data),
  delete: (id: string) => api.delete(`/pages/${id}`)
};

export const aiToolsAPI = {
  getAll: (params?: any) => api.get('/ai-tools', { params }),
  getCategories: () => api.get('/ai-tools/categories'),
  create: (data: any) => api.post('/ai-tools', data),
  update: (id: string, data: any) => api.put(`/ai-tools/${id}`, data),
  delete: (id: string) => api.delete(`/ai-tools/${id}`)
};

export const navigationAPI = {
  getAll: () => api.get('/navigation'),
  create: (data: any) => api.post('/navigation', data),
  update: (id: string, data: any) => api.put(`/navigation/${id}`, data),
  delete: (id: string) => api.delete(`/navigation/${id}`)
};

export const formsAPI = {
  submit: (formType: string, data: any) =>
    api.post('/forms/submit', { formType, data }),
  getAll: (formType?: string) =>
    api.get('/forms', { params: { formType } })
};

export default api;
