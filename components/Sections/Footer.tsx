// components/Layout/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { GitHub, Linkedin, Facebook } from 'lucide-react'; // Using icons

const CONTACT_INFO = {
    linkedin: 'https://www.linkedin.com/in/montirene',
    github: 'https://github.com/montirene',
    facebook: 'https://www.facebook.com/ir1n.m', 
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-black py-8 border-t border-secondary-red/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-white/70 text-sm">
        
        {/* Copyright Notice */}
        <p className="mb-4 md:mb-0">
          &copy; {currentYear} Irene S. Montalvo. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link href={CONTACT_INFO.github} target="_blank" aria-label="GitHub Profile" className="hover:text-secondary-red transition-colors">
            <GitHub className="w-5 h-5" />
          </Link>
          <Link href={CONTACT_INFO.linkedin} target="_blank" aria-label="LinkedIn Profile" className="hover:text-secondary-red transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href={CONTACT_INFO.facebook} target="_blank" aria-label="Facebook Profile" className="hover:text-secondary-red transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}