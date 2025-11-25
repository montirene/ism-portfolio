// components/Layout/Navbar.tsx

"use client"; // CRITICAL: Required for using useState and useEffect

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 

// Array of navigation links (remains the same)
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // New state to track if the user has scrolled past the top
  const [isScrolled, setIsScrolled] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect Hook to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100 pixels
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  // Conditional styles based on the isScrolled state
  const navClasses = isScrolled
    // SHRUNK/SCROLLED DOWN state: Solid background, shorter height, smaller text
    ? "h-16 bg-background-beige shadow-md transition-all duration-300" 
    // TOP/INITIAL state: Taller height, transparent background
    : "h-24 bg-background-beige/80 transition-all duration-300"; 
  
  const logoClasses = isScrolled 
    ? "text-2xl transition-all duration-300"
    : "text-3xl transition-all duration-300";

  return (
    // Apply dynamic classes to the main nav container
    <nav className={`fixed w-full z-50 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full"> {/* Use h-full here */}
          
          {/* Logo/Name - Apply dynamic text size */}
          <Link href="#hero" className={`font-serif-heading font-bold text-primary-burgundy hover:text-secondary-red transition-colors ${logoClasses}`}>
            I.M.
          </Link>
          
          {/* Desktop Links (height will be adjusted automatically) */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg font-sans-body font-semibold text-text-black 
                           hover:text-primary-burgundy transition-colors"
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

      {/* Mobile Menu Content (Keep solid background fix) */}
      {isOpen && (
        <div 
          // Adjust top position to match the scrolled/unscrolled header height
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