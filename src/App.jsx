import content from '@/content/siteContent.json';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Physicians from './sections/Physicians';
import Services from './sections/Services';

import './App.scss';
import Footer from './components/Footer';

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
      <Hero hero={content.hero} nav={content.nav} brand={content.brand} />
      <Services services={content.services} />
      <Physicians physicians={content.physicians} />
      <Contact contact={content.contact} brand={content.brand} />

      <button
        id="scroll-to-top"
        className={belowHero ? 'show' : ''}
        type="button"
        onClick={scrollToTop}
      >
        <FaChevronUp size="2rem" />
      </button>

      <Footer footer={content.footer} />
    </main>
  );
}

export default App;
