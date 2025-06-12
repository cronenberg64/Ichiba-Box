import { useState, useEffect } from 'react';
import { Business } from '@/types/business';

interface BusinessFormProps {
    business?: Business;
    onSubmit: (business: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
    onCancel: () => void;
}

export default function BusinessForm({ business, onSubmit, onCancel }: BusinessFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        address: '',
        phoneNumber: '',
        category: '',
        openingHours: '',
    });

    useEffect(() => {
        if (business) {
            setFormData({
                name: business.name,
                description: business.description,
                address: business.address,
                phoneNumber: business.phoneNumber || '',
                category: business.category,
                openingHours: business.openingHours || '',
            });
        }
    }, [business]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Business Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description *
                </label>
                <textarea
                    id="description"
                    name="description"
                    required
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address *
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category *
                </label>
                <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Select a category</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Cafe</option>
                    <option value="retail">Retail</option>
                    <option value="service">Service</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700">
                    Opening Hours
                </label>
                <input
                    type="text"
                    id="openingHours"
                    name="openingHours"
                    value={formData.openingHours}
                    onChange={handleChange}
                    placeholder="e.g., Mon-Fri: 9:00-18:00"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    {business ? 'Update' : 'Create'} Business
                </button>
            </div>
        </form>
    );
} 