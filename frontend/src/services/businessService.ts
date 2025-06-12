import { Business } from '@/types/business';

const API_URL = 'http://localhost:8080/api';

export const businessService = {
    async getAllBusinesses(): Promise<Business[]> {
        const response = await fetch(`${API_URL}/businesses`);
        if (!response.ok) throw new Error('Failed to fetch businesses');
        return response.json();
    },

    async getBusinessById(id: number): Promise<Business> {
        const response = await fetch(`${API_URL}/businesses/${id}`);
        if (!response.ok) throw new Error('Failed to fetch business');
        return response.json();
    },

    async searchBusinesses(query: string): Promise<Business[]> {
        const response = await fetch(`${API_URL}/businesses/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Failed to search businesses');
        return response.json();
    },

    async getBusinessesByCategory(category: string): Promise<Business[]> {
        const response = await fetch(`${API_URL}/businesses/category/${encodeURIComponent(category)}`);
        if (!response.ok) throw new Error('Failed to fetch businesses by category');
        return response.json();
    },

    async createBusiness(business: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>): Promise<Business> {
        const response = await fetch(`${API_URL}/businesses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(business),
        });
        if (!response.ok) throw new Error('Failed to create business');
        return response.json();
    },

    async updateBusiness(id: number, business: Partial<Business>): Promise<Business> {
        const response = await fetch(`${API_URL}/businesses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(business),
        });
        if (!response.ok) throw new Error('Failed to update business');
        return response.json();
    },

    async deleteBusiness(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/businesses/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete business');
    },
}; 