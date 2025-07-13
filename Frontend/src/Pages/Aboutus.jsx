import { useEffect } from "react";

import { motion } from "framer-motion";

const Aboutus = () => {
  useEffect(() => {
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
  }, []);

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "ICONIC Infinity Group was established with a vision to create customer-friendly brands focused on quality and innovation.",
    },
    {
      year: "2012",
      title: "Expansion",
      description:
        "Launched multiple verticals, including Stay More and OJAS, to diversify our portfolio and reach more customers.",
    },
    {
      year: "2015",
      title: "Innovation Committee",
      description:
        "Established our dedicated Innovation Committee and R&D team to spearhead technological advancements.",
    },
    {
      year: "2018",
      title: "Regional Leader",
      description:
        "Became the first company in Andhra Pradesh to implement a streamlined end-to-end customer support workflow.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Integrated cutting-edge digital technologies across all verticals to enhance customer experience.",
    },
    {
      year: "2023",
      title: "Global Vision",
      description:
        "Expanded our market presence with a forward-looking strategy to become a globally recognized brand.",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from the smallest details to the grandest projects.",
      icon: "★",
    },
    {
      title: "Quality",
      description:
        "Quality is never compromised. We prioritize delivering the highest standards in all our products and services.",
      icon: "✓",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation as a core driver of our growth, constantly seeking new ways to improve our offerings.",
      icon: "💡",
    },
    {
      title: "Customer-Centric",
      description:
        "Our customers are at the heart of everything we do. Their satisfaction is our ultimate measure of success.",
      icon: "👥",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with the highest level of integrity, transparency, and ethical standards.",
      icon: "🛡️",
    },
    {
      title: "Sustainability",
      description:
        "We are committed to sustainable practices that benefit our customers, communities, and the environment.",
      icon: "🌱",
    },
  ];

  const leadership = [
    {
      name: "Aditya Rao",
      title: "CEO & Founder",
      bio: "Visionary leader with 20+ years of experience in building customer-centric organizations.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Priya Sharma",
      title: "Chief Innovation Officer",
      bio: "Innovation expert who leads our R&D team in developing cutting-edge solutions.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      name: "Raj Kumar",
      title: "Chief Operations Officer",
      bio: "Operations specialist with extensive experience in streamlining business processes.",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <main className="bg-black text-white">
     
      <section className="relative min-h-[80vh] flex items-center justify-center ">
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
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            About <span className="text-blue-400">ICONIC</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Pioneering tomorrow's solutions today, where innovation meets
            excellence, and quality transforms into lasting impact.
          </p>
        </motion.div>
      </section>

      <section className=" px-4 bg-gradient-to-b from-black to-blue-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Vision",
                description:
                  "To be the global leader in innovative solutions, setting new standards in customer experience and technological advancement.",
                color: "from-blue-500 to-blue-700",
              },
              {
                title: "Our Mission",
                description:
                  "To deliver exceptional value through customer-centric innovation, sustainable practices, and unwavering quality standards.",
                color: "from-blue-600 to-blue-800",
              },
              {
                title: "Our Promise",
                description:
                  "To exceed expectations through continuous innovation, ethical practices, and a commitment to excellence in everything we do.",
                color: "from-blue-700 to-blue-900",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-blue-900/50 hover:border-blue-500/50 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">
                  {item.title}
                </h2>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-32 bg-gradient-to-b from-blue-950 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-20 text-blue-400"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-3xl text-white transform group-hover:rotate-12 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-400">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-20 text-blue-400"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700 hidden md:block"></div>

           
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                 
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500">
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-xl font-bold text-white transform group-hover:rotate-12 transition-transform duration-500">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-400">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  
                  <div className="hidden md:flex items-center justify-center w-12 h-12 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-blue-500 ring-4 ring-blue-900/50"></div>
                  </div>

                  
                  <div className="w-full md:w-1/2 px-4 md:px-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-20 text-blue-400"
          >
            Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">
                    {leader.name}
                  </h3>
                  <p className="text-blue-300 mb-4">{leader.title}</p>
                  <p className="text-gray-400">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
