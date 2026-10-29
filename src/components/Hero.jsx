import { useEffect, useState } from 'react';
import Arrow from './Arrow.jsx';
import HeroWindow from './HeroWindow.jsx';

// Edit the text at the top of the front page here.
const HERO = {
  // The intro line: "I'm a UX/UI and product designer|". The first word shows straight away.
  // Add more words to the list to have them typed out one after the other.
  typedPrefix: 'I’m a',
  typed: ['UX/UI and product designer'],
  // Sentence 1 (title): what you do. Sentence 2 (lead): the experience that backs it up.
  title: [
    'I take digital products',
    'from first idea to a tested,',
    'working solution.',
  ],
  lead: 'I’ve taken 8+ projects from start to finish, from user research and design to development and testing with real users, across mobile apps, games and VR.',
  // The job titles you're looking for, shown as bubbles under the headline.
  rolesLabel: 'Looking for roles as',
  roles: ['UX/UI Designer', 'Product Designer', 'Project Coordinator'],

  // The animated window on the right (HeroWindow.jsx), with its sticker and spinning badge.
  sticker: 'Hello, this is how I work',
  badge: ' OPEN TO WORK • OPEN TO WORK • ',
};

// Starts with the first word fully shown, pauses, deletes it and types the next one.
// With a single word it simply stays put.
function useTypewriter(words) {
  const [text, setText] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length < 2 || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
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

// The animated window with a sticker and a spinning badge.
function Portrait() {
  return (
    <div className="hero__portrait">
      <HeroWindow />

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
        </div>

        <h1 className="hero__title">
          {HERO.title.map((line, i) => (
            <span key={line} className="hero__line" style={{ '--i': i }}>
              {line}
            </span>
          ))}
        </h1>

        {HERO.lead && <p className="hero__lead">{HERO.lead}</p>}

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
