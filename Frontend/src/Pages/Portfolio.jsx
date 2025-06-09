import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBuilding, FaHome, FaHotel, FaUtensils, FaStore, FaIndustry, FaSchool, FaCity, FaWarehouse, FaHospital, FaUniversity, FaLandmark } from 'react-icons/fa';

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const categories = [
    { id: "all", name: "All Projects", icon: FaBuilding },
    { id: "staymore", name: "Stay More", icon: FaHome },
    { id: "ojas", name: "OJAS", icon: FaIndustry },
    { id: "avani", name: "Avani", icon: FaHospital },
    { id: "yatra", name: "Yatra", icon: FaStore },
    { id: "ohoofoods", name: "Ohoo Foods", icon: FaUtensils },
    { id: "righthomes", name: "Right Homes", icon: FaHome },
    { id: "hotels", name: "Hotels (Sare)", icon: FaHotel },
    { id: "wow", name: "WOW", icon: FaStore },
    { id: "allinone", name: "All in One", icon: FaCity },
    { id: "empire", name: "The Empire", icon: FaUniversity },
    { id: "vertex", name: "ICONIC Vertex", icon: FaLandmark },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Interior Design",
      category: "staymore",
      categoryName: "Stay More",
      description:
        "Complete interior design and furnishing for a luxury villa in Hyderabad, featuring custom furniture and premium decor elements.",
      image:
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
      client: "Private Residence",
      year: "2023",
    },
    {
      id: 12,
      title: "Residential Apartment Complex",
      category: "righthomes",
      categoryName: "Right Homes",
      description:
        "Design and construction of a premium residential apartment complex with 120 units, featuring modern amenities and sustainable design.",
      image:
        "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      client: "Green Valley Developments",
      year: "2021",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    // Animation for on-scroll reveal
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [filter]);

  useEffect(() => {
    // Scroll to the current item when currentIndex changes
    if (carouselRef.current) {
      // Calculate scroll position to center the current item
      const itemWidth = carouselRef.current.children[0].clientWidth + 32; // Item width + gap
      const containerWidth = carouselRef.current.clientWidth;
      const scrollLeft = currentIndex * itemWidth - (containerWidth / 2) + (itemWidth / 2);

      carouselRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex, filteredProjects]); // Re-run effect when filteredProjects changes

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(filteredProjects.length - 1, prevIndex + 1));
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,0.9)_0%,_rgba(0,0,0,0.4)_100%)]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            Our <span className="text-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Explore our showcase of successful projects across multiple
            verticals, demonstrating our commitment to excellence.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Filter Section */}
      <section className="py-40 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="overflow-x-auto mb-16">
            <div className="flex flex-wrap items-center justify-center gap-4 min-w-max">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setFilter(category.id);
                    setCurrentIndex(0);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 ${
                    filter === category.id
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800"
                  }`}
                >
                  <category.icon className={`text-lg ${filter === category.id ? 'text-white' : 'text-blue-400'}`} />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Projects Carousel */}
          <div className="relative w-full overflow-hidden px-4" style={{ perspective: '1000px' }}>
            <div 
              ref={carouselRef}
              className="flex space-x-8 py-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${-currentIndex * (100 / 3)}%)`
              }}
            >
              {filteredProjects.map((project, index) => {
                const offset = index - currentIndex;

                let transform = "";
                let opacity = 1;
                let zIndex = 10;
                let scale = 1;
                let rotateY = 0;
                let translateX = 0;

                if (offset === 0) { // Center card
                    zIndex = 30; // Highest z-index for the center card
                    scale = 1; // Standard scale for emphasis
                    rotateY = 0;
                    translateX = 0;
                    opacity = 1;
                } else if (offset === -1) { // Left neighbor
                    translateX = -400; // Significantly increased translation for stronger perspective
                    rotateY = 70; // Significantly increased tilt
                    scale = 0.2; // Much more decreased scale
                    zIndex = 20;
                    opacity = 0.3;
                } else if (offset === 1) { // Right neighbor
                    translateX = 400; // Significantly increased translation for stronger perspective
                    rotateY = -70; // Significantly increased tilt
                    scale = 0.2; // Much more decreased scale
                    zIndex = 20;
                    opacity = 0.3;
                } else if (offset < -1) { // Far left
                  const dist = Math.abs(offset);
                  translateX = -600 - (dist - 2) * 200; // Further increased translation
                  rotateY = 90 + (dist - 2) * 30; // Further increased tilt
                  scale = Math.max(0.01, 0.1 - (dist - 2) * 0.03); // Further decreased scale
                  zIndex = 10 - dist;
                  opacity = Math.max(0.001, 0.05 - (dist - 2) * 0.01);
                } else if (offset > 1) { // Far right
                  const dist = Math.abs(offset);
                  translateX = 600 + (dist - 2) * 200; // Further increased translation
                  rotateY = -90 - (dist - 2) * 30; // Further increased tilt
                  scale = Math.max(0.01, 0.1 - (dist - 2) * 0.03); // Further decreased scale
                  zIndex = 10 - dist;
                  opacity = Math.max(0.001, 0.05 - (dist - 2) * 0.01);
                }

                transform = `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                      rotateX: 15,
                      rotateY: 15,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      transform: { duration: 0.5, ease: "easeInOut" }
                    }}
                    className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 flex-shrink-0 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
                    style={{
                      width: 'calc(100% / 3 - 21.33px)',
                      opacity: opacity,
                      transform: transform,
                      zIndex: zIndex,
                      transformOrigin: 'center center',
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-500/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm">
                          {project.categoryName}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                        Client: {project.client} | Year: {project.year}
                      </p>
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      <Link 
                        to={`/portfolio/${project.id}`}
                        className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Navigation */}
            {filteredProjects.length > 0 && (
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                <motion.button
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black/50 text-white p-3 rounded-full disabled:opacity-50 pointer-events-auto backdrop-blur-sm hover:bg-black/70 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  disabled={currentIndex === filteredProjects.length - 1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-black/50 text-white p-3 rounded-full disabled:opacity-50 pointer-events-auto backdrop-blur-sm hover:bg-black/70 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            )}
          </div>

          {/* No projects found message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">
                No projects found for this category.
              </h3>
              <p className="text-gray-400">
                Please try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-40 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-400">Featured Case Studies</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Dive deeper into some of our most impactful projects and learn how
              we've helped our clients achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Green Valley Township",
                category: "Right Homes",
                year: "2022",
                description: "A comprehensive township development featuring 500+ residential units, commercial spaces, and community amenities, all built with sustainable practices and smart city features.",
                image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                tags: ["Sustainable Design", "Smart Infrastructure", "Community Planning"],
                link: "/case-studies/green-valley"
              },
              {
                title: "NextGen Learning Campus",
                category: "The Empire",
                year: "2023",
                description: "A revolutionary educational campus featuring innovative learning spaces, cutting-edge technology integration, and specialized facilities for STEM education, arts, and sports.",
                image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                tags: ["Educational Innovation", "Technology Integration", "Modern Learning Spaces"],
                link: "/case-studies/nextgen-campus"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative h-72">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <span className="text-white/80 mb-2">{study.category} | {study.year}</span>
                    <h3 className="text-3xl font-bold text-white">{study.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {study.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={study.link}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                  >
                    Read Case Study
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
              Let's discuss how ICONIC Infinity Group can help bring your vision
              to life with our expertise across multiple verticals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-10 py-5 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/services"
                  className="inline-block border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-10 py-5 rounded-xl text-lg font-medium transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;