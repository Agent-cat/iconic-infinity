import React from 'react';
import teamImg from '../assets/impact.jpg'; // You can replace this with your actual image path
import { Link } from 'react-router-dom';

const features = [
  {
    color: 'bg-blue-600',
    title: 'Customer-First Approach',
    desc: "We design all our products and services with the customer's needs at the center.",
  },
  {
    color: 'bg-yellow-400',
    title: 'Quality Above All',
    desc: 'We never compromise on quality, ensuring every product and service meets the highest standards.',
  },
  {
    color: 'bg-blue-600',
    title: 'Continuous Innovation',
    desc: 'Our R&D team constantly explores new technologies to enhance customer experiences.',
  },
];

const stats = [
  { value: '12+', label: 'Business Verticals', color: 'text-yellow-300' },
  { value: '10+', label: 'Years of Excellence', color: 'text-yellow-300' },
  { value: '1000+', label: 'Satisfied Customers', color: 'text-yellow-300' },
  { value: '150+', label: 'Expert Professionals', color: 'text-yellow-300' },
];

const AboutSection = () => {
  return (
    <section className="w-full bg-black py-10 sm:py-16 px-2 sm:px-4 md:px-0 flex flex-col items-center justify-center relative z-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
        {/* Left Side */}
        <div className="flex-1 max-w-2xl w-full mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Building Customer-Friendly<br />Brands with <span className="text-[#2563eb]">Excellence</span>
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-3 sm:mb-4">
            ICONIC Infinity Group is driven by a passion for excellence, quality, and innovation. We build brands that put customers first, prioritizing quality over profits to deliver exceptional experiences across multiple verticals.
          </p>
          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
            Our dedicated Innovation Committee and R&D team consistently bring world-class methodologies and technologies into our organization, ensuring we stay at the forefront of industry advancements and deliver unmatched value to our customers.
          </p>
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">
                <span className={`mt-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${f.color} inline-block shadow-md`}></span>
                <div>
                  <div className="font-bold text-white text-base sm:text-lg">{f.title}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg shadow-lg transition-all duration-300 w-full sm:w-auto">
              <Link to="/about-us"> Learn More About Us</Link>
          </button>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center w-full">
          <div className="bg-[#181f2a]/80 rounded-2xl shadow-2xl p-0 md:p-6 w-full max-w-md relative ">
            <img src={teamImg} alt="Team" className="rounded-t-2xl w-full h-40 sm:h-56 object-cover object-center" />
            <div className="p-4 sm:p-6">
              <div className="font-extrabold text-white text-lg sm:text-2xl mb-4 sm:mb-6">Our Impact in Numbers</div>
              <div className="flex flex-wrap gap-y-3 gap-x-4 sm:gap-y-4 sm:gap-x-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
                    <span className={`font-extrabold text-xl sm:text-2xl md:text-3xl ${stat.color}`}>{stat.value}</span>
                    <span className="text-gray-200 text-xs sm:text-base text-center leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
