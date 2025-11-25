// components/Sections/Skills.tsx

"use client"; 

import React from 'react'; 
// Replaced CircularProgress with the simpler SkillBar for a cleaner layout

// New Skill Bar Component (Cleaner, less prone to SVG errors, uses CSS animation)
const SkillBar = ({ name, proficiency, level, icon }: { name: string, proficiency: number, level: string, icon: string }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-semibold text-text-black flex items-center">
                    <span className="mr-2 text-xl">{icon}</span>
                    {name}
                </span>
                <span className="text-sm font-medium text-primary-burgundy">{proficiency}%</span>
            </div>
            
            {/* The Animated Progress Bar */}
            <div className="w-full bg-ui-light-gray rounded-full h-2.5 relative overflow-hidden">
                <div 
                    className="bg-secondary-red h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                        // Use CSS variable or style to control animation width
                        width: `${proficiency}%`, 
                        transitionDelay: '0.2s'
                    }}
                ></div>
            </div>
            <p className="text-xs text-text-black/60 mt-1">{level}</p>
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
      {/* Tighter Max Width for Skills Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-5xl font-serif-heading font-bold text-center text-primary-burgundy mb-16">
          Skills & Competencies
        </h2>

        {/* 3-Column Grid for Skill Categories on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Frontend Section */}
          <div className="p-8 bg-background-beige rounded-xl shadow-xl border-t-8 border-primary-burgundy">
            <h3 className="text-2xl font-serif-heading font-bold mb-8 text-secondary-red text-center">Frontend Fundamentals</h3>
            <div>
              {skillsData.frontend.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Styling/Frameworks Section */}
          <div className="p-8 bg-background-beige rounded-xl shadow-xl border-t-8 border-secondary-red">
            <h3 className="text-2xl font-serif-heading font-bold mb-8 text-primary-burgundy text-center">Frameworks & Styling</h3>
            <div>
              {skillsData.styling.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="p-8 bg-background-beige rounded-xl shadow-xl border-t-8 border-primary-burgundy">
            <h3 className="text-2xl font-serif-heading font-bold mb-8 text-secondary-red text-center">Version Control & Tools</h3>
            <div>
              {skillsData.tools.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action or brief summary below skills */}
        <p className="text-center text-lg text-text-black/80 mt-16 max-w-4xl mx-auto">
            These are my current core competencies. I am constantly expanding my knowledge, with a future focus on mastering **TypeScript** and delving into **full-stack architectures**.
        </p>
      </div>
    </section>
  );
}