import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEllipsisH, FaTimes, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Navconstants1, Navconstants2 } from '../constants/Navconstant';

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    onLogout();
    setShowUserMenu(false);
  };

  
  const authLinks = [
    {
      to: "/signin",
      icon: <FaSignInAlt className="text-[#D4B678] group-hover:scale-110 transition-transform duration-300" />,
      label: "Sign in"
    },
    {
      to: "/signup",
      icon: <FaUserPlus className="text-[#D4B678] group-hover:scale-110 transition-transform duration-300" />,
      label: "Sign up"
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center font-[fairplay] text-lg sm:text-2xl md:text-3xl font-bold text-white hover:text-[#D4B678] transition-colors duration-300">
            Iconic - <span className='text-[#D4B678]'>Infinity</span>
          </NavLink>

          {/* Menu Button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex flex-col items-center justify-center p-2 rounded-md text-white hover:text-[#D4B678] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4B678]"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <>
                  <FaEllipsisH className="block h-7 w-7" aria-hidden="true" />
                  <span className="text-sm mt-1">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } flex flex-col`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-[#D4B678] transition-all duration-300 hover:scale-110 text-3xl sm:text-4xl"
          aria-label="Close menu"
        >
          <FaTimes className="h-8 w-8" />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full pt-20 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-8 sm:space-y-10 w-full">
            {[...Navconstants1, ...Navconstants2].map((navItem, index) => (
              <NavLink
                key={navItem.to || index}
                to={navItem.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4B678] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl block hover:text-[#D4B678]/80 transition-all duration-300 hover:scale-105 text-center w-full"
                    : "text-white font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl block hover:text-[#D4B678] transition-all duration-300 hover:scale-105 text-center w-full"
                }
                onClick={toggleMenu}
              >
                {navItem.title}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons at Bottom */}
          {!user && (
            <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 border-t border-gray-800 pt-6 sm:pt-8 w-full max-w-xs sm:max-w-md justify-center items-center">
              {authLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#D4B678]/10 to-transparent hover:from-[#D4B678]/20 hover:to-transparent transition-all duration-300 rounded-lg border border-[#D4B678]/20 hover:border-[#D4B678]/40 hover:scale-105 w-full justify-center"
                  onClick={toggleMenu}
                >
                  {link.icon}
                  <span className="relative text-white group-hover:text-[#D4B678] transition-colors duration-300">
                    {link.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4B678]/0 to-[#D4B678]/0 group-hover:from-[#D4B678]/5 group-hover:to-transparent transition-all duration-300 rounded-lg"></div>
                </NavLink>
              ))}
            </div>
          )}

          {/* User Section */}
          {user && (
            <div className="mt-10 sm:mt-16 text-center border-t border-gray-800 pt-6 sm:pt-8 w-full max-w-xs sm:max-w-md">
              <div className="text-white mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">
                Signed in as: <span className="text-[#D4B678]">{user.name}</span>
              </div>
              {user.role === 'admin' && (
                <NavLink
                  to="/admin"
                  className="block w-full text-center text-[#D4B678] hover:text-[#D4B678]/80 transition-all duration-300 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 hover:scale-105"
                  onClick={toggleMenu}
                >
                  Admin Panel
                </NavLink>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-white hover:text-[#D4B678] transition-all duration-300 text-lg sm:text-xl md:text-2xl hover:scale-105 w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;