import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PhotographyStack from './components/PhotographyStack';
import './assets/css/styles.css';

function MainContent() {
  return (
    <main>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div className="l-main">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/photography" element={<PhotographyStack />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;