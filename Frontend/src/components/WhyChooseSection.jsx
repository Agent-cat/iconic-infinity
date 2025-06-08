import React from 'react';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="2.2"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#FFD700" strokeWidth="2.2" fill="none" /><rect x="10" y="10" width="4" height="4" rx="1" fill="#FFD700" /></svg>
    ),
    title: 'Comprehensive Portfolio',
    desc: 'Access our extensive portfolio showcasing our diverse verticals, completed projects, and success stories across multiple industries.',
    link: '#',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="2.2"><path d="M12 4v16M4 12h16" stroke="#FFD700" strokeWidth="2.2" /><circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2.2" fill="none" /></svg>
    ),
    title: 'Innovative Solutions',
    desc: 'Experience our world-class innovative methodologies, technologies, and procedures that deliver exceptional customer experiences.',
    link: '#',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="2.2"><circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2.2" fill="none" /><path d="M8 12h8M8 16h8M8 8h8" stroke="#FFD700" strokeWidth="2.2" /><path d="M16 8l-2 2 2 2" stroke="#FFD700" strokeWidth="2.2" fill="none" /></svg>
    ),
    title: 'End-to-End Support',
    desc: 'Benefit from our streamlined workflow providing comprehensive support throughout your customer journey, from initial contact to post-delivery.',
    link: '#',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="2.2"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" stroke="#FFD700" strokeWidth="2.2" fill="none" /><circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2.2" fill="none" /></svg>
    ),
    title: 'Quality Assurance',
    desc: 'Experience our unwavering commitment to quality in every aspect of our business, ensuring excellence in products, services, and customer interactions.',
    link: '#',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full py-10 sm:py-20 px-2 sm:px-4 md:px-0 flex flex-col items-center bg-black relative z-10">
      <div className="max-w-5xl mx-auto text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
          Why Choose <span className="text-[#2563eb]">ICONIC</span>
        </h2>
        <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
          ICONIC Infinity Group offers a range of services designed to deliver exceptional value and experiences to our customers across all verticals.
        </p>
      </div>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-4 sm:mt-6">
        {features.map((f, i) => (
          <div key={i} className="bg-[#232b39]/80 border border-[#2c3547] rounded-xl p-5 sm:p-8 flex flex-col items-start shadow-lg transition-all duration-300 h-full w-full">
            <div className="mb-3 sm:mb-4">{f.icon}</div>
            <div className="font-extrabold text-white text-lg sm:text-xl mb-1 sm:mb-2">{f.title}</div>
            <div className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 flex-1">{f.desc}</div>
            <a href={f.link} className="mt-auto text-yellow-400 font-semibold hover:underline flex items-center gap-1 group text-sm sm:text-base">
              Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection; 