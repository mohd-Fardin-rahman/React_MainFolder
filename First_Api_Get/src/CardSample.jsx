import React from 'react';

function CardSample() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30 p-6 transition-transform transform hover:scale-105">
        <img
          className="w-full h-52 object-cover rounded-2xl"
          src="https://source.unsplash.com/400x300/?nature,water"
          alt="Random"
        />
        <div className="py-5 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">Elegant Tailwind Card</h2>
          <p className="text-white/80 text-sm mt-2">A beautifully designed React component with Tailwind CSS.</p>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-110 transition-transform">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSample;
