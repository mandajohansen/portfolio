// All content for the Work tab lives here.
//
// image: put a file in /public/images and reference it as 'images/<file>'.
//        Leave it null to show a soft gradient placeholder instead.
//        No import line is needed (and one pointing to ../public will break the site).
// bg:    the soft background colour behind the image. The colours are set as
//        --card-...-from / --card-...-to at the top of src/index.css.
// link:  where the arrow button goes (case study URL, PDF, etc.).
// summary: one short sentence under the title: what it is and one result.
//        The details belong in the case study, so keep it to a single line on the card.
// wide:  the card sits full width above the other project cards.

export const experience = [
  {
    title: 'Digital Design Intern',
    subtitle: 'Relesys A/S',
    summary:
      'Designed and built branded apps for retail, hospitality and grocery clients.',
    tag: 'Mobile Application',
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
      'One app for news, shift handovers and know-how, built on my own and rated 79.4 on SUS.',
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
      'Listening exercises turned into a game the children preferred.',
    tag: 'Mobile Game',
    image: 'images/spyruncard.png',
    bg: 'linear-gradient(160deg, var(--card-spyrun-from) 0%, var(--card-spyrun-to) 100%)',
    link: '#spyrun',
  },

  {
    title: 'VR Driving Simulator: Traffic scenarios for learners',
    subtitle: 'Semester Project · Published paper',
    summary:
      'Driving theory you step into, rated 77.5 on SUS by learner drivers.',
    tag: 'VR Learning Tool',
    image: 'images/drivingcard.png',
    bg: 'linear-gradient(160deg, var(--card-vr-driving-from) 0%, var(--card-vr-driving-to) 100%)',
    link: '#vr-driving-simulator',
  },
];

// The "More projects" list under the cards: one line each, no picture.
// type: the small orange line under the title.
export const moreProjects = [
  {
    title: 'Digital Study Card: The university ID card as an app',
    type: 'Mobile app · Semester Project',
    summary: 'NFC campus access and clear room permissions in one app · all six students in the final test preferred it to their physical card',
    bg: 'linear-gradient(160deg, var(--card-study-card-from) 0%, var(--card-study-card-to) 100%)',
    link: '#digital-study-card',
  },
  {
    title: 'Pandas Fonologiske Lege: A speech-sound game for children',
    type: 'Tablet game · Bachelor’s Project',
    summary: 'Speech-sound training for kindergarten children · a speech therapist found it fit for beginner and intermediate training',
    bg: 'linear-gradient(160deg, var(--card-pandas-from) 0%, var(--card-pandas-to) 100%)',
    link: '#pandas-fonologiske-lege',
  },
  {
    title: 'Interactive Exhibit: A card-matching game at Thorvaldsens Museum',
    type: 'Museum installation · Semester Project',
    summary: 'Physical cards and computer vision for museum visitors · every visitor completed all the cards, two in three played in groups',
    bg: 'linear-gradient(160deg, var(--card-exhibit-from) 0%, var(--card-exhibit-to) 100%)',
    link: '#interactive-exhibit',
  },
  {
    title: 'Maze Chase: A multiplayer VR game',
    type: 'Multiplayer VR game · Semester Project',
    summary: 'A maze that rebuilds itself to balance players of different skill · outcomes evened out, but flow did not rise',
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
