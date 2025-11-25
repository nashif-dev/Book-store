import React from "react";
import { Link } from "react-router-dom";

export default function Pnf() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <style>{`
        /* Floating animation */
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="text-center">
        <h1 className="text-7xl md:text-[120px] font-bold text-gray-800 float">404</h1>

        <p className="text-gray-600 mt-4 text-lg md:text-xl">Page Not Found</p>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          The page you're looking for doesn't exist or was moved.
        </p>

        <Link to="/" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm md:text-base transition-all duration-300">Go Back Home</Link>
      
          
      </div>
    </div>
  );
}
