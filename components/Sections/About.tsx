// components/Sections/About.tsx

import Image from 'next/image';
import React from 'react';

const AVATAR_PATH = '/avatar.PNG'; 

export default function About() {
  return (
    <section id="about" className="py-24 bg-background-beige relative"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-5xl font-serif-heading font-bold text-center text-primary-burgundy mb-16">
          About Me
        </h2>

        {/* Dynamic Layout: Image (2/5) followed by Text (3/5) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* 1. PHOTO (New Position: FIRST) */}
          {/* Takes up 2 out of 5 columns on large screens */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end relative order-1"> 
            
            {/* Styled Background Element (Red Block) */}
            <div className="absolute w-64 h-64 -top-6 -right-6 bg-secondary-red opacity-80 rounded-lg transform -rotate-2 hidden md:block"></div>

            {/* Image Container */}
            <div className="relative w-72 h-72 rounded-lg overflow-hidden shadow-2xl transition duration-500 hover:shadow-4xl z-10">
                <Image
                  src={AVATAR_PATH} 
                  alt="Professional Photo of Irene S. Montalvo"
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition duration-500"
                />
            </div>
            
          </div>
          
          {/* 2. TEXT CONTENT (New Position: SECOND) */}
          {/* Takes up 3 out of 5 columns on large screens, ensuring text flows beside the image */}
          <div className="lg:col-span-3 space-y-6 text-lg text-text-black/90 lg:pl-10 order-2">
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