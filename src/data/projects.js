// All content for the Work tab lives here.
//
// image: put a file in /public/images and reference it as 'images/<file>'.
//        Leave it null to show a soft gradient placeholder instead.
//        No import line is needed (and one pointing to ../public will break the site).
// bg:    the soft background colour behind the image. The colours are set as
//        --card-...-from / --card-...-to at the top of src/index.css.
// tint:  optional colour for the tilted card behind the photo on the project page
//        (otherwise the "-to" colour from bg is used).
// link:  where the arrow button goes (case study URL, PDF, etc.).
// summary: one line under the title: what it is, who it was for, one result.
// wide:  the card sits full width above the other project cards.

export const experience = [
  {
    title: 'Digital Design Intern',
    subtitle: 'Relesys A/S',
    summary: 'Branded mobile apps for frontline staff across many brands · prototypes in 2–3 days',
    tag: 'Mobile applications',
    image: 'images/Relesyscard.png',
    bg: 'linear-gradient(135deg, var(--card-relesys-from) 0%, var(--card-relesys-to) 100%)',
    tint: 'var(--hero-tint-relesys)',
    link: '#relesys',
  },
];

export const projects = [
  {
    title: 'Internal Communication app',
    subtitle: 'Master’s Thesis - Case Study',
    summary: 'Mobile app for non-desk retail staff · SUS 79.4 · 5-day field test',
    tag: 'Mobile Application',
    image: 'images/Thesiscard.png',
    bg: 'linear-gradient(160deg, var(--card-thesis-from) 0%, var(--card-thesis-to) 100%)',
    link: '#internal-communication',
    wide: true,
  },

  {
    title: 'SpyRun',
    subtitle: 'Semester Project',
    summary: 'Published app · Auditory training game for children with APD · SUS 82.73',
    tag: 'Mobile Game',
    image: 'images/spyruncard.png',
    bg: 'linear-gradient(160deg, var(--card-spyrun-from) 0%, var(--card-spyrun-to) 100%)',
    link: '#spyrun',
  },

  {
    title: 'Digital Study Card',
    subtitle: 'Semester Project',
    summary: 'The university study card as an app · 235 survey responses · 6/6 preferred it',
    tag: 'Mobile Application',
    image: 'images/digitalcardcard.png',
    bg: 'linear-gradient(160deg, var(--card-study-card-from) 0%, var(--card-study-card-to) 100%)',
    tint: 'var(--hero-tint-study-card)',
    link: '#digital-study-card',
  },
];

// The "More projects" list under the cards: one line each, no picture.
// type: the small orange line under the title.
export const moreProjects = [
  {
    title: 'VR Driving Simulator',
    type: 'VR learning tool · Published at ICISS’24',
    summary: 'Interactive traffic scenarios for driving theory students · SUS 77.5',
    bg: 'linear-gradient(160deg, var(--card-vr-driving-from) 0%, var(--card-vr-driving-to) 100%)', // tilted card on the project page
    link: '#vr-driving-simulator',
  },
  {
    title: 'Pandas Fonologiske Lege',
    type: 'Tablet game · Bachelor’s Project',
    summary: 'Phonological awareness training for kindergarten children, tested with real users',
    bg: 'linear-gradient(160deg, var(--card-pandas-from) 0%, var(--card-pandas-to) 100%)', // tilted card on the project page
    tint: 'var(--hero-tint-pandas)',
    link: '#pandas-fonologiske-lege',
  },
  {
    title: 'Interactive Exhibit',
    type: 'Museum installation · Semester Project',
    summary: 'A social, physical-digital exhibit at Thorvaldsens Museum · 23 visitors tested it',
    bg: 'linear-gradient(160deg, var(--card-exhibit-from) 0%, var(--card-exhibit-to) 100%)', // tilted card on the project page
    tint: 'var(--hero-tint-exhibit)',
    link: '#interactive-exhibit',
  },
  {
    title: 'Maze Chase',
    type: 'Multiplayer VR game · Semester Project',
    summary: 'Dynamic difficulty that balances players through the environment · 24 players',
    bg: 'linear-gradient(160deg, var(--card-maze-chase-from) 0%, var(--card-maze-chase-to) 100%)', // tilted card on the project page
    tint: 'var(--hero-tint-maze-chase)',
    link: '#maze-chase',
  },
  {
    title: 'Dangers of Decibel',
    type: 'VR health experience · Semester Project',
    summary: 'Making hearing risk feel real · knowledge rose 4.6 points in the VR group',
    bg: 'linear-gradient(160deg, var(--card-decibel-from) 0%, var(--card-decibel-to) 100%)', // tilted card on the project page
    tint: 'var(--hero-tint-decibel)',
    link: '#dangers-of-decibel',
  },
];

// The scrolling strip under the front-page hero. Keep it to the roles in the hero.
export const roles = [
  'UX/UI Designer',
  'Product Designer',
  'Project Coordinator',
];
