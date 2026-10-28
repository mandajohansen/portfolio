import { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow.jsx';

export default function Header({ tab, light, showBack, onTabChange }) {
  // On mobile, LinkedIn and Resume sit behind a burger button.
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu on Escape or a tap outside it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onClick = (e) => !menuRef.current?.contains(e.target) && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, [menuOpen]);

  return (
    <header className={`header ${light ? 'header--light' : ''}`}>
      <a className="header__name" href="#work" onClick={() => onTabChange('work')}>
        Amanda Johansen
      </a>

      <div className="header__center">
        {/* On a case study (mobile only): a round arrow back to the Work page, left of the tabs */}
        {showBack && (
          <a className="header__back" href="#work" aria-label="Back to work">
            <Arrow direction="left" size={16} />
          </a>
        )}

        <nav className="tabs" aria-label="Main">
          {[
            ['work', 'Work'],
            ['info', 'Info'],
          ].map(([id, label]) => (
            <button
              key={id}
              className={`tabs__item ${tab === id ? 'is-active' : ''}`}
              onClick={() => onTabChange(id)}
              aria-current={tab === id ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className={`header__menu ${menuOpen ? 'is-open' : ''}`} ref={menuRef}>
        <button
          className="header__burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="header-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="header__links" id="header-links">
          <a href="https://www.linkedin.com/in/amandaljohansen" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            LinkedIn <Arrow direction="right" />
          </a>
          <a href="resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Resume <Arrow direction="right" />
          </a>
        </div>
      </div>
    </header>
  );
}
