'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SCMSHeader from '@/app/components/SCMSHeader';

const RegistrationPage = () => {
  const [userType, setUserType] = useState('farmer');
  const [activeTab, setActiveTab] = useState('register');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    district: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    receiveUpdates: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    // Handle registration logic here
    console.log('Registration data:', { userType, ...formData });
  };

  const userTypes = [
    { id: 'farmer', label: 'Farmer', icon: '👨‍🌾', subtitle: 'Grow & sell crops' },
    { id: 'vendor', label: 'Vendor', icon: '🏪', subtitle: 'Buy & distribute' },
    { id: 'storage', label: 'Storage Center', icon: '🏢', subtitle: 'Manage facilities' }
  ];

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
                <div className="text-4xl mb-3 animate-bounce">🌱</div>
                <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Welcome to SCMS</h2>
                <p className="text-green-100 font-medium">Join Sri Lanka's agricultural revolution</p>
                <div className="mt-4 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-gradient-to-r from-green-500 to-emerald-600 relative">
              <Link 
                href="/login"
                className={`flex-1 py-4 px-6 text-center relative overflow-hidden transition-all duration-300 ${
                  activeTab === 'signin' 
                    ? 'bg-white text-green-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                } font-semibold`}
              >
                <span className="relative z-10">🔐 Sign In</span>
              </Link>
              <button
                className={`flex-1 py-4 px-6 text-center relative overflow-hidden transition-all duration-300 ${
                  activeTab === 'register' 
                    ? 'bg-white text-green-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                } font-semibold`}
                onClick={() => setActiveTab('register')}
              >
                <span className="relative z-10">✨ Register</span>
              </button>
            </div>

            {/* Registration Form */}
            <div className="p-8">
              {/* User Type Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">I am registering as a:</p>
                <div className="grid grid-cols-3 gap-4">
                  {userTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setUserType(type.id)}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        userType === type.id
                          ? 'border-green-500 bg-green-100'
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className="text-sm font-medium text-gray-900">{type.label}</div>
                      <div className="text-xs text-gray-500">{type.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="your@email.address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Phone and District */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="colombo">Colombo</option>
                      <option value="gampaha">Gampaha</option>
                      <option value="kalutara">Kalutara</option>
                      <option value="kandy">Kandy</option>
                      <option value="matale">Matale</option>
                      <option value="nuwara-eliya">Nuwara Eliya</option>
                      <option value="galle">Galle</option>
                      <option value="matara">Matara</option>
                      <option value="hambantota">Hambantota</option>
                    </select>
                  </div>
                </div>

                {/* Password Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create Strong Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Your Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1.5 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label className="text-sm text-gray-700">
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleInputChange}
                      className="mt-1.5 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label className="text-sm text-gray-700">
                      I want to receive updates about SCMS features and agricultural insights
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg mt-6"
                >
                  ✨ Create SCMS Account
                </button>
              </div>

              {/* Footer Links */}
              <div className="mt-8 text-center space-y-3">
                <div className="text-sm text-gray-600">
                  Already have an account? <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">Sign in here</Link>
                </div>
                <div className="text-sm text-gray-600">
                  Need help? <a href="#" className="text-green-600 hover:text-green-700 font-medium">Contact Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;