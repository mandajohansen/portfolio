import Arrow from './Arrow.jsx';

export default function ProjectCard({ title, subtitle, tag, image, bg, link, wide = false }) {
  return (
    <a className={`card ${wide ? 'card--wide' : ''}`} href={link} style={{ background: bg }}>
      {image && <img className="card__image" src={image} alt="" loading="lazy" />}
      <span className="card__tag">{tag}</span>
      <div className="card__footer">
        <div>
          <h3 className="card__title">{title}</h3>
          <p className="card__subtitle">{subtitle}</p>
        </div>
        <span className="card__button" aria-hidden="true">
          <Arrow direction="up-right" size={22} />
        </span>
      </div>
    </a>
  );
}
