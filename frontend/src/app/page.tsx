'use client';

import { useEffect, useState } from 'react';
import { Business } from '@/types/business';
import { businessService } from '@/services/businessService';
import BusinessCard from '@/components/BusinessCard';
import BusinessSearch from '@/components/BusinessSearch';

export default function Home() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadBusinesses();
    }, []);

    const loadBusinesses = async () => {
        try {
            setLoading(true);
            const data = await businessService.getAllBusinesses();
            setBusinesses(data);
            setError(null);
        } catch (err) {
            setError('Failed to load businesses');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (query: string) => {
        try {
            setLoading(true);
            const data = await businessService.searchBusinesses(query);
            setBusinesses(data);
            setError(null);
        } catch (err) {
            setError('Failed to search businesses');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">
                Welcome to MyShouten
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Your gateway to local businesses in Japan
            </p>

            <BusinessSearch onSearch={handleSearch} />

            {loading ? (
                <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                </div>
            ) : error ? (
                <div className="text-center text-red-600 py-8">{error}</div>
            ) : businesses.length === 0 ? (
                <div className="text-center text-gray-600 py-8">
                    No businesses found
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {businesses.map((business) => (
                        <BusinessCard key={business.id} business={business} />
                    ))}
                </div>
            )}
        </div>
    );
}
