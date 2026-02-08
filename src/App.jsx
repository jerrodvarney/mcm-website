import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Physicians from './sections/Physicians';
import Services from './sections/Services';

import './App.css';

function App() {
  // STATE
  const [belowHero, setBelowHero] = useState(false);

  // EVENT HELPERS
  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setBelowHero(!belowHero);
  };

  useEffect(() => {
    const onScroll = () => {
      setBelowHero(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main id="app">
      <Hero />
      <Services />
      <Physicians />
      <Contact />
      {belowHero && (
      <button id="scroll-to-top" type="button" onClick={scrollToTop}>
        <FaArrowAltCircleUp size="2rem" />
      </button>
      )}
    </main>
  );
}

export default App;
