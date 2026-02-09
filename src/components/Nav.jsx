import logo from '@/assets/mcm-logo.png';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav({ nav }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    const y = el.getBoundingClientRect().top
    + window.pageYOffset
    - 100; // nav height

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (targetId) => {
    scrollTo(targetId);
    setOpen(false);
  };

  // prevent scrolling behind the drawer
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav id="nav">
      <div className="nav-logo" onClick={() => handleNavClick('hero')} role="presentation">
        <img src={logo} alt="Mountain Crest Medical, Inc." />
      </div>

      {/* Desktop menu */}
      <div id="nav-menu" className="nav-desktop">
        {nav.items.map((item) => (
          <button
            key={item.targetId}
            type="button"
            onClick={() => handleNavClick(item.targetId)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="nav-hamburger"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay */}
      <div
        className={`nav-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
        role="presentation"
      />

      {/* Slide-out drawer */}
      <aside className={`nav-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button
          type="button"
          className="nav-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        <div className="nav-drawer-links">
          {nav.items.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => handleNavClick(item.targetId)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>
    </nav>
  );
}
