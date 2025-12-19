// app/page.tsx
import Hero from '@/components/Sections/Hero';
import AboutMe from '@/components/Sections/AboutMe';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Services from '@/components/Sections/Services';
import Education from '@/components/Sections/Education';
import Contact from '@/components/Sections/Contact';
import MobileNav from '@/components/Navigation/MobileNav';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MobileNav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Contact />
      
      {/* Floating back to top button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        ↑
      </a>
    </main>
  );
}