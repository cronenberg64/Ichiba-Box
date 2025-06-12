'use client';

import { useRouter } from 'next/navigation';
import { businessService } from '@/services/businessService';
import BusinessForm from '@/components/BusinessForm';

export default function NewBusiness() {
    const router = useRouter();

    const handleSubmit = async (businessData: any) => {
        try {
            await businessService.createBusiness(businessData);
            router.push('/');
        } catch (error) {
            console.error('Failed to create business:', error);
            // You might want to show an error message to the user here
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Add New Business</h1>
                <BusinessForm
                    onSubmit={handleSubmit}
                    onCancel={() => router.back()}
                />
            </div>
        </div>
    );
} 