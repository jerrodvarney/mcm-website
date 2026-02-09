export default function Nav({ nav, brand }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav id="nav">
      <h2>
        {brand.logoText}
      </h2>

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
