import { useEffect, useState } from 'react';
import Arrow from './Arrow.jsx';

// Floating arrow back to the top, shown on mobile once the header has scrolled out of view.
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (!header) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      className={`scroll-top ${visible ? 'is-visible' : ''}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Arrow direction="up" size={18} />
    </button>
  );
}
