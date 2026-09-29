import { useEffect, useState } from 'react';

// Sticky section nav on the right of the case study and Info pages.
// items: [{ id, nav }] where id is the id of a section on the page.
// Uses buttons rather than #anchors, because the URL hash is already used to pick the page.
export default function SideNav({ items }) {
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="side-nav" aria-label="Sections">
      <ul>
        {items.map(({ id, nav }) => (
          <li key={id}>
            <button
              className={`side-nav__item ${active === id ? 'is-active' : ''}`}
              onClick={() => goTo(id)}
              aria-current={active === id ? 'true' : undefined}
              data-label={nav}
            >
              {nav}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
