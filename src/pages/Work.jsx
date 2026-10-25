import Arrow from '../components/Arrow.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { experience, projects } from '../data/projects.js';

// `title` is two lines: [first line, second line].
function Section({ label, title, children }) {
  return (
    <section className="section">
      <p className="section__label">{label}</p>
      <h2 className="section__title">
        {title[0]}
        <br />
        {title[1]}
      </h2>
      {children}
    </section>
  );
}

export default function Work() {
  const cards = projects.filter((item) => !item.more);
  const more = projects.filter((item) => item.more);

  return (
    <main className="work">
      <Section label="Experience" title={['My work across design, technology', 'and real-world collaboration.']}>
        {experience.map((item) => (
          <ProjectCard key={item.title} {...item} wide />
        ))}
      </Section>

      <Section label="Projects" title={['Exploring real-world problems through research,', 'design and implementation.']}>
        {/* Projects marked `wide: true` in projects.js sit full width above the grid. */}
        {cards
          .filter((item) => item.wide)
          .map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        <div className="grid">
          {cards
            .filter((item) => !item.wide)
            .map((item) => (
              <ProjectCard key={item.title} {...item} />
            ))}
        </div>

        {/* Projects marked `more: true` in projects.js are listed here as one line each. */}
        {more.length > 0 && (
          <div className="more-projects">
            <h3 className="more-projects__title">More projects</h3>
            <ul className="more-projects__list">
              {more.map((item) => (
                <li key={item.title}>
                  <a className="more-projects__item" href={item.link}>
                    <span className="more-projects__name">{item.title}</span>
                    <span className="more-projects__type">{item.tag}</span>
                    <span className="more-projects__summary">{item.summary}</span>
                    <span className="more-projects__arrow" aria-hidden="true">
                      <Arrow direction="right" size={18} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </main>
  );
}
