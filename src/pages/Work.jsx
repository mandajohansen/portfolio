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
  return (
    <main className="work">
      <Section label="Experience" title={['My work across design, technology', 'and real-world collaboration.']}>
        {experience.map((item) => (
          <ProjectCard key={item.title} {...item} wide />
        ))}
      </Section>

      <Section label="Projects" title={['Exploring real-world problems through research,', 'design and implementation.']}>
        <div className="grid">
          {projects
            .filter((item) => !item.more)
            .map((item) => (
              <ProjectCard key={item.title} {...item} />
            ))}
        </div>

        {/* Projects marked `more: true` in projects.js are listed here as one line each. */}
        <div className="more">
          <h3 className="more__title">More projects</h3>
          <ul className="more__list">
            {projects
              .filter((item) => item.more)
              .map((item) => (
                <li key={item.title}>
                  <a className="more__item" href={item.link}>
                    <span className="more__name">{item.title}</span>
                    <span className="more__summary">{item.summary}</span>
                    <Arrow direction="up-right" size={18} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}
