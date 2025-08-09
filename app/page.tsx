"use client";

import { FC } from "react";
import { ABeeZee } from "next/font/google";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSearchParams } from "next/navigation";
import Navbar from '@/app/components/Navbar';

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
});

const HomePage: FC = () => {
  const role = useSearchParams().get("role");
  const stories = [
    {
      quote:
        "Since using SCMS, my crop yield has increased by 30%, and I no longer lose vegetables to spoilage.",
      author: "Kumara, Farmer from Kurunegala",
    },
    {
      quote:
        "We now manage cold storage capacity efficiently and reduce waste drastically.",
      author: "Nirmala, Cold Center Manager",
    },
    {
      quote:
        "The government dashboard helps us plan resources and respond faster to farmer needs.",
      author: "Mr. Perera, Agriculture Officer",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className={`${abeezee.className}`}>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative text-white py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606788075761-2e24d0fce2c5?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#7ed957]/80"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Smart Crop Management System
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Connecting farmers, cold centers, and government agencies to
            revolutionize agriculture in Sri Lanka.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-[#ff914d] text-white rounded-lg font-semibold hover:bg-[#ffde59] hover:text-black transition"
            onClick={() => alert("Getting Started...")}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-[#0097b2]">
            About the Project
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            The Smart Crop Management System (SCMS) is a government-integrated
            platform that links smallholder farmers, cold storage centers, crop
            collection points, and government agencies under one ecosystem. It
            uses real-time data, IoT sensors, and AI insights to reduce
            post-harvest losses, improve yields, and enable data-driven decision
            making.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#0097b2]">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <FeatureCard
                title="Real-Time Monitoring"
                description="IoT and satellite-based monitoring for crop health, weather, and soil conditions."
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureCard
                title="Cold Chain Integration"
                description="Seamless connection to cold storage facilities for preserving quality and reducing waste."
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureCard
                title="Government Insights"
                description="Data dashboards for agencies to plan, allocate resources, and track performance."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#0097b2]">
            Success Stories
          </h2>
          <Slider {...sliderSettings}>
            {stories.map((story, index) => (
              <div key={index}>
                <StoryCard quote={story.quote} author={story.author} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0097b2] text-white py-6 text-center">
        <p>
          © {new Date().getFullYear()} Smart Crop Management System - Sri Lanka
        </p>
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
}

const StoryCard: FC<StoryCardProps> = ({ quote, author }) => (
  <div className="p-6 bg-[#ffde59] rounded-lg shadow text-center max-w-lg mx-auto">
    <p className="italic text-black">"{quote}"</p>
    <p className="mt-4 font-semibold">- {author}</p>
  </div>
);

export default HomePage;
