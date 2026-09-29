import Arrow from './Arrow.jsx';

export default function Header({ tab, light, onTabChange }) {
  return (
    <header className={`header ${light ? 'header--light' : ''}`}>
      <a className="header__name" href="#work" onClick={() => onTabChange('work')}>
        Amanda Johansen
      </a>

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

      <div className="header__links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn <Arrow direction="right" />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume <Arrow direction="right" />
        </a>
      </div>
    </header>
  );
}
