"use client";
import HomeHero from './Home';
import Work from '../projects/Work';
import About from '../about/About';
import ExperienceSection from '../experience/ExperienceSection';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <About />
      <ExperienceSection />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
