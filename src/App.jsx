import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollTopButton from './components/ScrollTopButton.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Work from './pages/Work.jsx';
import Info from './pages/Info.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import { caseStudies } from './data/caseStudies.js';

// A route is either a tab ('work', 'info') or a case study key ('#internal-communication').
const TABS = ['work', 'info'];
const routeFromHash = () => {
  const hash = window.location.hash.replace('#', '');
  return TABS.includes(hash) || caseStudies[hash] ? hash : 'work';
};

export default function App() {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    // Google Analytics ignores everything after #, so each page is sent as its own path
    // (…/portfolio/spyrun, …/portfolio/info). The tag in index.html doesn't count pages itself.
    const trackPage = () => {
      const page = routeFromHash();
      window.gtag?.('event', 'page_view', {
        page_title: page,
        page_location: `${window.location.origin}${window.location.pathname}${page}`,
      });
    };

    const onHash = () => {
      setRoute(routeFromHash());
      window.scrollTo(0, 0);
      trackPage();
    };

    trackPage(); // the page the visit starts on
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const changeTab = (next) => {
    window.location.hash = next;
    setRoute(next);
  };

  const study = caseStudies[route];

  return (
    <>
      <Header tab={study ? 'work' : route} light={route !== 'work'} showBack={!!study} onTabChange={changeTab} />
      {study ? (
        <CaseStudy key={route} slug={route} study={study} />
      ) : route === 'work' ? (
        <>
          <Hero />
          <Marquee />
          <Work />
        </>
      ) : (
        <Info />
      )}
      <Footer />
      <ScrollTopButton />
    </>
  );
}
