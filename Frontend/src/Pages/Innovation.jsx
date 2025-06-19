import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import innovation from "../assets/inovation.jpg";
import partner1 from "../assets/partner-1.jpg";

import partner2 from "../assets/partner-2.jpg";

import partner3 from "../assets/partner-3.jpg";

import partner4 from "../assets/partner-4.jpg";
const Innovation = () => {
  const [openFaq, setOpenFaq] = useState(null);

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
  }, []);

  const innovationAreas = [
    {
      title: "Customer Experience Innovation",
      description:
        "We redesign customer journeys to create seamless, enjoyable experiences across all touchpoints, leveraging digital tools and personalization strategies to exceed expectations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Technology Integration",
      description:
        "We incorporate cutting-edge technologies like IoT, AI, and smart automation across our verticals to enhance functionality, efficiency, and user experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Sustainable Practices",
      description:
        "We pioneer eco-friendly methodologies and materials across our operations, reducing environmental impact while maintaining the highest quality standards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <path d="M2 22a8 8 0 0 1 11.33-7.27"></path>
          <path d="M9 10a7.66 7.66 0 0 0-2.51-5.27C4.13 2.4 2 3.25 2 5.5a7.49 7.49 0 0 0 10 7.13"></path>
          <path d="M22 22a8 8 0 0 0-11.33-7.27"></path>
          <path d="M15 10a7.66 7.66 0 0 1 2.51-5.27C19.87 2.4 22 3.25 22 5.5a7.49 7.49 0 0 1-10 7.13"></path>
        </svg>
      ),
    },
    {
      title: "Process Optimization",
      description:
        "We continuously refine our workflows and operational processes using Lean Six Sigma principles to maximize efficiency, reduce waste, and deliver consistent quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "How does ICONIC's Innovation Committee work?",
      answer:
        "Our Innovation Committee consists of experts from various fields who meet regularly to identify emerging trends, technologies, and methodologies. They evaluate potential innovations, develop implementation strategies, and oversee pilot projects before full-scale adoption across relevant verticals.",
    },
    {
      question: "How do you measure innovation success?",
      answer:
        "We measure innovation success through multiple metrics including customer satisfaction improvements, operational efficiency gains, resource utilization improvements, and market differentiation. Each innovation initiative has specific KPIs that align with our overall business objectives and customer-centric values.",
    },
    {
      question: "Can clients participate in your innovation process?",
      answer:
        "Absolutely! We believe in collaborative innovation and regularly involve clients in our innovation workshops, feedback sessions, and pilot projects. Client insights are invaluable in ensuring our innovations truly address market needs and deliver meaningful improvements to the customer experience.",
    },
    {
      question: "How do you ensure innovations are practical and implementable?",
      answer:
        "All innovation initiatives go through a rigorous evaluation process that includes feasibility studies, cost-benefit analyses, and small-scale pilot implementations. This approach allows us to test concepts in real-world conditions, gather data on performance, and refine solutions before full deployment.",
    },
    {
      question: "How do you stay ahead of industry trends?",
      answer:
        "Our R&D team continuously monitors global trends, participates in industry conferences, collaborates with research institutions, and maintains partnerships with technology providers. This multi-faceted approach ensures we're not just keeping pace with trends but anticipating future developments in our industries.",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center ">
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
            Innovation at <span className="text-blue-400">ICONIC</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Discover how our Innovation Committee and R&D team bring
            world-class methodologies and technologies to all our verticals.
          </p>
        </motion.div>
      </section>

      {/* Innovation Approach Section */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Approach to Innovation</h2>
              <p className="text-gray-300 mb-4">
                Innovation at ICONIC Infinity Group is not just a department but a
                mindset that permeates our entire organization. Our dedicated
                Innovation Committee and R&D team work collaboratively to identify,
                develop, and implement cutting-edge solutions across all our
                verticals.
              </p>
              <p className="text-gray-300 mb-6">
                We follow a systematic approach to innovation, starting with
                identifying customer pain points and market opportunities, then
                exploring creative solutions through design thinking and rapid
                prototyping, and finally implementing and scaling successful
                innovations across relevant business units.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Customer-Centric",
                    description: "All innovations focus on enhancing customer experience and value."
                  },
                  {
                    title: "Data-Driven",
                    description: "We use analytics and market insights to guide innovation decisions."
                  },
                  {
                    title: "Collaborative",
                    description: "Cross-functional teams work together to develop holistic solutions."
                  },
                  {
                    title: "Agile",
                    description: "Rapid prototyping and iteration allows for quick refinement."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
                  >
                    <h3 className="font-semibold mb-2 text-blue-400">{item.title}</h3>
                    <p className="text-sm text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500/10 rounded-full"></div>
              <div className="relative z-10 rounded-lg border border-blue-900/30">
                <img
                  src={innovation}
                  alt="Innovation Team Meeting"
                  className="w-full"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-blue-900/30">
                <div className="flex items-center justify-between gap-6">
                  <div className="text-center">
                    <div className="text-blue-400 text-2xl font-bold">25+</div>
                    <div className="text-sm text-gray-300">
                      Innovation Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-300">
                      Patents Filed
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Areas Section */}
      <section className="py-32 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Key Innovation Areas</h2>
            <p className="text-gray-300">
              Our innovation initiatives focus on several strategic areas that
              drive value across all our verticals and enhance customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{area.icon}</div>
                  <h3 className="text-xl font-bold text-blue-400">{area.title}</h3>
                </div>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process Section */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Innovation Process</h2>
            <p className="text-gray-300">
              A systematic approach to turning ideas into impactful solutions
              across our business verticals.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500/20 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: 1,
                  title: "Discovery & Research",
                  description: "We identify opportunities through market research, customer feedback, and trend analysis, establishing a solid foundation for innovation grounded in real needs and opportunities."
                },
                {
                  step: 2,
                  title: "Ideation & Concept Development",
                  description: "Our multidisciplinary teams collaborate in design thinking workshops to generate and refine innovative concepts, evaluating their potential impact and feasibility."
                },
                {
                  step: 3,
                  title: "Prototyping & Testing",
                  description: "Selected concepts are rapidly prototyped and tested with real users to validate assumptions, gather feedback, and refine the solution before larger investments."
                },
                {
                  step: 4,
                  title: "Implementation & Scaling",
                  description: "Successful innovations are implemented across relevant business units with comprehensive training, documentation, and support to ensure successful adoption and scaling."
                },
                {
                  step: 5,
                  title: "Measurement & Iteration",
                  description: "We continuously monitor the performance of implemented innovations, gathering data and insights to guide ongoing refinements and identify new opportunities."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="inline-block mb-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                      Step {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">{step.title}</h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                  
                  <div className="absolute left-1/2 top-8 w-8 h-8 bg-blue-500 rounded-full transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-blue-400">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Partners Section */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Innovation Partners</h2>
            <p className="text-gray-300">
              We collaborate with leading organizations, research institutions, and
              technology providers to accelerate our innovation initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[
  partner1,
  partner2,
  partner3,
  partner4
].map((imageSrc, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-full h-64 rounded-lg flex items-center justify-center  border border-blue-900/30 hover:border-blue-500/50 transition-all duration-500"
  >
    <img
      src={imageSrc}
      alt={`Partner ${index + 1}`}
      className="max-h-full max-w-full object-contain"
    />
  </motion.div>
))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  );
};

export default Innovation;
