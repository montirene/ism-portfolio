// app/page.tsx

import Link from 'next/link';
import About from '../components/Sections/About'; 
import Skills from '../components/Sections/Skills'; 
import Projects from '../components/Sections/Projects'; 
import Contact from '../components/Sections/Contact'; // <-- ADD THIS IMPORT
import Footer from '../components/Layout/Footer';   // <-- ADD THIS IMPORT

export default function Home() {
  return (
    <> {/* Use a Fragment to contain both main and footer */}
      <main>
        
        {/* 1. HERO SECTION */}
        {/* ... (Hero section code) ... */}

        {/* 2. ABOUT ME SECTION */}
        <About /> 
        
        {/* 3. SKILLS SECTION */}
        <Skills /> 
        
        {/* 4. PROJECTS SECTION */}
        <Projects /> 

        {/* 5. CONTACT SECTION (New) */}
        <Contact /> 
        
      </main>
      
      {/* 6. FOOTER SECTION (New - Outside of <main>) */}
      <Footer /> 
    </>
  );
}