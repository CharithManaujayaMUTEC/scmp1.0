'use client'
import { useState, ChangeEvent, MouseEvent, JSX } from 'react'

interface FormData {
  email: string
  password: string
}

type TabType = 'signin' | 'register'

export default function SCMSLogin(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('signin')
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  const handleSocialLogin = (provider: string): void => {
    console.log(`${provider} login clicked`)
  }

  const handleForgotPassword = (): void => {
    console.log('Forgot password clicked')
  }

  const handleContactSupport = (): void => {
    console.log('Contact support clicked')
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        background: 'linear-gradient(135deg, #7ed957 0%, #0097b2 100%)'
      }}
    >
      {/* Full Header spanning across */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-600 via-green-500 to-green-600 p-6 text-center text-white shadow-lg">
        <div className="flex items-center justify-center mb-2">
          <span className="text-3xl mr-3">🌾</span>
          <h1 className="text-2xl font-bold">Smart Crop Management System (SCMS)</h1>
        </div>
        <p className="text-green-100 text-base">Integrated Agricultural Platform for Sri Lanka</p>
      </div>

      {/* Shadow Box Container */}
      <div className="w-full max-w-md mt-32 mb-8">
        <div 
          className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
          style={{ 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
          }}
        >
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#0097b2' }}>
              <span className="mr-2">🌾</span>
              Welcome to SCMS
            </h2>
            <p className="text-gray-600 text-lg">Join Sri Lanka's agricultural revolution</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
            <button
              onClick={() => setActiveTab('signin')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'signin'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                background: activeTab === 'signin' ? '#7ed957' : 'transparent'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'register'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                background: activeTab === 'register' ? '#7ed957' : 'transparent'
              }}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address or Phone Number
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email or Phone"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                style={{ 
                  focusBorderColor: '#0097b2',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0097b2'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-opacity-100 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0097b2'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full text-white font-semibold py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg transform hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #7ed957 0%, #0097b2 100%)'
              }}
            >
              <span className="mr-2">🔐</span>
              Sign In to SCMS
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 text-center">
            <span className="text-gray-500 text-sm bg-white px-4">or continue with</span>
            <div className="border-t border-gray-200 -mt-3 -z-10"></div>
          </div>

          {/* Social Login Options */}
          <div className="space-y-4">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
            >
              <span className="mr-2">🔗</span>
              Continue with Google
            </button>

            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
            
            >
              <span className="mr-2">📘</span>
              Continue with Facebook
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center space-y-3">
            <button
              onClick={handleForgotPassword}
              className="block w-full text-sm font-medium transition-colors duration-300 hover:underline"
              style={{ color: '#0097b2' }}
            >
              Forgot Your Password?
            </button>
            <button
              onClick={handleContactSupport}
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-300"
            >
              Need help? <span className="underline font-medium" style={{ color: '#0097b2' }}>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}