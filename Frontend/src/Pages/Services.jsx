import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import ojas from "../assets/ojas.webp";
import staymore from "../assets/staymore.png";
import one from "../assets/one.jpg";

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  const verticals = [
    {
      id: "stay-more",
      name: "Stay More",
      tagline: "Your Home Away From Home",
      description: "Stay More is our premium hospitality brand, offering luxurious accommodations and exceptional service. We focus on creating memorable experiences through personalized service and attention to detail.",
      image: staymore,
      services: [
        "Luxury Accommodations",
        "Fine Dining",
        "Spa & Wellness",
        "Event Spaces",
        "Concierge Services",
        "Business Facilities"
      ]
    },
    {
      id: "ojas",
      name: "OJAS",
      tagline: "Innovation in Every Drop",
      description: "OJAS is our cutting-edge water technology division, dedicated to providing sustainable and efficient water solutions. We combine advanced technology with environmental consciousness to deliver pure, safe water.",
      image: ojas,
      services: [
        "Water Purification",
        "Smart Filtration",
        "Industrial Solutions",
        "Residential Systems",
        "Commercial Installations",
        "Maintenance Services"
      ]
    },
    {
      id: "iconic-tech",
      name: "ICONIC Tech",
      tagline: "Technology for Tomorrow",
      description: "ICONIC Tech is our technology division, focusing on innovative solutions that drive business growth. We specialize in developing cutting-edge software and digital solutions for modern enterprises.",
      image: one,
      services: [
        "Software Development",
        "Cloud Solutions",
        "Digital Transformation",
        "IT Consulting",
        "Cybersecurity",
        "Data Analytics"
      ]
    }
  ];

  // Extract hash from URL to activate specific tab
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && verticals.some((vertical) => vertical.id === hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      setActiveTab("all");
    }
  }, [location.hash]);

  const TiltImage = ({ src, alt }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["180deg", "-180deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-180deg", "180deg"]);

    const handleMouseMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
        className="overflow-hidden rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
        />
      </motion.div>
    );
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,0.4)_100%)]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="text-blue-400">Verticals</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Explore ICONIC Infinity Group's diverse portfolio of businesses,
            each delivering excellence in their respective domains.
          </p>
        </motion.div>
      </section>

      {/* Services Tabs */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="overflow-x-auto mb-10">
              <div className="bg-gray-900/50 p-1 inline-flex min-w-max border border-blue-900/30 rounded-lg">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === "all"
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  All Verticals
                </button>
                {verticals.map((vertical) => (
                  <button
                    key={vertical.id}
                    onClick={() => setActiveTab(vertical.id)}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeTab === vertical.id
                        ? "bg-blue-500/20 text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {vertical.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-32">
              {activeTab === "all" ? (
                verticals.map((vertical, index) => (
                  <motion.div
                    key={vertical.id}
                    id={vertical.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                      index !== 0 ? "pt-32 border-t border-blue-900/30" : ""
                    }`}
                  >
                    <div className={`${index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
                      <TiltImage src={vertical.image} alt={vertical.name} />
                    </div>
                    
                    <div className={`${index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
                      <h2 className="text-4xl font-bold mb-4 text-blue-400">{vertical.name}</h2>
                      <p className="text-blue-300 font-medium italic mb-6">"{vertical.tagline}"</p>
                      <p className="text-gray-400 mb-8">
                        {vertical.description}
                      </p>
                      
                      <h3 className="text-2xl font-semibold mb-6 text-blue-400">Our Offerings</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {vertical.services.map((service, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                            <span className="text-gray-300">{service}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to={`/contact?service=${vertical.id}`}
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                verticals
                  .filter(vertical => vertical.id === activeTab)
                  .map((vertical) => (
                    <motion.div 
                      key={vertical.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                      <div>
                        <TiltImage src={vertical.image} alt={vertical.name} />
                      </div>
                      
                      <div>
                        <h2 className="text-4xl font-bold mb-4 text-blue-400">{vertical.name}</h2>
                        <p className="text-blue-300 font-medium italic mb-6">"{vertical.tagline}"</p>
                        <p className="text-gray-400 mb-8">
                          {vertical.description}
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Our Offerings</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                          {vertical.services.map((service, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                              <span className="text-gray-300">{service}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="space-x-4">
                          <Link 
                            to={`/contact?service=${vertical.id}`}
                            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                          >
                            Inquire Now
                          </Link>
                          <Link 
                            to="/portfolio"
                            className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                          >
                            View Projects
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-32 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-400">Why Choose ICONIC</h2>
            <p className="text-gray-400">
              Across all our verticals, we offer distinct advantages that set us apart
              and ensure an exceptional experience for our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Support",
                description: "We provide comprehensive support from initial consultation through project completion and beyond, ensuring a seamless experience at every step.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="m9 12 2 2 4-4"></path>
                    <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
                    <path d="M22 19H2"></path>
                  </svg>
                ),
              },
              {
                title: "Innovative Approach",
                description: "Our dedicated Innovation Committee and R&D team ensure that we stay ahead of industry trends, bringing you the latest methodologies and technologies.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                ),
              },
              {
                title: "Quality Assurance",
                description: "We prioritize quality over profits, implementing rigorous quality control measures to ensure every product and service meets the highest standards.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M6 18h8"></path>
                    <path d="M3 22h18"></path>
                    <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                    <path d="M9 14h2"></path>
                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
                  </svg>
                ),
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-500">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{advantage.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Ready to Get Started?</h2>
              <p className="text-gray-400 mb-8">
                Connect with our team to discuss your specific needs and discover how
                ICONIC Infinity Group can deliver exceptional solutions tailored to your
                requirements.
              </p>
              <Link 
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Consultation",
                  description: "Schedule a free consultation to discuss your project requirements.",
                },
                {
                  title: "Custom Solutions",
                  description: "Get tailored solutions designed specifically for your unique needs.",
                },
                {
                  title: "Support",
                  description: "Experience our industry-leading customer support and service.",
                },
                {
                  title: "Satisfaction",
                  description: "Join our growing list of satisfied customers across all verticals.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{item.title}</h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;