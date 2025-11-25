// app/layout.tsx

import React from 'react';
// 1. Next.js Font Optimization: Import the fonts used in your tailwind.config.js
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '../components/Layout/Navbar'; // <-- IMPORT THE NAVBAR
import './globals.css'; // Global CSS for Tailwind directives

// 2. Configure the Serif Font for Headings (Used with font-serif-heading Tailwind class)
const serifHeading = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Include weights you might use
  variable: '--font-serif-heading',
  display: 'swap',
});

// 3. Configure the Sans-serif Font for Body (Used with font-sans-body Tailwind class)
const sansBody = Inter({
  subsets: ['latin'],
  variable: '--font-sans-body',
  display: 'swap',
});

// Metadata (Good practice for SEO and project professionalism)
export const metadata = {
  title: 'Irene S. Montalvo | Professional Web Developer Portfolio',
  description: 'Portfolio showcasing web development projects, skills, and identity as a Computer Science student focusing on React and Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 4. Apply Font variables to the <html> tag
    <html lang="en" className={`${serifHeading.variable} ${sansBody.variable} scroll-smooth`}>
      {/* 5. Apply custom theme classes and padding-top to the <body> tag */}
      <body className="bg-background-beige text-text-black font-sans-body min-h-screen pt-20 antialiased">
        
        {/* 6. Navbar Component (Fixed at the top) */}
        <Navbar />
        
        {/* 7. Children (This is where the content from page.tsx and other pages is rendered) */}
        {children}

        {/* The Footer will eventually go here */}
      </body>
    </html>
  );
}