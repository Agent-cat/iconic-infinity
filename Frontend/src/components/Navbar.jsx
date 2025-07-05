import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import iconic from "../assets/iconic1.png"
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

  // Ensure body scroll is locked/unlocked based on isOpen, and always cleaned up on unmount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={iconic}
              alt="Iconic Infinity Logo"
              className="h-28 w-auto sm:h-28 md:h-32 object-contain"
            />
          </NavLink>

          <div className="flex items-center ml-auto">
            
            {!user && (
              <div className="hidden lg:flex items-center gap-4">
                <NavLink
                  to="/signin"
                  className="group relative inline-flex items-center gap-2 px-5 py-2 text-base bg-gradient-to-r from-[#D4B678]/10 to-transparent hover:from-[#D4B678]/20 hover:to-transparent transition-all duration-300 rounded-lg border border-[#D4B678]/20 hover:border-[#D4B678]/40 hover:scale-105 text-white"
                >
                  <FaSignInAlt className="text-[#D4B678] group-hover:scale-110 transition-transform duration-300" />
                  Sign in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="group relative inline-flex items-center gap-2 px-5 py-2 text-base bg-gradient-to-r from-[#D4B678]/10 to-transparent hover:from-[#D4B678]/20 hover:to-transparent transition-all duration-300 rounded-lg border border-[#D4B678]/20 hover:border-[#D4B678]/40 hover:scale-105 text-white"
                >
                  <FaUserPlus className="text-[#D4B678] group-hover:scale-110 transition-transform duration-300" />
                  Sign up
                </NavLink>
              </div>
            )}
            {/* Desktop User Profile Dropdown */}
            {user && (
              <div className="hidden lg:flex items-center gap-2 relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4B678]/10 to-transparent border border-[#D4B678]/30 hover:border-[#D4B678]/60 text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#D4B678] transition-all duration-200"
                >
                  <FaUser className="text-[#D4B678] text-lg" />
                  <span className="font-semibold text-base max-w-[100px] truncate">{user.name}</span>
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-black/95 border border-[#D4B678]/30 rounded-xl shadow-lg py-3 z-50 animate-fade-in">
                    <div className="px-5 py-2 border-b border-[#D4B678]/10 text-white text-sm">
                      <div className="font-semibold">{user.name}</div>
                      {/* Optionally show email: <div className=\"text-xs text-gray-400\">{user.email}</div> */}
                    </div>
                    {user.role === 'admin' && (
                      <NavLink
                        to="/admin"
                        className="block px-5 py-2 text-[#D4B678] hover:text-blue-400 transition-colors duration-200 text-sm"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Admin Panel
                      </NavLink>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-5 py-2 text-red-400 hover:text-red-600 transition-colors duration-200 text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* Menu Button (always visible on mobile, left of auth on desktop) */}
            <div className="flex items-center lg:ml-4">
              <button
                onClick={toggleMenu}
                className="inline-flex flex-col items-center justify-center p-2 rounded-md text-white hover:text-[#D4B678] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4B678] lg:ml-0"
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
      </div>

      {/* Horizontal Menu - Desktop Only */}
      <div className={`hidden lg:block fixed top-0 left-0 w-full z-40 pointer-events-none transition-all duration-700 ease-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Horizontal Menu Container */}
        <div
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out pointer-events-auto ${
            isOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-95 -translate-y-4"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#D4B678]/20 ">
            {/* Navigation Links */}
            <div className="flex items-center px-6 py-4">
              {[...Navconstants1, ...Navconstants2].map((link, index) => (
                <div
                  key={link.to}
                  className={`transition-all duration-500 ease-out ${
                    isOpen 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `block px-6 py-3 mx-1 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? "bg-blue-500/20 text-blue-400 shadow-md border border-blue-500/30"
                        : "text-gray-300 hover:bg-[#D4B678]/10 hover:text-blue-400"
                    }`}
                  >
                    {link.title}
                  </NavLink>
                </div>
              ))}
              
              {/* CTA Button */}
              <div
                className={`ml-4 transition-all duration-500 ease-out ${
                  isOpen 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-8"
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${[...Navconstants1, ...Navconstants2].length * 100}ms` : '0ms'
                }}
              >
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Menu - Mobile Only */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } flex flex-col min-h-screen`}
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
