import Arrow from './Arrow.jsx';

// The labelled lines under the title, in this order. Keys match `details` in projects.js.
const DETAIL_LABELS = [
  ['problem', 'Problem'],
  ['solution', 'Solution'],
  ['role', 'My role'],
];

export default function ProjectCard({ title, subtitle, details, tag, image, bg, link, wide = false }) {
  return (
    <a className={`card ${wide ? 'card--wide' : ''}`} href={link} style={{ background: bg }}>
      {image && <img className="card__image" src={image} alt="" loading="lazy" />}
      <span className="card__tag">{tag}</span>
      <div className="card__footer">
        <div>
          <h3 className="card__title">{title}</h3>
          <p className="card__subtitle">{subtitle}</p>
          {details && (
            <dl className="card__details">
              {DETAIL_LABELS.filter(([key]) => details[key]).map(([key, label]) => (
                <div key={key} className="card__detail">
                  <dt>{label}</dt>
                  <dd>{details[key]}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <span className="card__button" aria-hidden="true">
          <Arrow direction="up-right" size={22} />
        </span>
      </div>
    </a>
  );
}
