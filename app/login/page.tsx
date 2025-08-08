'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SCMSHeader from '@/components/SCMSHeader';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header at the top */}
      <SCMSHeader />
      
      {/* Main content area */}
      <div className="flex-grow flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="w-full max-w-4xl">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Welcome Section */}
            <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-3 animate-bounce">🔑</div>
                <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Welcome Back to SCMS</h2>
                <p className="text-green-100 font-medium">Sign in to continue your agricultural journey</p>
                <div className="mt-4 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-gradient-to-r from-green-500 to-emerald-600 relative">
              <button
                className={`flex-1 py-4 px-6 text-center relative overflow-hidden transition-all duration-300 ${
                  activeTab === 'signin' 
                    ? 'bg-white text-green-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                } font-semibold`}
                onClick={() => setActiveTab('signin')}
              >
                <span className="relative z-10">🔐 Sign In</span>
              </button>
              <Link 
                href="/registration"
                className={`flex-1 py-4 px-6 text-center relative overflow-hidden transition-all duration-300 ${
                  activeTab === 'register' 
                    ? 'bg-white text-green-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                } font-semibold`}
              >
                <span className="relative z-10">✨ Register</span>
              </Link>
            </div>

            {/* Login Form - Wider layout */}
            <div className="p-8">
              <div className="max-w-2xl mx-auto space-y-5">
                {/* Email/Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address or Phone Number</label>
                  <input
                    type="text"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                    placeholder="your@email.address or +94XXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <Link href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg mt-4"
                >
                  🔑 Sign In to SCMS
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-white text-sm text-gray-500">
                      or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login Buttons - Centered and wider */}
                <div className="flex justify-center gap-4">
                  <button className="flex items-center justify-center gap-2 py-2 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-48">
                    <span className="text-blue-600 font-bold">f</span>
                    <span className="text-sm">Facebook</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 px-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-48">
                    <span className="text-red-500 font-bold">G</span>
                    <span className="text-sm">Google</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-600 mt-6">
                  Don't have an account?{' '}
                  <Link href="/registration" className="text-green-600 hover:text-green-700 font-medium">
                    Register here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;