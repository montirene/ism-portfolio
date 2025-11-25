// components/Layout/Navbar.tsx

"use client"; // CRITICAL: Required for using useState and useEffect

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

// Array of navigation links
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hook to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // Conditional styles based on the isScrolled state
  const navClasses = isScrolled
    ? "h-16 bg-background-beige shadow-md transition-all duration-300" 
    : "h-24 bg-background-beige/80 shadow-none transition-all duration-300"; 
  
  const logoClasses = isScrolled 
    ? "text-2xl transition-all duration-300"
    : "text-3xl transition-all duration-300";

  return (
    // Apply dynamic classes to the main nav container
    <nav className={`fixed w-full z-50 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"> {/* Ensure inner div respects height */}
        <div className="flex justify-between items-center h-full"> 
          
          {/* Logo/Name - Apply dynamic text size */}
          <Link href="#hero" className={`font-serif-heading font-bold text-primary-burgundy hover:text-secondary-red transition-colors ${logoClasses}`}>
            I.M.
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg font-sans-body font-semibold text-text-black 
                           hover:text-primary-burgundy transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-primary-burgundy hover:bg-ui-light-gray"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div 
          // Position mobile menu based on current scroll state (top-16 or top-24)
          className={`md:hidden w-full bg-background-beige shadow-2xl pb-4 absolute left-0 ${isScrolled ? 'top-16' : 'top-24'}`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu} 
                className="block py-3 px-3 rounded-md text-base font-medium text-text-black 
                           hover:bg-ui-light-gray hover:text-primary-burgundy transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}