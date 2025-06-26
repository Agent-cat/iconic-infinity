import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GetStarted = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const officeLocations = [
    {
      name: "Headquarters",
      address: "ICONIC Tower, Tech Park, Amaravati, Andhra Pradesh, India",
      phone: "+91 98765 43210",
      email: "info@iconicinfinity.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
    {
      name: "Regional Office",
      address: "42 Innovation Avenue, Hyderabad, Telangana, India",
      phone: "+91 87654 32109",
      email: "hyderabad@iconicinfinity.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
    {
      name: "International Office",
      address: "One World Trade Center, New York, NY, USA",
      phone: "+1 (212) 555-1234",
      email: "global@iconicinfinity.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM EST",
    },
  ];

  return (
    <>
   
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#0047AB]/10 to-white dark:from-[#0047AB]/20 dark:to-[#0F172A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="text-[#0047AB]">Touch</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                We'd love to hear from you. Reach out to discuss how ICONIC
                Infinity Group can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white dark:bg-[#0F172A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Fill out the form below and our team will get back to you
                  promptly. We're here to answer any questions you have about our
                  services and how we can help you.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-[#1E293B] rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent bg-white dark:bg-[#1E293B]/50 text-gray-900 dark:text-white transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-[#1E293B] rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent bg-white dark:bg-[#1E293B]/50 text-gray-900 dark:text-white transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-[#1E293B] rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent bg-white dark:bg-[#1E293B]/50 text-gray-900 dark:text-white transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-[#1E293B] rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent bg-white dark:bg-[#1E293B]/50 text-gray-900 dark:text-white transition-colors"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-[#1E293B] rounded-lg focus:ring-2 focus:ring-[#0047AB] focus:border-transparent bg-white dark:bg-[#1E293B]/50 text-gray-900 dark:text-white transition-colors resize-vertical"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-800 dark:text-red-200">
                        Sorry, there was an error sending your message. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0047AB] to-[#0047AB]/80 hover:from-[#0047AB]/90 hover:to-[#0047AB] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-8">
                  {officeLocations.map((office, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 dark:bg-[#1E293B]/50 p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-bold text-[#0047AB] mb-3">{office.name}</h3>
                      <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#0047AB] mr-3 flex-shrink-0"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{office.address}</span>
                        </div>
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#0047AB] mr-3 flex-shrink-0"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#0047AB] mr-3 flex-shrink-0"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <span>{office.email}</span>
                        </div>
                        <div className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#0047AB] mr-3 flex-shrink-0"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#0047AB]/10 flex items-center justify-center text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50 dark:bg-[#1E293B]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Visit our headquarters or one of our regional offices.
              </p>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-md animate-on-scroll">
              {/* Map placeholder - would integrate with Google Maps or similar */}
              <div className="w-full h-full bg-gray-200 dark:bg-[#1E293B] flex items-center justify-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-gray-400 dark:text-gray-600 mb-4"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">
                    Interactive map would load here in production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-[#0F172A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Find quick answers to frequently asked questions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-on-scroll">
              <div className="bg-gray-50 dark:bg-[#1E293B]/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-[#0047AB]">
                  What information should I include in my inquiry?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To help us respond most effectively, please include details about your
                  project or requirements, timeline considerations, and your preferred
                  method of contact.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#1E293B]/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-[#0047AB]">
                  How quickly will I receive a response?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We strive to respond to all inquiries within 24 business hours.
                  Complex inquiries may take slightly longer as we gather the
                  necessary information to assist you properly.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#1E293B]/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-[#0047AB]">
                  Can I schedule a video consultation?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, we offer video consultations for clients who prefer virtual
                  meetings. Simply mention your preference in your inquiry, and we'll
                  arrange a convenient time.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#1E293B]/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-[#0047AB]">
                  Do you provide services internationally?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, ICONIC Infinity Group serves clients globally through our
                  international offices and remote collaboration capabilities. We have
                  experience working with clients across multiple countries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
   
    </>
  );
};

export default GetStarted;
