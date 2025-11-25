// components/Sections/Contact.tsx

"use client"; // CRITICAL: Required for using interactive elements and icons

import React from 'react';
import Link from 'next/link';
// CORRECT: Using Mail, Github, and Linkedin
import { Mail, Github, Linkedin } from 'lucide-react'; 

const CONTACT_INFO = {
  email: 'irene.montalvo-21@cpu.edu.ph',
  linkedin: 'https://www.linkedin.com/in/montirene',
  github: 'https://github.com/montirene',
};

export default function Contact() {
  return (
    // CRITICAL: Ensure the ID is 'contact'
    <section id="contact" className="py-24 bg-text-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-serif-heading font-bold text-secondary-red mb-4">
          Get In Touch
        </h2>
        
        {/* Subtitle/Description */}
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          I'm currently seeking internship opportunities and collaborations. Feel free to connect or send me an email about projects and professional inquiries.
        </p>

        {/* CTA Button (Email) */}
        <Link href={`mailto:${CONTACT_INFO.email}`}>
          <button
            className="py-3 px-10 text-xl font-semibold uppercase tracking-wider
                       bg-primary-burgundy text-white rounded-lg shadow-xl 
                       transition-all duration-300 ease-in-out 
                       hover:bg-secondary-red hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center mx-auto mb-10"
          >
            <Mail className="w-6 h-6 mr-3" />
            Say Hello
          </button>
        </Link>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 text-white/90">
          
          {/* Email */}
          <Link href={`mailto:${CONTACT_INFO.email}`} target="_blank" className="hover:text-secondary-red transition-colors duration-300 group">
            <Mail className="w-8 h-8 mx-auto" />
            <span className="block mt-2 text-sm font-medium group-hover:underline">Email</span>
          </Link>
          
          {/* LinkedIn */}
          <Link href={CONTACT_INFO.linkedin} target="_blank" className="hover:text-secondary-red transition-colors duration-300 group">
            <Linkedin className="w-8 h-8 mx-auto" />
            <span className="block mt-2 text-sm font-medium group-hover:underline">LinkedIn</span>
          </Link>
          
          {/* GitHub */}
          <Link href={CONTACT_INFO.github} target="_blank" className="hover:text-secondary-red transition-colors duration-300 group">
            <Github className="w-8 h-8 mx-auto" />
            <span className="block mt-2 text-sm font-medium group-hover:underline">GitHub</span>
          </Link>
          
        </div>

      </div>
    </section>
  );
}