// filepath: /study-resources-portal/study-resources-portal/src/services/api.ts

import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchResources = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources`);
        return response.data;
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
};

export const fetchModules = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/modules`);
        return response.data;
    } catch (error) {
        console.error('Error fetching modules:', error);
        throw error;
    }
};

export const fetchResourceById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/resources/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching resource with id ${id}:`, error);
        throw error;
    }
};