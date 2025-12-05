import { useAuth } from '@clerk/clerk-react';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Custom hook to get authenticated API client
export const useAPI = () => {
    const { getToken } = useAuth();

    const makeRequest = async (endpoint, options = {}) => {
        try {
            const token = await getToken();

            const headers = {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...options.headers,
            };

            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                ...options,
                headers,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'API request failed');
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    };

    return {
        // Sleep API
        sleep: {
            log: (data) => makeRequest('/sleep', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
            get: (params) => {
                const query = new URLSearchParams(params).toString();
                return makeRequest(`/sleep?${query}`);
            },
            getStats: (days = 7) => makeRequest(`/sleep/stats?days=${days}`),
        },

        // Screen Time API
        screenTime: {
            log: (data) => makeRequest('/screen-time', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
            get: (params) => {
                const query = new URLSearchParams(params).toString();
                return makeRequest(`/screen-time?${query}`);
            },
            getStats: (days = 7) => makeRequest(`/screen-time/stats?days=${days}`),
        },

        // Stress API
        stress: {
            log: (data) => makeRequest('/stress', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
            get: (params) => {
                const query = new URLSearchParams(params).toString();
                return makeRequest(`/stress?${query}`);
            },
            getStats: (days = 7) => makeRequest(`/stress/stats?days=${days}`),
        },

        // Health check
        health: () => makeRequest('/health'),
    };
};
