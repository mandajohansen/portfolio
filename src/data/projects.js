// All content for the Work tab lives here.
//
// image: put a file in /public/images and reference it as 'images/<file>'.
//        Leave it null to show a soft gradient placeholder instead.
//        No import line is needed (and one pointing to ../public will break the site).
// bg:    the soft background colour behind the image. The colours are set as
//        --card-...-from / --card-...-to at the top of src/index.css.
// link:  where the arrow button goes (case study URL, PDF, etc.).

export const experience = [
  {
    title: 'Digital Design Intern',
    subtitle: 'Relesys A/S',
    tag: 'Mobile applications',
    image: 'images/Relesyscard.png',
    bg: 'linear-gradient(135deg, var(--card-relesys-from) 0%, var(--card-relesys-to) 100%)',
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
  },

  {
    title: 'SpyRun',
    subtitle: 'Semester Project',
    summary: 'Auditory training game for children with APD · SUS 82.73 · Published with Materiale Centeret',
    tag: 'Mobile Game',
    image: 'images/spyruncard.png',
    bg: 'linear-gradient(160deg, var(--card-spyrun-from) 0%, var(--card-spyrun-to) 100%)',
    link: '#spyrun',
  },

  {
    title: 'Pandas Fonologiske Lege',
    subtitle: 'Bachelors Project',
    summary: 'Phonological awareness training for kindergarten children, tested with real users',
    tag: 'Ipad Game',
    image: 'images/pandascard.png',
    bg: 'linear-gradient(160deg, var(--card-pandas-from) 0%, var(--card-pandas-to) 100%)',
    link: '#pandas-fonologiske-lege',
  },
  {
    title: 'Digital Study Card',
    subtitle: 'Semester Project',
    summary: 'The university study card as an app · 235 survey responses · 6/6 preferred it',
    tag: 'Mobile Application',
    image: 'images/digitalcardcard.png',
    bg: 'linear-gradient(160deg, var(--card-study-card-from) 0%, var(--card-study-card-to) 100%)',
    link: '#digital-study-card',
  },
  {
    title: 'VR Driving Simulator',
    subtitle: 'Semester Project',
    summary: 'Interactive traffic scenarios for driving theory students · SUS 77.5',
    tag: 'VR Simulator',
    image: 'images/drivingcard.png',
    bg: 'linear-gradient(160deg, var(--card-vr-driving-from) 0%, var(--card-vr-driving-to) 100%)',
    link: '#vr-driving-simulator',
  },
  {
    title: 'Interactive Exhibit',
    subtitle: 'Semester Project',
    summary: 'A social, physical-digital exhibit at Thorvaldsens Museum · 23 visitors tested it',
    tag: 'AR Experience',
    image: 'images/thorcard.png',
    bg: 'linear-gradient(160deg, var(--card-exhibit-from) 0%, var(--card-exhibit-to) 100%)',
    link: '#interactive-exhibit',
  },
  {
    title: 'Maze Chase',
    subtitle: 'Research Project',
    summary: 'Dynamic difficulty that balances players through the environment · 24 players',
    tag: 'VR Game',
    image: 'images/mazecard.png',
    bg: 'linear-gradient(160deg, var(--card-maze-chase-from) 0%, var(--card-maze-chase-to) 100%)',
    link: '#maze-chase',
  },
  {
    title: 'Dangers of Decibel',
    subtitle: 'Semester Project',
    summary: 'Making hearing risk feel real · knowledge rose 4.6 points in the VR group',
    tag: 'VR Experience',
    image: 'images/dangerscard.png',
    bg: 'linear-gradient(160deg, var(--card-decibel-from) 0%, var(--card-decibel-to) 100%)',
    link: '#dangers-of-decibel',
  },
];

export const roles = [
  'UX/UI Designer',
  'Digital Designer',
  'Interaction Designer',
  'Project Coordinator',
  'Product Designer',
];
