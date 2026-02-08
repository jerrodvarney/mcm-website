export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav id="nav">
      <a href="hero">LOGO GOES HERE</a>
      <div id="nav-menu">
        <button type="button" onClick={() => scrollTo('services')}>Services</button>
        <button type="button" onClick={() => scrollTo('physicians')}>Physicians</button>
        <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
}
