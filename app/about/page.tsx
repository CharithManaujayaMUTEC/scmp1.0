"use client";

import { FC } from "react";
import { ABeeZee } from "next/font/google";
import { motion } from "framer-motion";
import Navbar from '@/app/components/Navbar';

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

const AboutPage: FC = () => {
  const deliverables = [
    {
      id: "01",
      title: "User Personas of the Application",
      description: "Key fictional characters representing real users, including Kumara (smallholder farmer), Nirmala (cold storage manager), and Mr. Perera (agriculture officer).",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "User Flow Diagram",
      description: "Logical paths users take to complete tasks, ensuring task efficiency, seamless navigation, and identifying potential bottlenecks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Wireframes of the User Interfaces",
      description: "Low-fidelity screen designs including Farmer Dashboard, Cold Center Booking Panel, Analytics Dashboard, and Crop Health Reporting.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0a2 2 0 012 2v6a2 2 0 01-2 2" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Style Guide for the Application",
      description: "Visual identity including color palette, typography, UI components, iconography, and accessibility guidelines for rural users.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4" />
        </svg>
      )
    },
    {
      id: "05",
      title: "High-Fidelity User Interfaces & Prototypes",
      description: "Detailed, fully designed UI screens with final visual elements, interaction feedback, and optimized layouts created in Figma.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: "06",
      title: "Demo Video Exploring the Design",
      description: "Visual walkthrough showcasing core use cases, animated transitions, and example scenarios like booking cold centers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Reduced Post-Harvest Losses",
      description: "Minimize crop waste through optimized cold chain logistics and real-time monitoring.",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Improved Market Coordination",
      description: "Connect farmers directly with cold centers and government agencies for better market access.",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Data-Driven Decision Making",
      description: "Leverage IoT sensors and satellite imagery for informed agricultural planning.",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Enhanced Resource Optimization",
      description: "Efficient allocation of cold storage capacity and government resources.",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <main className={`${abeezee.className} min-h-screen bg-gray-50`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7ed957] to-[#0097b2] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Smart Crop Management System
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              A government-integrated digital platform designed to modernize agriculture in Sri Lanka by connecting farmers, cold storage centers, and government agencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0097b2] mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Smart Crop Management System (SCMS) leverages real-time data from IoT sensors, satellite imagery, and user inputs to deliver actionable insights, streamline cold chain logistics, and facilitate effective policy planning.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Built with user-centered design principles, the platform ensures usability, accessibility, and scalability across diverse regions and user groups throughout Sri Lanka.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#7ed957]/10 to-[#0097b2]/10 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#0097b2] mb-4">Key Objectives</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#7ed957] mr-2">•</span>
                    Enhance crop monitoring and health tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7ed957] mr-2">•</span>
                    Reduce post-harvest losses significantly
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7ed957] mr-2">•</span>
                    Optimize resource usage and allocation
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7ed957] mr-2">•</span>
                    Improve market coordination and access
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0097b2] mb-6">Project Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl mb-4 mx-auto flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0097b2] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0097b2] mb-6">Project Deliverables</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
              Our comprehensive design and research outputs that shaped the development of the Smart Crop Management System.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={deliverable.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#7ed957]/5 to-[#0097b2]/5 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#ff914d] text-white rounded-xl flex items-center justify-center mr-4">
                      {deliverable.icon}
                    </div>
                    <div className="text-2xl font-bold text-[#0097b2]">#{deliverable.id}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0097b2] mb-3">{deliverable.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{deliverable.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#0097b2] mb-6">Technology & Innovation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0097b2] mb-3">IoT Sensors</h3>
                <p className="text-gray-600">Real-time monitoring of soil conditions, weather patterns, and crop health parameters.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0097b2] mb-3">Satellite Imagery</h3>
                <p className="text-gray-600">Advanced satellite data analysis for crop monitoring and yield prediction.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0097b2] mb-3">AI Insights</h3>
                <p className="text-gray-600">Machine learning algorithms for predictive analytics and decision support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#7ed957] to-[#0097b2] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Agriculture in Sri Lanka?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of farmers, cold center managers, and government officials already benefiting from SCMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert("Redirecting to Dashboard...")}
                className="px-8 py-4 bg-white text-[#0097b2] rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </button>
              <button
                onClick={() => alert("Redirecting to Contact...")}
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#0097b2] transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0097b2] text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg">
            © {new Date().getFullYear()} Smart Crop Management System - Sri Lanka
          </p>
          <p className="text-sm opacity-75 mt-2">
            Empowering farmers, optimizing resources, transforming agriculture.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default AboutPage;