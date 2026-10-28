// All content for the Work tab lives here.
//
// image: put a file in /public/images and reference it as 'images/<file>'.
//        Leave it null to show a soft gradient placeholder instead.
//        No import line is needed (and one pointing to ../public will break the site).
// bg:    the soft background colour behind the image. The colours are set as
//        --card-...-from / --card-...-to at the top of src/index.css.
// link:  where the arrow button goes (case study URL, PDF, etc.).
// summary: up to three sentences under the title: the problem, what was designed
//        (with one result, e.g. a SUS score) and what you personally did.
// wide:  the card sits full width above the other project cards.

export const experience = [
  {
    title: 'Digital Design Intern',
    subtitle: 'Relesys A/S',
    summary:
      'Transforming a shared app platform into unique, branded experiences through rapid prototyping, thoughtful design, and hands-on technical implementation.',
    tag: 'Mobile applications',
    image: 'images/Relesyscard.png',
    bg: 'linear-gradient(135deg, var(--card-relesys-from) 0%, var(--card-relesys-to) 100%)',
    link: '#relesys',
  },
];

export const projects = [
  {
    title: 'Internal Communication: A mobile app for retail staff',
    subtitle: 'Master’s Thesis',
    summary:
      'Transforming fragmented retail communication into one centralized app for news, shift handovers, and shared knowledge, independently researched, designed, and developed in React Native, achieving a SUS score of 79.4 through real-world store testing.',
    tag: 'Mobile Application',
    image: 'images/Thesiscard.png',
    bg: 'linear-gradient(160deg, var(--card-thesis-from) 0%, var(--card-thesis-to) 100%)',
    link: '#internal-communication',
    wide: true,
  },

  {
    title: 'SpyRun: A listening game for children with APD',
    subtitle: 'Semester Project · Published app',
    summary:
      'Transforming repetitive auditory training into an engaging endless-runner game for children with APD, combining research, game UX, and user testing in a five-person team to create a published game that achieved a SUS score of 82.73.',
    tag: 'Mobile Game',
    image: 'images/spyruncard.png',
    bg: 'linear-gradient(160deg, var(--card-spyrun-from) 0%, var(--card-spyrun-to) 100%)',
    link: '#spyrun',
  },

  {
    title: 'Digital Study Card: The university ID card as an app',
    subtitle: 'Semester Project',
    summary:
      'Transforming traditional student ID cards into a digital solution with NFC access and clear room permissions, combining UX/UI design and user testing to create a prototype that achieved a SUS score of 88.52.',
    tag: 'Mobile Application',
    image: 'images/digitalcardcard.png',
    bg: 'linear-gradient(160deg, var(--card-study-card-from) 0%, var(--card-study-card-to) 100%)',
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
    bg: 'linear-gradient(160deg, var(--card-vr-driving-from) 0%, var(--card-vr-driving-to) 100%)',
    link: '#vr-driving-simulator',
  },
  {
    title: 'Pandas Fonologiske Lege: A speech-sound game for children',
    type: 'Tablet game · Bachelor’s Project',
    summary: 'Phonological awareness training for kindergarten children, tested with real users',
    bg: 'linear-gradient(160deg, var(--card-pandas-from) 0%, var(--card-pandas-to) 100%)',
    link: '#pandas-fonologiske-lege',
  },
  {
    title: 'Interactive Exhibit: A card-matching game at Thorvaldsens Museum',
    type: 'Museum installation · Semester Project',
    summary: 'A social, physical-digital learning experience for museum visitors · 23 visitors tested it',
    bg: 'linear-gradient(160deg, var(--card-exhibit-from) 0%, var(--card-exhibit-to) 100%)',
    link: '#interactive-exhibit',
  },
  {
    title: 'Maze Chase: A multiplayer VR game',
    type: 'Multiplayer VR game · Semester Project',
    summary: 'Dynamic difficulty that balances players through the environment · 24 players',
    bg: 'linear-gradient(160deg, var(--card-maze-chase-from) 0%, var(--card-maze-chase-to) 100%)',
    link: '#maze-chase',
  },
  {
    title: 'Dangers of Decibel: A VR experience about hearing loss',
    type: 'VR health experience · Semester Project',
    summary: 'Making hearing risk feel real · knowledge rose 4.6 points in the VR group',
    bg: 'linear-gradient(160deg, var(--card-decibel-from) 0%, var(--card-decibel-to) 100%)',
    link: '#dangers-of-decibel',
  },
];

// The scrolling strip under the front-page hero. Keep it to the roles in the hero.
export const roles = [
  'UX/UI Designer',
  'Product Designer',
  'Project Coordinator',
];
