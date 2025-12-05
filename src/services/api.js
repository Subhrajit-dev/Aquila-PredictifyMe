import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth API
export const authAPI = {
    // Register new user
    register: async (userData) => {
        const response = await api.post('/auth/register', userData);
        if (response.data.success) {
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data.user));
        }
        return response.data;
    },

    // Login user
    login: async (credentials) => {
        const response = await api.post('/auth/login', credentials);
        if (response.data.success) {
            localStorage.setItem('token', response.data.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data.user));

            // Check subscription status
            const hasSubscription = response.data.data.user.subscription.status === 'active';
            localStorage.setItem(`subscription_${credentials.email}`, hasSubscription ? 'true' : '');
        }
        return response.data;
    },

    // Get current user
    getMe: async () => {
        const response = await api.get('/auth/me');
        return response.data;
    },

    // Logout
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },
};

// Subscription API
export const subscriptionAPI = {
    // Create subscription
    create: async (subscriptionData) => {
        const response = await api.post('/subscriptions/create', subscriptionData);
        if (response.data.success) {
            // Update localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                localStorage.setItem(`subscription_${user.email}`, 'true');
            }
        }
        return response.data;
    },

    // Get subscription
    get: async (userId) => {
        const response = await api.get(`/subscriptions/${userId}`);
        return response.data;
    },

    // Cancel subscription
    cancel: async (userId) => {
        const response = await api.delete(`/subscriptions/${userId}`);
        return response.data;
    },
};

// User API
export const userAPI = {
    // Get user by ID
    getById: async (userId) => {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    },

    // Update user profile
    update: async (userId, userData) => {
        const response = await api.put(`/users/${userId}`, userData);
        return response.data;
    },
};

export default api;
