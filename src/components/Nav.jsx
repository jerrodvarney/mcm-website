import logo from '@/assets/mcm-logo.png';

export default function Nav({ nav }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav id="nav">
      <div className="nav-logo">
        <img src={logo} alt="Mountain Crest Medical, Inc." />
      </div>

      <div id="nav-menu">
        {nav.items.map((item) => (
          <button
            key={item.targetId}
            type="button"
            onClick={() => scrollTo(item.targetId)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
