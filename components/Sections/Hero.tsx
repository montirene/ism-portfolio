// components/Sections/Hero.tsx

import React from 'react';
import LegacyLinkButton from '../ui/LegacyLinkButton'; // Import the client wrapper

export default function Hero() {
  return (
    // min-h-screen ensures it fills the viewport, pt-24 pushes content below the tallest Navbar
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-background-beige text-text-black pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle/Tagline */}
        <p className="text-xl sm:text-2xl text-secondary-red mb-2 font-serif-heading">
          Aspiring Web Developer | CS Student
        </p>

        {/* Full Name - Main Heading */}
        <h1 className="text-6xl sm:text-8xl font-black text-primary-burgundy mb-6 tracking-tight text-center">
          Irene S. Montalvo
        </h1>

        {/* Short Introduction */}
        <p className="text-lg sm:text-xl text-text-black/80 max-w-2xl mx-auto mb-10">
          I'm a passionate Computer Science student dedicated to building user-friendly and aesthetically pleasing web interfaces. Let's create something meaningful.
        </p>

        {/* Call to Action Button */}
        <LegacyLinkButton
            href="#projects"
            className="inline-block px-8 py-3 text-lg font-semibold tracking-wider uppercase bg-primary-burgundy text-white rounded-full shadow-lg transition duration-300 transform hover:bg-secondary-red hover:scale-105"
        >
            View My Work &darr;
        </LegacyLinkButton>
        
      </div>
    </section>
  );
}