export default function Nav({ nav, brand }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top
    + window.pageYOffset
    - window.innerHeight / 2
    + el.offsetHeight / 2;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
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
