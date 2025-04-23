import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Monitor scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'About', 
      link: '/about',
      dropdown: [
        { name: 'Our Story', link: '/about/story' },
        { name: 'Leadership', link: '/about/leadership' },
        { name: 'Careers', link: '/about/careers' }
      ]
    },
    { 
      name: 'Services', 
      link: '/services',
      dropdown: [
        { name: 'Emergency Care', link: '/services/emergency' },
        { name: 'Specialty Care', link: '/services/specialty' },
        { name: 'Preventive Medicine', link: '/services/preventive' },
        { name: 'Rehabilitation', link: '/services/rehabilitation' }
      ]
    },
    { name: 'Doctors', link: '/doctors' },
    { name: 'Patients', link: '/patients' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <nav className={`w-full  z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`font-bold text-2xl transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              <span className="text-teal-500">Harmony Health</span> 
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-1">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button 
                        className={`px-4 py-2 flex items-center hover:text-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-blue-600'}`}
                        onClick={() => toggleDropdown(idx)}
                      >
                        {item.name}
                        {activeDropdown === idx ? (
                          <ChevronUp className="ml-1 w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-1 w-4 h-4" />
                        )}
                      </button>
                      
                      {/* Desktop Dropdown */}
                      <div 
                        className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all origin-top-left duration-200 ${
                          activeDropdown === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                      >
                        {item.dropdown.map((dropItem, dropIdx) => (
                          <Link
                            key={dropIdx}
                            to={dropItem.link}
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className={`block px-4 py-2 hover:text-blue-600 transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <button 
              className={`ml-6 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-1">
            {navItems.map((item, idx) => (
              <li key={idx} className="border-b border-gray-100">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="w-full flex justify-between items-center py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => toggleDropdown(idx)}
                    >
                      {item.name}
                      {activeDropdown === idx ? (
                        <ChevronUp className="ml-1 w-4 h-4" />
                      ) : (
                        <ChevronDown className="ml-1 w-4 h-4" />
                      )}
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`bg-gray-50 ${activeDropdown === idx ? 'block' : 'hidden'}`}>
                      {item.dropdown.map((dropItem, dropIdx) => (
                        <Link
                          key={dropIdx}
                          to={dropItem.link}
                          className="block py-2 px-8 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className="block py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-6 px-4">
            <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;