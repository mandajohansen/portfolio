// All content for the Info page lives here.
//
// photo: put a file in /public/images and reference it as 'images/<file>'.
//        Leave it null to show a soft placeholder instead.
// icon:  one of the names in src/components/Icon.jsx.

export const about = {
  greeting: 'Hi, I’m',
  name: 'Amanda',
  subtitle: 'I design digital experiences that connect user needs, product thinking and practical implementation.', body: [
    'I’m a UX/UI and digital designer interested in turning complex needs into clear, thoughtful experiences across mobile and web. My work spans user research, interaction design, visual design, prototyping and development, and I enjoy projects where understanding people is just as important as designing the final interface.',
    'My interests span UX, UI, product and digital design, alongside project coordination and management in IT-focused teams. I’m especially drawn to work that makes everyday tasks easier, learning more engaging, or information easier to understand.',
  ],
  tags: ['UX/UI', 'Product design', 'Digital design', 'User research', 'Project coordination'],
  photo: 'images/Mig.jpg',
  //photoNote: ['Curious about people', '+ how things work'],
};

export const beyond = {
  label: 'A little more about me',
  title: 'Beyond the screen',
  items: [
    {
      icon: 'people',
      title: 'I like figuring things out',
      text: 'I enjoy taking complicated problems apart and finding a simpler structure.',
    },
    {
      icon: 'bulb',
      title: 'I design with people, not just for them',
      text: 'Research and testing are a natural part of how I work.',
    },
    {
      icon: 'leaf',
      title: 'I enjoy crossing disciplines',
      text: 'Design, research, prototyping and development often overlap in my projects.',
    },
  ],
};

export const experience = {
  label: 'Experience',
  title: ['Places where I’ve', 'learned, designed and built.'],
  items: [
    {
      years: 'Aug 2025 – Dec 2025',
      title: 'Digital Design Intern',
      place: 'Relesys A/S',
      text: 'Worked on new client app designs and improvements to existing applications within a shared SaaS platform. Created Figma prototypes, translated brand identities into mobile interfaces, worked in the CMS, implemented visual changes with CSS/LESS, tested responsive behavior, and collaborated with teams across Design, Client Success, Implementation, Solution Engineering and Sales.',
      tags: ['UX/UI', 'Figma', 'CMS', 'CSS/LESS', 'Responsive Design', 'Cross-functional Collaboration'],
    },
    {
      years: 'Sep 2024 – Jan 2025',
      title: 'Student Assistant',
      place: 'Aalborg University',
      text: 'Supported the course "Design af immersive oplevelser" for Medialogy students in Aalborg and Copenhagen. Answered questions about assignments and course concepts, provided feedback on submitted work, and graded four mandatory group assignments that students were required to pass before the exam.',
      tags: ['Teaching', 'Feedback', 'Grading', 'Communication', 'Course Support'],
    },
    {
      years: 'May 2022 – Sep 2026',
      title: 'Sales Assistant & Key Holder',
      place: 'Weekday',
      text: 'Worked in a fast-paced retail environment with a strong focus on customer experience, teamwork and daily store operations. Responsibilities included customer service, POS operation, restocking, unpacking and organizing merchandise, fitting-room management, and closing the store securely at the end of shifts.',
      tags: ['Customer Experience', 'Teamwork', 'POS', 'Stock Operations', 'Closing Responsibility'],
    },
    {
      years: 'Sep 2021 – Jun 2024',
      title: 'Tutor Coordinator',
      place: 'Aalborg University',
      text: 'Led and supported a tutor team responsible for welcoming new students. Coordinated tasks, organised events and social activities, managed and tracked the team budget, and supported both tutors and new students throughout the introduction period.', 
      tags: ['Coordination', 'Team Leadership', 'Event Planning', 'Budget Management', 'Communication'],
    },
    {
      years: 'May 2020 – Feb 2022',
      title: 'Sales Assistant & Key Holder',
      place: 'Søstrene Grene',
      text: 'Held responsibility for the daily presentation and operation of my assigned department, including visual merchandising, stock management and merchandise ordering. I also supported customers, maintained store standards, and took on additional responsibility when management was absent.',
      tags: ['Visual Merchandising', 'Merchandise Ordering', 'Stock Management', 'Customer Experience', 'Responsibility'],
    },
  ],
};

export const education = {
  label: 'Education',
  title: ['Where the foundation', 'came from.'],
  items: [
    {
      color: 'var(--edu-master)',
      degree: 'Master’s Degree',
      program: 'Medialogy',
      school: 'Aalborg University · 2024 – 2026',
      text: 'Focused on user-centered design, interaction design and digital products. My master’s thesis explored internal communication for non-desk retail workers, from research to an implemented mobile application.',
      tags: ['UX', 'Interaction Design', 'Research', 'Digital Development', 'User Centered Design'],
    },
    {
      color: 'var(--edu-bachelor)',
      degree: 'Bachelor’s Degree',
      program: 'Medialogy',
      school: 'Aalborg University · 2021 – 2024',
      text: 'Gained a broad understanding of digital design, technology and communication, including UX/UI design, user research, content creation and front-end development.',
      tags: ['UX', 'Interaction Design', 'Research', 'Digital Development', 'User Centered Design'],
    },
  ],
};

export const skills = {
  label: 'What I bring to a project',
  title: ['A mix of design, research', 'and development.'],
  groups: [
    {
      icon: 'pen',
      color: 'var(--skill-design)',
      title: 'Design',
      items: [
        'UX/UI Design',
        'Interaction Design',
        'Product & Experience Design',
        'Information Architecture',
        'Prototyping & Wireframing',
        'Visual Design',
        'Accessibility & Responsive Design',
      ],
    },
    {
      icon: 'people',
      color: 'var(--skill-research)',
      title: 'Research & Evaluation',
      items: [
        'User Research',
        'Interviews & Surveys',
        'User Flows',
        'Usability Testing',
        'Think-Aloud Testing',
        'A/B & Preference Testing',
        'Quantitative & Qualitative Evaluation',
        'Journey & Service Mapping',
      ],
    },
    {
      icon: 'code',
      color: 'var(--skill-tools)',
      title: 'Tools & Technology',
      items: [
        'Figma',
        'React Native · Expo · Firebase',
        'Unity · C#',
        'HTML · CSS · LESS',
        'GitHub',
        'Jira · Notion · Slack',
        'AI Tools · ChatGPT · Claude · Copilot',
      ],
    },
    {
      icon: 'bulb',
      color: 'var(--skill-methods)',
      title: 'Methods & Collaboration',
      items: [
        'User-Centered Design',
        'Design Thinking',
        'Iterative Design',
        'Gamification & Serious Games',
        'VR & Immersive Experiences',
        'Stakeholder Collaboration',
        'Project Coordination & Management',
        'Agile & Scrum',
      ],
    },
  ],
};

export const contact = {
  label: 'Let’s talk',
  title: 'Have a project, opportunity or interesting problem?',
  text: 'I’m always happy to hear about new opportunities, collaborations or simply have a conversation about design.',
  note: ['I promise I’m friendlier', 'than an email form.'],
  email: 'amanda-johansen@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/amandaljohansen/',
  resume: 'resume.pdf',
};

export const footerText = 'UX/UI and Digital designer.';
