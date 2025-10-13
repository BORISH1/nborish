// app/page.tsx

import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Sections/Hero';
import AboutMe from '@/components/Sections/AboutMe';
import Education from '@/components/Sections/Education'; // New
import Skills from '@/components/Sections/Skills';       // New
import Services from '@/components/Sections/Services';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar /> 
      
      <main>
        <Hero />
        <AboutMe />
        <Education /> {/* Added */}
        <Skills />    {/* Added */}
        <Services />
        <Projects />
        <Contact />
        
        {/* Simple Footer */}
        <footer className="py-6 text-center text-sm text-secondary-text relative z-10" style={{ backgroundColor: 'var(--background)' }}>
          &copy; {new Date().getFullYear()} Borish Ningombam. All rights reserved.
        </footer>
      </main>
    </>
  );
}