import React from 'react';
import Image from 'next/image';

const SCMSHeader = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 text-white p-8 rounded-2xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div className="bg-white bg-opacity-20 p-3 rounded-full backdrop-blur-sm w-20 h-20 flex items-center justify-center">
          <Image
            src="/masterlogo.png"
            alt="SCMS Logo"
            width={56}
            height={56}
            className="w-14 h-14 object-contain"
            priority
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide drop-shadow-lg">Smart Crop Management System</h1>
          <h2 className="text-xl font-semibold text-green-100 mb-1">(SCMS)</h2>
          <p className="text-green-100 text-sm font-medium">🇱🇰 Integrated Agricultural Platform for Sri Lanka</p>
        </div>
      </div>
    </div>
  );
};

export default SCMSHeader;