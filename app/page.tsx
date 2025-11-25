// app/page.tsx

import Link from 'next/link';
import About from '../components/Sections/About'; 
import Skills from '../components/Sections/Skills'; 
import Projects from '../components/Sections/Projects'; 
import Contact from '../components/Sections/Contact'; 
import Footer from '../components/Layout/Footer';
import Hero from '@/components/Sections/Hero'; 

export default function Home() {
  return (
    <> {/* Use a Fragment to contain both main and footer */}
      <main>
        
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. ABOUT ME SECTION */}
        <About /> 
        
        {/* 3. SKILLS SECTION (Ensure file exists) */}
        <Skills /> 
        
        {/* 4. PROJECTS SECTION (Ensure file exists) */}
        <Projects /> 

        {/* 5. CONTACT SECTION (Ensure file exists) */}
        <Contact /> 
        
      </main>
      
      {/* 6. FOOTER SECTION (Ensure file exists) */}
      <Footer /> 
    </>
  );
}