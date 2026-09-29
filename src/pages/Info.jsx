import { useEffect, useRef, useState } from 'react';
import Arrow from '../components/Arrow.jsx';
import Icon from '../components/Icon.jsx';
import SideNav from '../components/SideNav.jsx';
import { about, beyond, contact, education, experience, skills } from '../data/info.js';

const NAV = [
  { id: 'about', nav: 'About' },
  { id: 'experience', nav: 'Experience' },
  { id: 'education', nav: 'Education' },
  { id: 'skills', nav: 'Skills' },
  { id: 'contact', nav: 'Contact' },
];

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

// A photo on a tilted colour card. Shows a soft placeholder until a photo is added.
function Photo({ src, tint, className = '' }) {
  return (
    <div className={`photo ${className}`} style={{ '--tint': tint }}>
      {src ? <img src={src} alt="" /> : <div className="photo__img placeholder" />}
    </div>
  );
}

// Handwritten note with a small curved arrow pointing up-left.
function Scribble({ lines, className = '' }) {
  return (
    <p className={`scribble ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
        <path d="M34 30C22 30 10 24 8 8M8 8l-3 7M8 8l6 5" />
      </svg>
      <span>
        {lines.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </span>
    </p>
  );
}

// Adds `is-visible` once the element scrolls into view (used to animate the education cards in).
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// Small graduation cap that is tossed in the air when you hover an education card.
function Cap() {
  return (
    <svg className="edu-card__cap" viewBox="0 0 32 24" aria-hidden="true">
      <path d="M16 2 1 9l15 7 15-7-15-7Z" fill="currentColor" />
      <path d="M8 12.5V18c0 1.7 3.6 3 8 3s8-1.3 8-3v-5.5l-8 3.7-8-3.7Z" fill="currentColor" opacity="0.85" />
      <path d="M28 10v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="28" cy="18" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function Info() {
  const [eduRef, eduVisible] = useReveal();

  return (
    <>
      <main className="cs info-page">
        <div className="cs__content">
          <section id="about" className="about">
            <div>
              <p className="section__label">Info</p>
              <h1 className="about__title">
                {about.greeting}{' '}
                <span className="about__name">
                  {about.name}
                </span>
                .
              </h1>
              <p className="about__subtitle">{about.subtitle}</p>
              {about.body.map((p) => (
                <p className="about__body" key={p}>
                  {p}
                </p>
              ))}
              <Tags items={about.tags} />
            </div>
            <div className="about__photo">
              <Photo src={about.photo} tint="var(--tint-portrait)" className="photo--portrait" />
            </div>
          </section>

          <section className="beyond">
            <div>
              <p className="section__label">{beyond.label}</p>
              <h2 className="info-heading">{beyond.title}</h2>
              <div className="beyond__items">
                {beyond.items.map((item) => (
                  <div key={item.title} className="beyond__item">
                    <Icon name={item.icon} size={26} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="experience">
            <p className="section__label">{experience.label}</p>
            <h2 className="info-heading">
              {experience.title[0]}
              <br />
              {experience.title[1]}
            </h2>
            <ol className="timeline">
              {experience.items.map((job) => (
                <li key={job.years + job.title} className="timeline__item">
                  <p className="timeline__years">{job.years}</p>
                  <span className="timeline__dot" aria-hidden="true" />
                  <div>
                    <h3 className="timeline__title">{job.title}</h3>
                    <p className="timeline__place">{job.place}</p>
                    <p className="timeline__text">{job.text}</p>
                    <Tags items={job.tags} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="education" className="education">
            <p className="section__label">{education.label}</p>
            <h2 className="info-heading">
              {education.title[0]}
              <br />
              {education.title[1]}
            </h2>
            <div ref={eduRef} className={`education__cards ${eduVisible ? 'is-visible' : ''}`}>
              {education.items.map((ed, i) => (
                <div key={ed.degree} className="edu-card" style={{ '--i': i, '--edu-color': ed.color }}>
                  <span className="edu-card__dot" style={{ background: ed.color }} aria-hidden="true">
                    <Cap />
                  </span>
                  <div>
                    <h3 className="edu-card__degree">{ed.degree}</h3>
                    <p className="edu-card__program">{ed.program}</p>
                    <p className="edu-card__school">{ed.school}</p>
                    <p className="edu-card__text">{ed.text}</p>
                    <Tags items={ed.tags} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="skills">
            <p className="section__label">{skills.label}</p>
            <h2 className="info-heading">
              {skills.title[0]}
              <br />
              {skills.title[1]}
            </h2>
            <div className="skills__groups">
              {skills.groups.map((g) => (
                <div key={g.title} className="skill-group">
                  <div className="skill-group__head">
                    <span className="skill-group__icon" style={{ background: g.color }}>
                      <Icon name={g.icon} size={22} />
                    </span>
                    <h3>{g.title}</h3>
                  </div>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
        <SideNav items={NAV} />
      </main>

      <section id="contact" className="contact">
        <div className="contact__inner">
          <div>
            <p className="contact__label">{contact.label}</p>
            <h2 className="contact__title">{contact.title}</h2>
            <p className="contact__text">{contact.text}</p>
            <div className="contact__actions">
              <a className="contact__button" href={`mailto:${contact.email}`}>
                Say hello <Arrow />
              </a>
            </div>
          </div>

          <div className="contact__card">
            <a href={`mailto:${contact.email}`} className="contact__row">
              <Icon name="mail" size={24} />
              <span>
                <strong>Email</strong>
                <span>{contact.email}</span>
              </span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact__row">
              <Icon name="linkedin" size={24} />
              <span>
                <strong>LinkedIn</strong>
                <span>
                  Connect with me <Arrow size={12} />
                </span>
              </span>
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer" className="contact__row">
              <Icon name="doc" size={24} />
              <span>
                <strong>Resume</strong>
                <span>
                  Download CV <Arrow size={12} />
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
