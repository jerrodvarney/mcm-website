import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Physicians from './sections/Physicians';
import Services from './sections/Services';

import './App.css';

function App() {
  return (
    <main id="app">
      <Hero />
      <Services />
      <Physicians />
      <Contact />
    </main>
  );
}

export default App;
