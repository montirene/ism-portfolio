// components/Sections/Skills.tsx

"use client"; // CRITICAL: Required for using useState and useEffect for animation

import React, { useState, useEffect } from 'react'; 
import { Component } from 'lucide-react'; // Placeholder for icons if needed

// New component using SVG for circular progress
const CircularProgress = ({ name, proficiency, level, icon }: { name: string, proficiency: number, level: string, icon: string }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference); 

  useEffect(() => {
    // Calculate the offset required to show the percentage of the circle
    const progressOffset = circumference - (proficiency / 100) * circumference;
    const timer = setTimeout(() => {
        setOffset(progressOffset);
    }, 100); 
    return () => clearTimeout(timer); 
  }, [proficiency, circumference]);

  return (
    <div className="flex flex-col items-center text-center p-2">
      <div className="relative w-28 h-28 mb-3">
        <svg className="w-full h-full transform -rotate-90">
          
          {/* Background circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth="8"
            fill="transparent"
            className="text-ui-light-gray"
            stroke="currentColor"
          />

          {/* Foreground progress circle */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth="8"
            fill="transparent"
            stroke="url(#progressGradient)" // Uses a gradient for visual appeal
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out text-primary-burgundy"
            strokeLinecap="round"
          />
           
           {/* Gradient Definition (MUST be inside the SVG container) */}
           {/* Note: In a real project, this definition is better placed once in the main Skills SVG */}
           <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: "#E34234", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#800020", stopOpacity: 1}} />
                </linearGradient>
            </defs>
        </svg>

        {/* Proficiency Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-text-black">{proficiency}%</span>
          <span className="text-xs text-primary-burgundy font-medium">{level}</span>
        </div>
      </div>
      
      <span className="text-2xl mb-1">{icon}</span>
      <span className="font-semibold text-lg text-text-black">{name}</span>
    </div>
  );
};

// Data Structure for all your skills
const skillsData = {
  frontend: [
    { name: 'HTML5', icon: '💻', proficiency: 80, level: 'Intermediate' },
    { name: 'CSS3', icon: '🎨', proficiency: 80, level: 'Intermediate' },
    { name: 'JavaScript (ES6+)', icon: '💡', proficiency: 75, level: 'Intermediate' },
  ],
  styling: [
    { name: 'Tailwind CSS', icon: '🌬️', proficiency: 70, level: 'Advanced Beginner' },
    { name: 'React', icon: '⚛️', proficiency: 70, level: 'Advanced Beginner' },
    { name: 'Next.js (App Router)', icon: '🚀', proficiency: 50, level: 'Beginner' },
  ],
  tools: [
    { name: 'Git', icon: '🌳', proficiency: 75, level: 'Intermediate' },
    { name: 'GitHub', icon: '🐙', proficiency: 75, level: 'Intermediate' },
    { name: 'Vercel', icon: '☁️', proficiency: 60, level: 'Beginner' },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-ui-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-5xl font-serif-heading font-bold text-center text-primary-burgundy mb-16">
          Skills & Technologies
        </h2>

        {/* Updated grid layout to better display circular elements (6 columns on desktop) */}
        <div className="grid grid-cols-1 gap-10">
          
          {/* Frontend Section */}
          <div className="md:col-span-2 space-y-8 p-6 bg-background-beige rounded-xl shadow-lg border-t-4 border-secondary-red">
            <h3 className="text-2xl font-serif-heading font-bold mb-8 text-text-black text-center">Frontend Fundamentals</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
              {skillsData.frontend.map(skill => (
                <CircularProgress key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Styling/Frameworks Section */}
          <div className="md:col-span-2 space-y-8 p-6 bg-background-beige rounded-xl shadow-lg border-t-4 border-secondary-red">
            <h3 className="text-2xl font-serif-heading font-bold mb-8 text-text-black text-center">Frameworks & Styling</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
              {skillsData.styling.map(skill => (
                <CircularProgress key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="md:col-span-2 space-y-8 p-6 bg-background-beige rounded-xl shadow-lg border-t-4 border-secondary-red">
            <h3 className="text-2xl font-serif-heading font-bold mb-8 text-text-black text-center">Version Control & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
              {skillsData.tools.map(skill => (
                <CircularProgress key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}