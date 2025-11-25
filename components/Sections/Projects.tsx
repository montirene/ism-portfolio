// components/Sections/Projects.tsx

import React from 'react';
import ProjectCard from './ProjectCard';

// Define your project data with the exact titles, descriptions, and image paths
const projectsData = [
  {
    title: 'floriographix',
    description: 'A website dedicated to flowers, designed with a focus on visual appeal and simple navigation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/florio.PNG', 
    liveUrl: 'https://montirene.github.io/floriographix/',
    codeUrl: 'https://github.com/montirene/floriographix',
  },
  {
    title: 'art(ism)',
    description: 'An art museum website featuring various collections and exhibitions. A focus on clean layout and visual presentation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/art.PNG', 
    liveUrl: 'https://montirene.github.io/art-ism-/index.html',
    codeUrl: 'https://github.com/montirene/art-ism-',
  },
  {
    title: 'I’s Cookbook',
    description: 'A cooking book website showcasing various recipes with clear instructions and ingredient lists.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/cook.PNG', 
    liveUrl: 'https://montirene.github.io/iscookbook/',
    codeUrl: 'https://github.com/montirene/iscookbook',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-5xl font-serif-heading font-bold text-center text-primary-burgundy mb-16">
          Featured Projects 🚀
        </h2>

        {/* The grid remains 3 columns, but ProjectCard will conditionally span 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            // CRITICAL CHANGE: Pass the index to ProjectCard
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}