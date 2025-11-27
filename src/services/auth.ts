// filepath: /study-resources-portal/study-resources-portal/src/services/auth.ts

import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/auth/';

export const login = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}login`, { username, password });
    return response.data;
};

export const logout = async () => {
    await axios.post(`${API_URL}logout`);
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const clearToken = () => {
    localStorage.removeItem('token');
};