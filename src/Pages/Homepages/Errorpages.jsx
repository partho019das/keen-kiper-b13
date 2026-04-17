import React from 'react';
import { Link } from 'react-router';

const Errorpages = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4">

            {/* Error Code */}
            <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>

            {/* Title */}
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                Oops! Page Not Found
            </h2>

            {/* Message */}
            <p className="text-[#64748B] mt-2 max-w-md">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <Link
                to="/"
                className="mt-6 bg-[#244D3F] text-white px-5 py-2 rounded-md hover:opacity-90 transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default Errorpages;