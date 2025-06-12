'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Business } from '@/types/business';
import { businessService } from '@/services/businessService';
import Link from 'next/link';

export default function BusinessDetail() {
    const params = useParams();
    const [business, setBusiness] = useState<Business | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBusiness = async () => {
            try {
                setLoading(true);
                const data = await businessService.getBusinessById(Number(params.id));
                setBusiness(data);
                setError(null);
            } catch (err) {
                setError('Failed to load business details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadBusiness();
    }, [params.id]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                </div>
            </div>
        );
    }

    if (error || !business) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center text-red-600 py-8">
                    {error || 'Business not found'}
                </div>
                <div className="text-center">
                    <Link href="/" className="text-blue-600 hover:text-blue-800">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
                    ← Back to Home
                </Link>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
                    <p className="text-gray-600 mb-6">{business.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Category</h2>
                                <p className="text-gray-600">{business.category}</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Address</h2>
                                <p className="text-gray-600">{business.address}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {business.phoneNumber && (
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">Phone</h2>
                                    <p className="text-gray-600">{business.phoneNumber}</p>
                                </div>
                            )}
                            {business.openingHours && (
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">Opening Hours</h2>
                                    <p className="text-gray-600">{business.openingHours}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 