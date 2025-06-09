import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
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
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Let's discuss how we can help bring your vision to life. Our team is ready to assist you.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-blue-900/30"
            >
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="stay-more">Stay More</option>
                      <option value="ojas">OJAS</option>
                      <option value="iconic-tech">ICONIC Tech</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-gray-800/50 border border-blue-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-800"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-blue-900/30">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Mon-Fri 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400">Email</h3>
                      <p className="text-gray-300">info@iconicinfinity.com</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400">Location</h3>
                      <p className="text-gray-300">123 Business Avenue</p>
                      <p className="text-gray-400 text-sm">Hyderabad, Telangana 500032</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-blue-900/30">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Connect With Us</h2>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    <FaLinkedin className="text-blue-400 text-xl" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    <FaTwitter className="text-blue-400 text-xl" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    <FaFacebook className="text-blue-400 text-xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-blue-900/30"
          >
            <h2 className="text-3xl font-bold mb-8 text-blue-400">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.123456789!2d78.456789!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjQiTiA3OMKwMjcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;