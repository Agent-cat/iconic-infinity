import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHotel, FaLaptopCode, FaLeaf, FaTools, FaChartLine } from 'react-icons/fa';

const verticals = [
  {
    name: "Stay More",
    description: "Luxury hospitality and real estate development",
    icon: <FaHotel className="text-4xl" />,
    color: "from-blue-500 to-blue-700",
    delay: 0
  },
  {
    name: "OJAS",
    description: "Sustainable energy and environmental solutions",
    icon: <FaLeaf className="text-4xl" />,
    color: "from-green-500 to-green-700",
    delay: 0.2
  },
  {
    name: "ICONIC Tech",
    description: "Cutting-edge technology and digital solutions",
    icon: <FaLaptopCode className="text-4xl" />,
    color: "from-purple-500 to-purple-700",
    delay: 0.4
  },
  {
    name: "ICONIC Construction",
    description: "Innovative construction and infrastructure",
    icon: <FaTools className="text-4xl" />,
    color: "from-orange-500 to-orange-700",
    delay: 0.6
  },
  {
    name: "ICONIC Ventures",
    description: "Strategic investments and business growth",
    icon: <FaChartLine className="text-4xl" />,
    color: "from-red-500 to-red-700",
    delay: 0.8
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: (direction) => ({
    x: direction === 'left' ? -100 : 100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const VerticalsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-blue-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-400"
        >
          Our Verticals
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.name}
              custom={index % 2 === 0 ? 'left' : 'right'}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl transform transition-transform duration-500 group-hover:scale-105"></div>
              <div className="relative p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform duration-500`}>
                  {vertical.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{vertical.name}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {vertical.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalsSection; 