import { roles } from '../data/projects.js';

// One colour per role, in the same order as `roles` in projects.js.
// The colours themselves are --marquee-1 … --marquee-5 at the top of src/index.css.
// If there are more roles than colours, the colours start over.
const COLORS = ['var(--marquee-1)', 'var(--marquee-2)', 'var(--marquee-3)', 'var(--marquee-4)', 'var(--marquee-5)'];

export default function Marquee() {
  // Repeat the list so the strip is always wider than the screen,
  // then render it twice for a seamless loop.
  const line = Array(3).fill(roles).flat();
  return (
    <div className="marquee" aria-label={roles.join(', ')}>
      <div className="marquee__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <span className="marquee__group" key={copy}>
            {line.map((role, i) => (
              <span key={i}>
                <span style={{ color: COLORS[(i % roles.length) % COLORS.length] }}>{role}</span>
                <span className="marquee__dot">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
