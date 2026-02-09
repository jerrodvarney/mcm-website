import Nav from '@/components/Nav';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Hero({ hero, nav, brand }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="hero">
      <Nav nav={nav} brand={brand} />

      <div id="hero-content">
        <h1>{hero.headline}</h1>
        <h2>{hero.subheadline}</h2>

        {hero.paragraphs.map((txt) => (
          <p key={txt}>{txt}</p>
        ))}

        <div className="hero-btns">
          <button
            id="hero-contact-btn"
            type="button"
            onClick={() => scrollTo(hero.ctaPrimary.targetId)}
          >
            {hero.ctaPrimary.label}
          </button>

          <button
            id="hero-learn-btn"
            type="button"
            onClick={() => scrollTo(hero.ctaSecondary.targetId)}
          >
            {hero.ctaSecondary.label}
            <FaLongArrowAltRight size="2rem" />
          </button>
        </div>
      </div>
    </section>
  );
}
