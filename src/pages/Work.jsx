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
          {projects.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}
