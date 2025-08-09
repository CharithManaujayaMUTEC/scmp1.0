"use client";

import { FC } from "react";
import { Leaf, Users, TrendingUp, Shield } from "lucide-react";

const AboutSection: FC = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Farm Fresh Products",
      description: "Direct from farm to your table, ensuring maximum freshness and quality."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Support Local Farmers",
      description: "Connect directly with farmers and support sustainable agriculture in Sri Lanka."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Fair Pricing",
      description: "Transparent pricing that benefits both farmers and consumers."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Quality Assurance",
      description: "All products are verified for quality and authenticity before listing."
    }
  ];

  const stats = [
    { number: "1000+", label: "Active Farmers" },
    { number: "500+", label: "Products Listed" },
    { number: "50+", label: "Districts Covered" },
    { number: "95%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-[#0097b2] mb-4">About SCMS E-Market</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The SCMS E-Market is an integral part of the Smart Crop Management System, designed to bridge the gap between farmers and consumers in Sri Lanka. Our platform enables direct trade, fair pricing, and reduced post-harvest losses.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#ff914d] mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To revolutionize Sri Lankan agriculture by creating a direct connection between farmers and consumers, 
            ensuring fair prices, reducing waste, and promoting sustainable farming practices through technology.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#ff914d] mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To become the leading agricultural marketplace in Sri Lanka, empowering farmers with technology 
            and providing consumers with access to fresh, quality produce while supporting the local economy.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-[#0097b2] mb-6 text-center">Why Choose SCMS E-Market?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-[#7ed957] to-[#0097b2] rounded-lg shadow-md p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#ff914d] mb-4">For Farmers</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Direct access to consumers without middlemen</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Better profit margins on your produce</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Real-time market demand insights</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Integration with cold storage facilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Digital payment solutions</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#ff914d] mb-4">For Buyers</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Fresh produce directly from farms</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Transparent pricing and product information</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Quality assurance and organic certification</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Support for local farmers and economy</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Convenient online ordering and delivery</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Integration with SCMS */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-[#0097b2] mb-4 text-center">Integration with Smart Crop Management System</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="font-semibold mb-2">Crop Monitoring</h4>
            <p className="text-gray-600 text-sm">
              Real-time monitoring of crop health and growth stages helps farmers optimize harvest timing for the marketplace.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">❄️</div>
            <h4 className="font-semibold mb-2">Cold Chain Management</h4>
            <p className="text-gray-600 text-sm">
              Seamless integration with cold storage facilities ensures product quality from farm to consumer.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-semibold mb-2">Data Analytics</h4>
            <p className="text-gray-600 text-sm">
              Government agencies can track market trends and agricultural performance through integrated dashboards.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl font-semibold text-[#0097b2] mb-4">Get Started Today</h3>
        <p className="text-gray-700 mb-4">
          Join thousands of farmers and consumers who are already benefiting from our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#7ed957] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Register as Seller
          </button>
          <button className="bg-[#ff914d] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;