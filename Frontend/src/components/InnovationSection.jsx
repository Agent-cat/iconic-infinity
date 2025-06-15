import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2.2"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2.2" fill="#192132" /><path d="M12 7c-2.5 0-2.5 4 0 4s2.5 4 0 4" stroke="#2563eb" strokeWidth="2.2" fill="none" /><circle cx="12" cy="12" r="2.5" fill="#2563eb" /></svg>
    ),
    title: 'R&D Excellence',
    desc: 'Our dedicated Research & Development team spearheads innovation across all verticals, bringing cutting-edge technologies and methodologies to the market.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2.2"><rect x="4" y="4" width="16" height="16" rx="4" fill="#192132" stroke="#2563eb" strokeWidth="2.2" /><path d="M8 12l3 3 5-5" stroke="#2563eb" strokeWidth="2.2" fill="none" /></svg>
    ),
    title: 'Innovative Committee',
    desc: 'Our Innovation Committee consists of industry experts who consistently identify and implement cutting-edge solutions to anticipate future market trends.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2.2"><circle cx="12" cy="12" r="10" fill="#192132" stroke="#2563eb" strokeWidth="2.2" /><path d="M8 15c1.333-2 6.667-2 8 0" stroke="#2563eb" strokeWidth="2.2" /><circle cx="9" cy="10" r="1" fill="#2563eb" /><circle cx="15" cy="10" r="1" fill="#2563eb" /></svg>
    ),
    title: 'Customer-Centric Technologies',
    desc: 'We deploy state-of-the-art technologies that enhance customer experience, focusing on seamless interactions and value delivery across all touchpoints.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2.2"><circle cx="12" cy="12" r="10" fill="#192132" stroke="#2563eb" strokeWidth="2.2" /><path d="M8 12h8M8 16h8M8 8h8" stroke="#2563eb" strokeWidth="2.2" /><circle cx="8" cy="8" r="1" fill="#2563eb" /><circle cx="8" cy="12" r="1" fill="#2563eb" /><circle cx="8" cy="16" r="1" fill="#2563eb" /></svg>
    ),
    title: 'End-to-End Support',
    desc: 'Our streamlined workflow provides comprehensive support throughout the customer journey, ensuring excellence from initial contact through delivery and beyond.',
  },
];

const InnovationSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="w-full py-10 sm:py-20 px-2 sm:px-4 md:px-0 flex flex-col items-center bg-black relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
          Innovation is in Our <span className="text-[#2563eb]">DNA</span>
        </h2>
        <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
          ICONIC Infinity Group has a dedicated Innovation Committee and R&D team that brings world-class methodologies, technologies, and procedures into our organization, delivering exceptional customer experiences through our products and services.
        </p>
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-4 sm:mt-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedFeature(f)}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              opacity: { duration: 0.3 },
              y: { duration: 0.3 }
            }}
            className="bg-[#232b39]/80 border border-[#2c3547] rounded-xl p-5 sm:p-8 flex items-start gap-4 sm:gap-5 shadow-lg transition-all duration-300 w-full cursor-pointer hover:border-[#2563eb]/50 hover:shadow-[#2563eb]/10 hover:shadow-lg"
          >
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {f.icon}
            </motion.div>
            <div>
              <motion.div 
                className="font-extrabold text-white text-lg sm:text-xl mb-1 sm:mb-2"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.2 }}
              >
                {f.title}
              </motion.div>
              <div className="text-gray-300 text-sm sm:text-base">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#232b39] rounded-2xl p-6 sm:p-8 max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedFeature.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{selectedFeature.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedFeature.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InnovationSection; 