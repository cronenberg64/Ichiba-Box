import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to MyShouten
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Your gateway to local businesses in Japan
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured businesses will go here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            We're working hard to bring you the best local business experience.
          </p>
        </div>
      </div>
    </div>
  );
}
