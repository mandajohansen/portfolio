import { Fragment, useMemo } from 'react';
import Arrow from '../components/Arrow.jsx';
import Icon from '../components/Icon.jsx';
import SideNav from '../components/SideNav.jsx';
import { experience, projects } from '../data/projects.js';

// Renders one case study from src/data/caseStudies.js.
// Every section is a list of blocks; each block `type` maps to a component below.

const asList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

// Text wrapped in **double stars** in caseStudies.js is shown in bold.
function Rich({ text }) {
  if (typeof text !== 'string') return text ?? null;
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

function Picture({ src, className = '' }) {
  return src ? (
    <img className={className} src={src} alt="" loading="lazy" />
  ) : (
    <div className={`${className} placeholder`} />
  );
}

function InfoCard({ icon = 'user', title, text }) {
  return (
    <div className="info-card">
      <span className="icon-badge">
        <Icon name={icon} />
      </span>
      <div>
        <h3 className="info-card__title">{title}</h3>
        <p className="info-card__text"><Rich text={text} /></p>
      </div>
    </div>
  );
}

function StepArrow() {
  return (
    <svg className="steps__arrow" viewBox="0 0 60 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M0 6h58M52 1l6 5-6 5" />
    </svg>
  );
}

/* ---------- Blocks ---------- */

function TextBlock({ body, list, after }) {
  return (
    <div className="cs__text">
      {asList(body).map((p) => (
        <p key={p}><Rich text={p} /></p>
      ))}
      {list && (
        <ul>
          {list.map((item) => (
            <li key={item}><Rich text={item} /></li>
          ))}
        </ul>
      )}
      {asList(after).map((p) => (
        <p key={p}><Rich text={p} /></p>
      ))}
    </div>
  );
}

// The top Role / Tools / Methods / Context row, styled like "Beyond the screen" on the Info page.
function FactsRow({ items }) {
  return (
    <div className="facts">
      {items.map((item) => (
        <div key={item.title} className="fact">
          <Icon name={item.icon} size={24} />
          <h3>{item.title}</h3>
          <p><Rich text={item.text} /></p>
        </div>
      ))}
    </div>
  );
}

// Last word of the title gets the same hand-drawn orange underline as "Amanda" on the Info page.
function Underlined({ text }) {
  const words = text.split(' ');
  const last = words.pop();
  return (
    <>
      {words.length > 0 && `${words.join(' ')} `}
      <span className="underlined">
        {last}
        <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
          <path d="M3 10C50 4 120 3 197 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
    </>
  );
}

// The tilted card behind the hero image uses the colour of the project's card on the front page.
function tintFor(slug) {
  const card = [...experience, ...projects].find((p) => p.link === `#${slug}`);
  const colours = card?.bg.match(/#[0-9a-f]{6}|var\(--[\w-]+\)/gi);
  return colours ? colours[colours.length - 1] : 'var(--tint-portrait)';
}

function CardsBlock({ items }) {
  return (
    <div className={`cs__row cs__row--${items.length === 4 ? 4 : items.length === 2 ? 2 : 3}`}>
      {items.map((item) => (
        <InfoCard key={item.title} {...item} />
      ))}
    </div>
  );
}

function HighlightBlock({ label, text }) {
  return (
    <blockquote className="cs__problem">
      <p className="cs__problem-label">{label}</p>
      <p className="cs__problem-text"><Rich text={text} /></p>
    </blockquote>
  );
}

function QuoteBlock({ text }) {
  return <p className="cs__quote"><Rich text={text} /></p>;
}

// Overview of the process: numbered steps with a short label under each.
// The pictures belong to each step further down (see `image` on the subheading blocks).
// Each step can be clicked to jump to its numbered subheading further down the section.
function StepsBlock({ items }) {
  const goToStep = (e, i) => {
    const section = e.currentTarget.closest('section');
    const heads = section?.querySelectorAll('.cs__subheading[data-number]');
    heads?.[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="steps-panel" aria-label="Process overview">
      <p className="steps-panel__label">The process at a glance</p>
      <ol className="steps" style={{ '--n': items.length }}>
        {items.map((p, i) => (
          <li key={p.step} className="steps__item">
            <button type="button" className="steps__link" onClick={(e) => goToStep(e, i)}>
              <span className={`steps__num steps__num--${i + 1}`}>{i + 1}</span>
              <span className="steps__text">
                <span className="steps__label">{p.step}</span>
                {p.label && <span className="steps__sub">{p.label}</span>}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// A picture that belongs to one numbered step. Shows nothing until `image` is set.
function StepFigure({ image, caption }) {
  if (!image) return null;
  return (
    <figure className="step-figure">
      <img src={image} alt={caption || ''} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// Splits a section's blocks into groups that each start at a numbered subheading,
// so a step's picture can be placed after all of that step's text.
function groupBySubheading(blocks) {
  const groups = [];
  blocks.forEach((block) => {
    if (block.type === 'subheading' || groups.length === 0) groups.push({ head: block, blocks: [] });
    groups[groups.length - 1].blocks.push(block);
  });
  return groups;
}

function SubheadingBlock({ number, title }) {
  return (
    <div className="cs__subheading" data-number={number || undefined}>
      {number &&<span className={`steps__num steps__num--${number}`}>{number}</span>}
      <h3>{title}</h3>
    </div>
  );
}

// `wide: true` lets landscape pictures (tablet or desktop screens) fill the whole card.
// `rows: true` gives each item its own full-width row with a large picture (for very wide images).
function ChoicesBlock({ label, items, wide, rows }) {
  return (
    <div className={`cs__choices ${wide ? 'cs__choices--wide' : ''} ${rows ? 'cs__choices--rows' : ''}`}>
      {label && <p className="cs__problem-label">{label}</p>}
      <div className="cs__row cs__row--3">
        {items.map((c) => (
          // `chosen: true` on an item marks it as the direction that was picked.
          <div key={c.title} className={`choice ${c.chosen ? 'choice--chosen' : ''}`}>
            {c.chosen && (
              <span className="choice__badge">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" />
                </svg>
                {typeof c.chosen === 'string' ? c.chosen : 'Chosen design'}
              </span>
            )}
            <Picture src={c.image} className="choice__image" />
            <div>
              <h3 className="choice__title">{c.title}</h3>
              <p className="choice__text"><Rich text={c.text} /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// `numbered: true` puts 01, 02, 03… at the top of each card.
function NotesBlock({ items, numbered }) {
  return (
    <div className="notes" style={{ '--cols': items.length % 3 === 0 ? 3 : Math.min(items.length, 5) }}>
      {items.map((n, i) => (
        <div key={n.title} className="note">
          {numbered && <p className="note__num">{String(i + 1).padStart(2, '0')}</p>}
          <h3 className="note__title">
            {n.color && <span className="note__dot" style={{ background: n.color }} />}
            {n.title}
          </h3>
          {asList(n.text).map((p) => (
            <p key={p} className="note__text">
              <Rich text={p} />
            </p>
          ))}
          {n.list && (
            <ul className="note__list">
              {n.list.map((item) => (
                <li key={item}><Rich text={item} /></li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// `labels` renames rows for this block, e.g. { decision: 'Change' }. Rows an item leaves out are skipped.
// Items may also use the extra keys assumption, test and result.
// `columns: 3` puts three cards side by side instead of two.
function InsightsBlock({ items, labels = {}, columns }) {
  const rows = [
    ['assumption', 'Assumption'],
    ['test', 'Test'],
    ['result', 'Result'],
    ['insight', 'Insight'],
    ['decision', 'Design decision'],
    ['why', 'Why'],
  ];
  return (
    <div className="insights" style={columns ? { '--insight-cols': columns } : undefined}>
      {items.map((item, i) => (
        <div key={i} className="insight">
          {item.title && <h3 className="insight__title">{item.title}</h3>}
          {rows
            .filter(([key]) => item[key])
            .map(([key, label]) => (
              <div key={key} className={`insight__row insight__row--${key}`}>
                <p className="insight__label">{item.labels?.[key] ?? labels[key] ?? label}</p>
                <p className="insight__text"><Rich text={item[key]} /></p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

// Numbered stages on a thin timeline, e.g. evaluation rounds.
// items: [{ title, meta?, text, list?, tags? }]
function StagesBlock({ items }) {
  return (
    <ol className="stages" style={{ '--n': items.length }}>
      {items.map((s, i) => (
        <li key={s.title} className="stage">
          <span className="stage__dot" aria-hidden="true" />
          <p className="stage__num">{String(i + 1).padStart(2, '0')}</p>
          <h3 className="stage__title">{s.title}</h3>
          {s.meta && <p className="stage__meta">{s.meta}</p>}
          <p className="stage__text">
            <Rich text={s.text} />
          </p>
          {s.list && (
            <ul className="stage__list">
              {s.list.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          )}
          {s.tags && (
            <ul className="tags stage__tags">
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

// A left-to-right chain. Items are plain strings (pills) or {title, text} (cards).
function FlowBlock({ label, items }) {
  // A chain of plain words is drawn as a track: dots on one thin line with the words underneath.
  if (items.every((item) => typeof item === 'string')) {
    return (
      <div className="flow-wrap">
        {label && <p className="flow__label">{label}</p>}
        <ol className="track" style={{ '--n': items.length }}>
          {items.map((item, i) => (
            <li key={i} className="track__item">
              <span className="track__dot" aria-hidden="true" />
              <span className="track__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="track__label">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="flow-wrap">
      {label && <p className="flow__label">{label}</p>}
      <div className="flow">
        {items.map((item, i) => (
          <Fragment key={i}>
            {typeof item !== 'string' && i > 0 && <StepArrow />}
            {typeof item === 'string' ? (
              // The arrow stays with the word before it, so a wrapped line never starts with an arrow.
              <span className="flow__step">
                <span className="flow__pill">{item}</span>
                {i < items.length - 1 && <StepArrow />}
              </span>
            ) : (
              <div className="flow__card">
                <p className="flow__title">{item.title}</p>
                <p className="flow__text"><Rich text={item.text} /></p>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function ScoreBlock({ score, outcomes }) {
  return (
    <div className="cs__outcomes">
      <div className="score">
        <div className="score__main">
          <p className="score__value">{score.value}</p>
          <p className="score__label">{score.label}</p>
        </div>
        <p className="score__text"><Rich text={score.text} /></p>
      </div>
      {outcomes.map((o) => (
        <div key={o.title} className="outcome">
          <div className="outcome__head">
            <span className="icon-badge">
              <Icon name={o.icon} />
            </span>
            <h3 className="outcome__title">{o.title}</h3>
          </div>
          <p className="outcome__text"><Rich text={o.text} /></p>
        </div>
      ))}
    </div>
  );
}

// The first number is highlighted unless the block has `featured: false`.
function MetricsBlock({ items, featured = true }) {
  return (
    <div className="metrics" style={{ '--cols': items.length % 3 === 0 ? 3 : Math.min(items.length, 5) }}>
      {items.map((m, i) => (
        <div key={i} className={`metric ${featured && i === 0 ? 'metric--featured' : ''}`}>
          <p className="metric__value">{m.value}</p>
          <p className="metric__text"><Rich text={m.text} /></p>
        </div>
      ))}
    </div>
  );
}

const BLOCKS = {
  image: StepFigure,
  text: TextBlock,
  cards: CardsBlock,
  highlight: HighlightBlock,
  quote: QuoteBlock,
  steps: StepsBlock,
  subheading: SubheadingBlock,
  choices: ChoicesBlock,
  notes: NotesBlock,
  stages: StagesBlock,
  insights: InsightsBlock,
  flow: FlowBlock,
  score: ScoreBlock,
  metrics: MetricsBlock,
};

function Block({ type, ...props }) {
  const Component = BLOCKS[type];
  return (
    <div className={`cs__block cs__block--${type}`}>
      <Component {...props} />
    </div>
  );
}

/* ---------- Page ---------- */

export default function CaseStudy({ slug, study }) {
  // Rebuilt whenever the case study data changes, so the side menu always matches the sections.
  const navItems = useMemo(() => [{ id: 'overview', nav: 'Overview' }, ...study.sections], [study]);

  return (
    <main className="cs">
      <div className="cs__content">
        <a className="back-link" href="#work">
          <Arrow direction="left" size={16} />
          Back to work
        </a>

        <section id="overview" className="cs__intro">
          <div>
            {study.meta && (
              <ul className="tags cs__tags">
                {study.meta.split(' · ').map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            <h1 className="cs__title">
              {study.title[0]}
              <br />
              {study.title[1]}
            </h1>
            <p className="cs__subtitle">{study.subtitle}</p>
            {study.intro.map((p) => (
              <p className="cs__lead" key={p}>
                <Rich text={p} />
              </p>
            ))}
            {study.notice && <p className="cs__notice">{study.notice}</p>}
          </div>
          <div className="photo cs__photo" style={{ '--tint': tintFor(slug) }}>
            {study.heroImage ? (
              <img src={study.heroImage} alt="" />
            ) : (
              <div className={`photo__img placeholder ${study.heroNote ? 'cs__hero-note' : ''}`}>{study.heroNote}</div>
            )}
          </div>
        </section>

        <FactsRow items={study.facts} />

        {study.sections.map((section) => (
          <section key={section.id} id={section.id} className="cs__section">
            <p className="section__label">{section.label}</p>
            <h2 className="cs__heading">{section.title}</h2>
            {groupBySubheading(section.blocks).map((group, g) => (
              <Fragment key={g}>
                {group.blocks.map((block, i) => (
                  <Block key={i} {...block} />
                ))}
                {group.head.type === 'subheading' && <StepFigure {...group.head} />}
              </Fragment>
            ))}
            <StepFigure image={section.image} caption={section.caption} />
          </section>
        ))}
      </div>
      <SideNav items={navItems} />
    </main>
  );
}
