import { Business } from '@/types/business';
import Link from 'next/link';

interface BusinessCardProps {
    business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{business.name}</h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{business.description}</p>
            <div className="space-y-2 text-sm text-gray-500">
                <p className="flex items-center">
                    <span className="font-medium">Category:</span>
                    <span className="ml-2">{business.category}</span>
                </p>
                <p className="flex items-center">
                    <span className="font-medium">Address:</span>
                    <span className="ml-2">{business.address}</span>
                </p>
                {business.phoneNumber && (
                    <p className="flex items-center">
                        <span className="font-medium">Phone:</span>
                        <span className="ml-2">{business.phoneNumber}</span>
                    </p>
                )}
                {business.openingHours && (
                    <p className="flex items-center">
                        <span className="font-medium">Hours:</span>
                        <span className="ml-2">{business.openingHours}</span>
                    </p>
                )}
            </div>
            <div className="mt-4 flex justify-end">
                <Link
                    href={`/businesses/${business.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
} 