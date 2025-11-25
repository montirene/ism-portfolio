// components/Sections/About.tsx

import Image from 'next/image';
import React from 'react';

const AVATAR_PATH = '/avatar.PNG'; 

export default function About() {
  return (
    <section id="about" className="py-24 bg-background-beige relative overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Introduction Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif-heading font-bold text-primary-burgundy mb-4">
                Who Am I?
            </h2>
            <p className="text-lg text-text-black/80">
                My passion lies at the intersection of logical problem-solving and creative design. I don't just write code; I craft experiences.
            </p>
        </div>
        
        {/* 10-Column Grid (Centered with offset for aesthetic asymmetry) */}
        {/* The grid columns are 1 2 3 4 5 6 7 8 9 10 11 12 */}
        {/* We use lg:col-start-2 to center a 10-column block (12 - 10 = 2) / 2 = 1 (start 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:col-start-2">
          
          {/* A. PHOTO BLOCK (Occupies 3 columns) */}
          <div className="lg:col-span-3 relative order-1 lg:order-1"> 
            
                <div className="flex flex-col items-center lg:items-end sticky top-32"> {/* Added sticky for modern scrolling effect */}
                
                    {/* Unique Image Shape using Clip-Path (Requires custom CSS utility class) */}
                    <div className="relative w-full max-w-xs h-72 rounded-lg overflow-hidden shadow-2xl transition duration-500 hover:shadow-4xl z-10 lg:w-full clip-diagonal">
                        <Image
                            src={AVATAR_PATH} 
                            alt="Professional Photo of Irene S. Montalvo"
                            fill={true}
                            className="object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                
                    {/* Styled Badge/Name Tag */}
                    <div className="mt-6 text-center lg:text-right bg-primary-burgundy text-white p-3 rounded-md shadow-lg transform rotate-1 transition hover:rotate-0">
                        <span className="font-sans-body font-light text-sm">Irene S. Montalvo</span>
                    </div>
                </div>
          </div>
          
          {/* B. TEXT CONTENT (Occupies 7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-lg text-text-black/90 order-2 lg:order-2">
                <h3 className="text-2xl font-serif-heading font-bold text-secondary-red">My Journey & Philosophy</h3>
            <p>
              I am a third-year Bachelor of Science in Computer Science student with a growing passion for web development. Even though I’m still at the beginner stage, I’ve discovered that creating websites is something I genuinely enjoy. Learning how structure, design, and functionality work together has made web development one of the fields I’m most excited to pursue.
            </p>
            <p>
              My journey began with the foundational concepts of web development, and each new project has helped shape the way I understand problems and approach solutions. What started as basic layout experiments eventually grew into a deeper interest in building user-friendly and visually appealing interfaces. Web design, in particular, has become something I truly enjoy because it allows me to be creative while still applying logical thinking.
            </p>
            <p>
              As I continue learning, I’m becoming more comfortable with modern development practices and the workflows used in real-world environments. I enjoy exploring how different components of a website—design, interactivity, responsiveness, and user experience—come together to create something meaningful and polished. Working on this portfolio has been an important step in helping me apply what I’ve learned and push myself toward more professional development habits.
            </p>
            <p>
              Looking ahead, I’m committed to strengthening my skills, building more projects, and continuously expanding my understanding of web development. I’m excited about the journey I’m on and look forward to creating work that reflects both my progress and my personality as a developer.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}