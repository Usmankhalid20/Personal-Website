import HomeHero from '../src/features/home/Home';
import About from '../src/features/about/About';
import ExperienceSection from '../src/features/experience/ExperienceSection';
import Work from '../src/features/projects/Work';
import Skills from '../src/features/skills/Skills';
import Contact from '../src/features/contact/Contact';

export default function Page() {
  return (
    <main>
      <HomeHero />
      <Work />
      <About />
      <ExperienceSection />
      <Skills />
      <Contact />
    </main>
  );
}
