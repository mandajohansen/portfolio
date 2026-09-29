import { useEffect, useState } from 'react';
import Arrow from './Arrow.jsx';

// Edit the text at the top of the front page here.
const HERO = {
  // The intro types out these words one after the other: "I'm a UX/UI designer|"
  typedPrefix: 'I’m a',
  typed: ['UX/UI designer', 'User researcher', 'Digital Designer', 'Project coordinator', 'Product designer'],
  // Set to null to hide the green "available" pill.
  status: 'Open to new opportunities',
  title: [
    'I turn complex needs',
    'into thoughtful digital',
    'products and experiences.',
  ],  // The job titles you're looking for, shown as bubbles under the headline.
  rolesLabel: 'Looking for roles as',
  roles: ['UX/UI Designer', 'Product Designer', 'Digital Designer', 'Project Coordinator'],

  // Your photo on the right, with its sticker and spinning badge.
  photo: 'images/me.jpg',
  sticker: 'Hi, I’m Amanda!',
  badge: 'DIGITAL DESIGNER • OPEN TO WORK • ',
};

// Types each word, pauses, deletes it and moves on to the next one.
function useTypewriter(words) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return undefined;
    }
    const word = words[index % words.length];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

// Photo in a scalloped frame with a sticker, a spinning badge and a hand-drawn arrow pointing at it.
function Portrait() {
  return (
    <div className="hero__portrait">
      <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
        <clipPath id="scallop" clipPathUnits="objectBoundingBox">
          <rect x="0.1" y="0.08" width="0.8" height="0.84" />
          {[0.2, 0.4, 0.6, 0.8].map((x) => (
            <circle key={`t${x}`} cx={x} cy="0.105" r="0.105" />
          ))}
          {[0.2, 0.4, 0.6, 0.8].map((x) => (
            <circle key={`b${x}`} cx={x} cy="0.895" r="0.105" />
          ))}
          {[0.25, 0.42, 0.58, 0.75].map((y) => (
            <circle key={`l${y}`} cx="0.105" cy={y} r="0.105" />
          ))}
          {[0.25, 0.42, 0.58, 0.75].map((y) => (
            <circle key={`r${y}`} cx="0.895" cy={y} r="0.105" />
          ))}
        </clipPath>
      </svg>

      <svg className="hero__loop" viewBox="0 0 160 90" fill="none" aria-hidden="true">
        <path
          d="M2 30c30-6 58-2 70 14 10 14-4 30-16 22s2-30 22-32c22-2 44 10 68 26"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M140 52l8 10-12 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="hero__photo">
        <img src={HERO.photo} alt="Amanda Johansen" />
      </div>

      {HERO.sticker && <span className="hero__sticker">{HERO.sticker}</span>}

      {HERO.badge && (
        <svg className="hero__badge" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <path id="badge-circle" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" />
          </defs>
          <circle cx="50" cy="50" r="49" />
          <g className="hero__badge-ring">
            <text>
              <textPath href="#badge-circle" textLength="224" lengthAdjust="spacing">
                {HERO.badge}
              </textPath>
            </text>
          </g>
          <path className="hero__badge-star" d="M50 38L52.94 45.95 61.41 46.29 54.76 51.55 57.05 59.71 50 55 42.95 59.71 45.24 51.55 38.59 46.29 47.06 45.95Z" />
        </svg>
      )}
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(HERO.typed);

  const scrollDown = (e) => {
    const hero = e.currentTarget.closest('.hero');
    window.scrollTo({ top: hero.offsetHeight, behavior: 'smooth' });
  };

  return (
    <section className="hero hero--work hero--portrait">
      <div className="hero__content">
        <div className="hero__intro">
          <p className="hero__typed" aria-label={`${HERO.typedPrefix} ${HERO.typed[0]}`}>
            {HERO.typedPrefix} <span className="hero__typed-word">{typed}</span>
            <span className="hero__caret" aria-hidden="true" />
          </p>
          {HERO.status && (
            <span className="hero__status">
              <span className="hero__status-dot" aria-hidden="true" />
              {HERO.status}
            </span>
          )}
        </div>

        <h1 className="hero__title">
          {HERO.title.map((line, i) => (
            <span key={line} className="hero__line" style={{ '--i': i }}>
              {line}
            </span>
          ))}
        </h1>

        {HERO.rolesLabel && <p className="hero__roles-label">{HERO.rolesLabel}</p>}
        <ul className="tags hero__proof">
          {HERO.roles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero__actions">
          <button className="hero__button" onClick={scrollDown}>
            See my work <Arrow direction="down" size={16} />
          </button>
        </div>
      </div>

      <Portrait />
    </section>
  );
}
