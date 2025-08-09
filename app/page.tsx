"use client";

import { FC, useState, useEffect } from "react";
import { ABeeZee } from "next/font/google";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSearchParams } from "next/navigation";
import Navbar from '@/app/components/Navbar';
export const dynamic = 'force-dynamic'

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

const HomePage: FC = () => {
  const role = useSearchParams().get("role");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const [isClient, setIsClient] = useState(false);

  // Handle window size safely
  useEffect(() => {
    setIsClient(true);
    
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const stories = [
    {
      quote: "Since using SCMS, my crop yield has increased by 30%, and I no longer lose vegetables to spoilage.",
      author: "Kumara, Farmer from Kurunegala",
      rating: 5,
      image: "🌾"
    },
    {
      quote: "We now manage cold storage capacity efficiently and reduce waste drastically.",
      author: "Nirmala, Cold Center Manager",
      rating: 5,
      image: "❄️"
    },
    {
      quote: "The government dashboard helps us plan resources and respond faster to farmer needs.",
      author: "Mr. Perera, Agriculture Officer",
      rating: 5,
      image: "📊"
    },
  ];

  const features = [
    {
      title: "Real-Time Monitoring",
      description: "IoT and satellite-based monitoring for crop health, weather, and soil conditions with instant alerts.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-600",
      delay: 0
    },
    {
      title: "Cold Chain Integration",
      description: "Seamless connection to cold storage facilities for preserving quality and reducing waste by up to 40%.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      gradient: "from-blue-400 to-cyan-600",
      delay: 0.2
    },
    {
      title: "Government Insights",
      description: "AI-powered data dashboards for agencies to plan, allocate resources, and track agricultural performance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-purple-400 to-violet-600",
      delay: 0.4
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Farmers", icon: "👨‍🌾" },
    { number: "150+", label: "Cold Centers", icon: "🏢" },
    { number: "40%", label: "Waste Reduction", icon: "📉" },
    { number: "24/7", label: "Support Available", icon: "🕐" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
        i === currentSlide ? 'bg-[#ff914d]' : 'bg-white/50'
      }`} />
    )
  };

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${abeezee.className} overflow-x-hidden`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{
              backgroundImage: "url('/masterlogo.png')",
              filter: 'blur(8px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7ed957]/90 via-[#0097b2]/85 to-[#ff914d]/75" />
          
          {/* Floating Elements - Only render on client */}
          {isClient && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  initial={{ 
                    x: Math.random() * windowSize.width, 
                    y: Math.random() * windowSize.height 
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Smart Crop
              <br />
              <span className="bg-gradient-to-r from-[#ffde59] to-[#ff914d] bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <motion.p 
              className="mt-6 text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Connecting farmers, cold centers, and government agencies to
              <span className="font-semibold text-[#ffde59]"> revolutionize agriculture</span> in Sri Lanka.
            </motion.p>
            
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button
                className="px-8 py-4 bg-gradient-to-r from-[#ff914d] to-[#ffde59] text-black rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
                onClick={() => alert("Getting Started...")}
              >
                🚀 Get Started Today
              </button>
              <button
                className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 transform"
                onClick={() => alert("Watch Demo...")}
              >
                📹 Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/70 text-center"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mb-2 flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/50 rounded-full mt-2"
                />
              </div>
              <p className="text-sm">Scroll to explore</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0097b2] to-[#7ed957] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          {/* Geometric shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-lg transform rotate-45" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Impact by Numbers</h2>
            <p className="text-xl opacity-90">Real results from our Smart Crop Management System</p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#7ed957]/5 rounded-full transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0097b2]/5 rounded-full transform -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0097b2]">
              Transforming Agriculture Through Technology
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                The Smart Crop Management System (SCMS) is a government-integrated platform that links smallholder farmers, cold storage centers, crop collection points, and government agencies under one unified ecosystem.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: "🌱", title: "IoT Sensors", desc: "Real-time monitoring" },
                  { icon: "🛰️", title: "Satellite Data", desc: "Crop analysis" },
                  { icon: "🤖", title: "AI Insights", desc: "Predictive analytics" },
                  { icon: "📱", title: "Mobile First", desc: "Accessible anywhere" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-[#0097b2] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0097b2]">
              Powerful Features for Every User
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive suite of tools empowers farmers, cold center managers, and government officials.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0097b2]">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Hover effect arrow */}
                  <div className="mt-6 flex items-center text-[#ff914d] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="mr-2">Learn more</span>
                    <motion.svg 
                      className="w-4 h-4"
                      whileHover={{ x: 5 }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Enhanced */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#ffde59]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff914d]/10 rounded-full transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0097b2]">
              Real Stories, Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the farmers, managers, and officials who are already transforming their work with SCMS.
            </p>
          </motion.div>
          
          <div className="testimonial-slider">
            <Slider {...sliderSettings}>
              {stories.map((story, index) => (
                <div key={index} className="px-4">
                  <StoryCard 
                    quote={story.quote} 
                    author={story.author} 
                    rating={story.rating}
                    image={story.image}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7ed957] via-[#0097b2] to-[#ff914d] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
          {/* Animated shapes */}
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Agriculture?
            </h2>
            <p className="text-xl sm:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join thousands of farmers, cold center managers, and government officials already benefiting from SCMS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Redirecting to Dashboard...")}
                className="px-10 py-5 bg-white text-[#0097b2] rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform"
              >
                🎯 Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Redirecting to Contact...")}
                className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-[#0097b2] transition-all duration-300 transform"
              >
                💬 Contact Our Team
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: "⚡", text: "Quick Setup" },
                { icon: "🛡️", text: "Secure & Reliable" },
                { icon: "🌍", text: "Island-wide Coverage" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-[#0097b2] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0097b2] to-[#007a92]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SCMS Platform</h3>
              <p className="text-white/80 leading-relaxed">
                Empowering Sri Lankan agriculture through smart technology and government integration.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2 text-white/80">
                <p>• Dashboard</p>
                <p>• E-Market</p>
                <p>• Support Center</p>
                <p>• Documentation</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p>📞 Hotline: 1920</p>
                <p>📧 info@scms.gov.lk</p>
                <p>🏢 Department of Agriculture</p>
                <p>📍 Peradeniya, Kandy</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-lg mb-2">
              © {new Date().getFullYear()} Smart Crop Management System - Sri Lanka
            </p>
            <p className="text-sm text-white/60">
              Building the future of agriculture, one farm at a time.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2 text-[#ff914d]">{title}</h3>
    <p className="text-black">{description}</p>
  </div>
);

interface StoryCardProps {
  quote: string;
  author: string;
  rating?: number;
  image?: string;
}

const StoryCard: FC<StoryCardProps> = ({ quote, author, rating = 5, image }) => (
  <motion.div 
    className="bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-2xl mx-auto"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-center mb-6">
      <div className="text-6xl mb-4">{image}</div>
      <div className="flex justify-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-yellow-400 text-xl"
          >
            ⭐
          </motion.span>
        ))}
      </div>
    </div>
    
    <blockquote className="text-lg sm:text-xl italic text-gray-800 mb-6 leading-relaxed">
      &quot;{quote}&quot;
    </blockquote>
    
    <div className="text-center">
      <p className="font-bold text-[#0097b2] text-lg">— {author}</p>
    </div>
  </motion.div>
);

export default HomePage;