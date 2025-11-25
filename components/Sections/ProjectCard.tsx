// components/Sections/ProjectCard.tsx

import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 

// Define the type for the project data and include the index
interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  codeUrl: string;
}

// Define the type for the component's props
interface ProjectCardProps {
    project: Project;
    index: number; // CRITICAL: This needs to be defined in the props interface
}


// Use the new props interface in the function signature
export default function ProjectCard({ project, index }: ProjectCardProps) {
  
  // CRITICAL CHANGE: Determine if the card should span two columns (index 1 is the second card)
  const cardClasses = index === 1 
    ? "md:col-span-2 lg:col-span-2" // Apply wide span on medium and large screens
    : "md:col-span-1 lg:col-span-1"; // Default single column span

  return (
    <div 
      // Apply the dynamic class and keep existing styling
      className={`bg-background-beige rounded-xl shadow-xl overflow-hidden 
                  transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 
                  ${cardClasses}`} 
    >
      
      {/* Project Image Container */}
      <div className="relative h-48 w-full bg-ui-light-gray overflow-hidden">
        <Image
            src={project.imageUrl}
            alt={`Screenshot of the ${project.title} project`}
            fill={true} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105" 
        />
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-3xl font-serif-heading font-bold text-text-black mb-3">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-text-black/90 mb-4">{project.description}</p>
        
        {/* Tags/Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 text-sm font-medium rounded-full bg-secondary-red text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links/CTAs */}
        <div className="flex gap-4">
          
          <Link href={project.liveUrl} target="_blank">
            <button
              className="py-2 px-4 text-sm font-semibold text-white bg-primary-burgundy rounded-lg 
                         hover:bg-secondary-red transition duration-300"
            >
              View Live 🌐
            </button>
          </Link>
          
          <Link href={project.codeUrl} target="_blank">
            <button
              className="py-2 px-4 text-sm font-semibold text-primary-burgundy border-2 border-primary-burgundy rounded-lg 
                         hover:bg-primary-burgundy hover:text-white transition duration-300"
            >
              Code 🐙
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}