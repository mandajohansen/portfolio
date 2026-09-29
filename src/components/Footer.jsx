import Arrow from './Arrow.jsx';
import { contact, footerText } from '../data/info.js';

// Shown at the bottom of every page. Links come from src/data/info.js.
export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__name">Amanda Johansen</p>
          <p className="footer__text">{footerText}</p>
        </div>

        <nav className="footer__links" aria-label="Contact">
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <button className="footer__top" onClick={toTop}>
            Back to top <Arrow direction="up" size={12} />
          </button>
        </nav>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Amanda Johansen</p>
    </footer>
  );
}
