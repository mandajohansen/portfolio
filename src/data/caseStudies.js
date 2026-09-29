// Content for the case study pages. The key is the URL: #<key>.
//
// image: put a file in /public/images and reference it as '/images/<file>'.
//        Leave it null to show a soft placeholder instead.
//
// Each section has an id (used by the side menu), a `nav` label for the side
// menu, an optional image + caption (shown at the end of the section), and a
// list of blocks. Pictures left as null are simply not shown.
// Wrap words in **double stars** to make them bold, e.g. 'I used **think-aloud** tests.'
// Block types (see src/pages/CaseStudy.jsx):
//   text        { body, list?, after? }        paragraphs with an optional bullet list
//   cards       { items: [{ icon, title, text }] }
//   highlight   { label, text }                 peach box with a big italic statement
//   quote       { text }                        italic statement with an orange line
//   steps       { items: [{ step, label }] }    numbered process overview (no pictures)
//   subheading  { number?, title, image?, caption? }  image shows after that step's text
//   image       { image, caption? }             a picture anywhere in a section
//   choices     { label?, items: [{ title, text, image }] }
//   notes       { items: [{ title, text?, list?, color? }], numbered? }  title cards; color adds a dot, numbered adds 01, 02…
//   insights    { items: [{ title?, insight, decision, why, labels? }], labels?, columns? }  also: assumption, test, result; labels renames rows (per block or per item)
//   stages      { items: [{ title, meta?, text, list?, tags? }] }  numbered rounds on a timeline
//   flow        { label?, items: ['A', 'B'] or [{ title, text }] }
//   score       { score: { value, label, text }, outcomes: [{ icon, title, text }] }
//   metrics     { items: [{ value, text }], featured? }  first number is highlighted; featured: false turns that off

export const caseStudies = {
  'internal-communication': {
    title: ['From Fragmentation', 'to Centralization'],
    subtitle: 'Designing internal communication for non-desk retail workers',
    //meta: 'Master’s Thesis · UX/UI Design · User Research · Mobile Product Design · User-Centered Design · Interaction Design · Digital Development',
    intro: [
      'I designed and developed a **mobile-first internal communication platform for retail employees**, exploring how communication could become more structured, accessible, and relevant to employees with different responsibilities.',
      'The project went from initial user research and design exploration to a functional mobile application tested in a real retail environment.',
    ],
    heroImage: '/images/thesishero-crop.png',

    facts: [
      { icon: 'user', title: 'Role', text: 'UX Researcher, UX/UI Designer, Mobile Developer, Project Owner' },
      { icon: 'tools', title: 'Tools', text: 'Figma, React Native, Expo, Firebase' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'Interviews, thematic analysis, preference testing, think-aloud, SUS, diary study, DICAS',
      },
      { icon: 'pin', title: 'Context', text: 'Mobile application, individual project, Master’s Thesis, 2026' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who was I designing for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The project focused on **non-desk retail employees** whose work primarily takes place on the shop floor.',
              'I worked with nine employees across management, full-time, key-holder, and part-time roles.',
              'Research showed that **information needs varied by responsibility rather than job title alone**. Managers and key holders required broader operational information, while part-time employees prioritized information relevant to upcoming shifts.',
            ],
          },
          {
            type: 'cards',
            items: [
              { title: 'Managers', text: 'Responsible for distributing information and coordinating communication.' },
              { title: 'Full-time employees & key holders', text: 'Work across multiple areas and require broad operational information.' },
              { title: 'Part-time employees', text: 'Mainly wants information about upcoming shifts or operational information directly relevant to their next shift and role.' },
            ],
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How can one communication platform support different responsibilities without overwhelming employees with irrelevant information?',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'What problem was I solving?',
        image: '/images/combinedtoone.png',
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'My initial interviews showed that internal communication was **scattered across Messenger, email, verbal conversations, a whiteboard, printed documents, and the scheduling platform Tamigo.**',
              'Employees described several consequences:',
            ],
            list: [
              'Information was difficult to locate again;',
              'Messages were sometimes forgotten or misunderstood;',
              'Handovers were inconsistent and often rushed;',
              'Employees received different amounts of information depending on their hours and presence in the store;',
              'There was no shared place to verify what had previously been communicated.',
            ],

            after: [
              'Participants repeatedly expressed a desire to have relevant **communication and information in one place.**',
              'I therefore reframed the problem from simply “How do we improve communication?” to:',
            ],
          },
          {
            type: 'highlight',
            label: 'Problem',
            text: 'How might I create one structured communication environment that fits the fast, mobile and role-dependent reality of retail work?',
          },
          {
            type: 'quote',
            text: 'The goal was not to replace face-to-face communication, but to create a persistent digital reference point around it.',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'I led the project from **research through design, development, and evaluation**.',
              'My work included user research, literature and competitor research, information architecture, UX/UI design, prototyping, usability testing, qualitative and quantitative analysis, and mobile development.',
              'This included:',
            ],
            list: [
              'Interviews with retail employees resulting in analysed communication behaviours and pain points;',
              'Translated findings into design requirements;',
              'Explored alternative information architectures and interface concepts;',
              'Created low- and high-fidelity prototypes in Figma;',
              'Evaluated competing designs with users before committing to one direction;',
              'Designed role-specific content and navigation;',
              'Developed the application using React Native and Expo, with Firebase supporting backend/data management;',
              'Conducted usability and real-world acceptance evaluations.',
            ],
            after:
              'The final application included areas such as news, shift handovers, peer knowledge, a knowledge bank, schedules, chat, contacts and role-based content. **To create an all-in-one communication environment**',
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'My design approach',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 'Discover', label: 'User research' },
              { step: 'Define', label: 'Requirements' },
              { step: 'Explore', label: 'Concepts' },
              { step: 'Design', label: 'Context-driven UI' },
              { step: 'Test', label: 'Evaluation' },
            ],
          },

          { type: 'subheading', number: 1, title: 'Discover', image: null, caption: 'Placeholder – swap for a picture of this step' },
          {
            type: 'text',
            body: [
              'I started by understanding how communication actually happened in the store rather than assuming what employees needed.',
              'Semi-structured interviews revealed a fragmented communication ecosystem characterized by **information loss, inconsistent handovers, and varying information needs**.',
              'The research also revealed that job titles alone were not enough to design around. Employees with similar titles could have very different responsibilities, working hours and information needs.',
              'That insight became one of the central principles behind the product:',
            ],
          },
          {
            type: 'quote',
            text: 'Show users information according to the work they actually perform.',
          },

          { type: 'subheading', number: 2, title: 'Define', image: null, caption: 'Placeholder – swap for a picture of this step' },
          {
            type: 'text',
            body: 'I translated the research into a set of design requirements. The platform needed to be:',
          },
          {
            type: 'notes',
            items: [
              { title: 'Mobile-first', text: 'Employees spend their shifts moving around the shop floor rather than sitting at computers.' },
              { title: 'Centralized', text: 'Communication and knowledge should be easier to locate instead of spread across multiple channels.' },
              { title: 'Role-appropriate', text: 'Employees should receive information relevant to their responsibilities.' },
              { title: 'Structured and searchable', text: 'Important knowledge should remain accessible and easy to access.' },
              { title: 'Two-way', text: 'Employees should be able to contribute knowledge rather than only receive top-down communication.' },
              { title: 'Integrated with existing workflows', text: 'The goal was not to replace everything employees already used successfully.' },
            ],
          },

          { type: 'subheading', number: 3, title: 'Explore', image: null, caption: null, },
          {
            type: 'text',
            body: [
              'Rather than validating a single predetermined design, I developed multiple interface concepts and involved users in selecting the direction.',
              'I started with low-fidelity sketches before developing higher-fidelity concepts in Figma. For the home screen alone, I explored three different approaches:',
            ],
          },
          {
            type: 'choices',
            label: 'Three home screen directions',
            items: [
              {
                title: 'A - Navigation-first',
                text: 'A tile-based dashboard focused on quickly getting users to a specific destination.',
                image: '/images/designa.png',
              },
              {
                title: 'B - Hybrid',
                text: 'A combination of recent information and structured navigation.',
                image: '/images/designb.png',
                chosen: true,
              },
              {
                title: 'C - Content-first',
                text: 'A social-feed-inspired experience emphasizing the latest updates across differnet pages.',
                image: '/images/designc.png',
              },
            ],
          },
          {
            type: 'text',
            body: 'I also explored three alternative designs for **the handover form, which was a key feature of the product.** The handover form was a structured way to communicate important information between shifts, and it needed to be both easy to use and effective in conveying critical details.',
          },
          {
            type: 'choices',
            label: 'Three handover form designs',
            items: [
              {
                title: 'A - Minimalist',
                text: 'A simple, clean interface with minimal distractions, focusing on the essential information needed for handovers. Where the user can write what ever they find important to report',
                image: '/images/Form iphone 1.png',
              },
              {
                title: 'B - Hybrid',
                text: 'This design combines elements of both the minimalist and codified approaches, providing a balance between simplicity and structure. It includes predefined fields for key information while still allowing users to add custom notes.',
                image: '/images/Form iphone 2.png',
              },
              {
                title: 'C - Codified',
                text: 'A structured form with predefined fields and categories, guiding users to provide specific information in a consistent format. This approach aims to standardize handovers and ensure that critical details are not overlooked.',
                image: '/images/Form iphone 3.png',
                chosen: true,
              },
            ],
          },
          {
            type: 'text',
            body: ['Instead of simply asking users which screen looked nicest, I evaluated the alternatives on factors including visual appeal, professionalism, first-glance understanding, personal preference and descriptive emotional qualities.',
              'That feedback directly shaped the final product.',
            ],
          },
          {
            type: 'highlight',
            label: 'Key design decision',
            text: 'The research supported a tile-based navigation structure for general browsing, while users preferred a more structured and codified interface for shift handovers.',
          },

          { type: 'subheading', number: 4, title: 'Design for context, not just aesthetics', image: null, caption: null, },
          {
            type: 'text',
            body: [
              'Several interface decisions came directly from the working environment.',
              'For example, the home screen included the user’s next shifts because scheduling was relevant across employee groups.',
              'Navigation remained consistently available so primary areas were only a tap away, while recognizable icons were paired with labels rather than relying on abstract iconography.',
              'I also introduced:',
            ],
          },
          {
            type: 'choices',
            label: 'Key design choices',
            items: [
              {
                title: 'Role-based content',
                text: 'A manager, key holder and part-time employee did not necessarily receive the same information.',
                image: '/images/Android frontpage.png',
              },
              {
                title: 'Tags and filters',
                text: 'Content could communicate both its topic and intended audience.',
                image: 'images/Android search.png',
              },
              {
                title: 'Must Read confirmations',
                text: 'Important communication could require an active acknowledgement rather than relying on passive message delivery.',
                image: '/images/Android not confirmed.png',
              },
              {
                title: 'Structured handovers',
                text: 'Instead of relying entirely on verbal memory, handover information could be categorized and preserved.',
                image: '/images/Android handovers ex.png',
              },
              {
                title: 'Knowledge Bank',
                text: 'Procedures and persistent information were separated from time-sensitive communication.',
                image: '/images/Android Knowledge.png',
              },
              {
                title: 'Peer-to-peer knowledge',
                text: 'For employees to employees to share knowledge and tips, rather than relying on top-down communication.',
                image: '/images/Android peerknowledge.png',
              },
            ],
          },
          {
            type: 'text',
            body: 'Together, these decisions positioned the product as more than a messaging application: **an information architecture for everyday retail work**.',
          },

          { type: 'subheading', number: 5, title: 'Test, learn and iterate', image: null, caption: 'Placeholder – swap for a picture of this step' },
          {
            type: 'text',
            body: [
              'Testing occurred throughout the project rather than only after the finished product.',
              'The study used a user-centered, iterative approach structured around the Double Diamond, moving from discovery and definition into development and delivery. I used three major evaluation stages:',
            ],
          },
          {
            type: 'notes',
            numbered: true,
            items: [
              {
                title: 'Preference testing',
                text: '11 employees evaluated alternative interface directions before the final design was selected.',
              },
              {
                title: 'Usability testing',
                text: 'Employees completed realistic tasks while thinking aloud, followed by the System Usability Scale and interviews. Tasks included locating information, confirming must-read communication, creating posts, creating handovers and finding schedules.',
              },
              {
                title: 'Field evaluation',
                text: 'Participants used the application during a five-day test period. Diary entries, interviews and the Digital Communication Acceptance Scale were used to understand how the system might fit into everyday work.',
              },
            ],
          },
          {
            type: 'flow',
            label: 'The full process',
            items: [
              'Research',
              'Requirements',
              'Alternatives',
              'User preference',
              'Prototype',
              'Implementation',
              'Usability',
              'Real-world evaluation',
            ],
          },
        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Results',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The final prototype achieved a System Usability Scale score of 79.4, placing it approximately in the 85th–89th percentile compared with the referenced benchmark.',
              'The acceptance evaluation also showed high scores across the dimensions of the Digital Internal Communication Acceptance Scale, with users reporting  **low communication apprehension and positive perceptions of interaction facilitation** ',
              'Participants also recognized the product as addressing issues identified during the initial research, with **shift handovers receiving particularly strong support**.',
            ],
          },
          { type: 'subheading', title: 'Outcome', image: null, caption: '' },
          {
            type: 'metrics',
            items: [
              { value: '79.4', text: 'SUS score: high perceived usability.' },
              {
                value: 'User-informed',
                text: 'Key interface decisions were based on employee evaluation rather than designer assumptions.',
              },
              {
                value: 'Fragmented → centralized',
                text: 'Communication, knowledge, schedules, and handovers consolidated into one environment.',
              },
              {
                value: 'Generic → role-relevant',
                text: 'Information could be adapted to employees’ responsibilities and everyday work.',
              },
              {
                value: 'Memory → traceability',
                text: 'Important communication remained accessible beyond verbal exchanges.',
              },
            ],
          },
        ],
      },
    ],
  },

  'pandas-fonologiske-lege': {
    title: ['From Repetition', 'to Play'],
    subtitle: 'Designing a serious game for phonological awareness training in kindergarten children',
    intro: [
      'We designed and developed a tablet-based serious game exploring how gamification could support phonological awareness training for kindergarten children with phonological difficulties.',
      'The project combined speech and language research with user-centered design, iterative usability testing, expert feedback, and game development.',
    ],
    heroImage: '/images/pandashero.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX Research, Interaction Design, Game Design, User Testing, Stakeholder Collaboration, Data Analysis',
      },
      { icon: 'tools', title: 'Tools', text: 'Unity, C#' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'User-centered design, interviews, observation, talk-aloud, usability testing, iterative design',
      },
      { icon: 'pin', title: 'Context', text: 'Tablet serious game, five-person group, Bachelor Project' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who were we designing for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The primary target group was **kindergarten children with phonological difficulties**, particularly children struggling with phonemic awareness.',
              'Research suggested that early intervention is especially relevant before or around the beginning of school, when children are developing awareness of letters, sounds, and spoken language. The project therefore focused on children in kindergarten with phonological difficulties.',
              'Speech therapists and parents formed a secondary user group because children at this age often require guidance during training.', 'We therefore had to design for two very different needs:',
            ],
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Children',
                text: 'Needed something simple, playful, understandable, and motivating.',
              },
              {
                icon: 'chat',
                title: 'Speech therapists',
                text: 'Needed exercises that made sense from a phonological training perspective.',
              },
              {
                title: 'Parents',
                text: 'Guide and support children while they train.',
              },
            ],
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How can we transform repetitive phonological exercises into something engaging for young children without losing the training purpose of the exercises?',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'What problem were we solving?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'Phonological awareness describes the ability to recognize and work with the sounds that make up spoken language.',
              'Difficulties in this area can later contribute to reading and writing problems, and the research behind the project emphasized the value of early intervention.',
              'However, the experts we interviewed highlighted another challenge:',
            ],
          },
          {
            type: 'quote',
            text: 'Training requires repetition, but repetition can easily become boring for children.',
          },
          {
            type: 'text',
            body: [
              'Four speech and language specialists were interviewed during the initial research. Their feedback helped us understand how phonological exercises are used in practice and what a digital tool would have to consider.',
              'One recurring insight was that **a digital solution should be engaging enough that children want to participate, while still requiring them to actually listen and discriminate between sounds instead of simply guessing**.',
            ],
          },
          {
            type: 'highlight',
            label: 'Research question',
            text: 'Can a serious game developed through a user-centered design process entertain and support phonological-awareness training for kindergarten children, with a focus on phonemic and receptive skills?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'This was a five-person bachelor project. My work focused on **research, interaction design, user testing, stakeholder communication, and data analysis**.',
              'I contributed throughout the process from initial research to final evaluation.',
            ],
            list: [
              'Researching phonological awareness and serious games;',
              'Interviewing speech and language specialists;',
              'Translating expert insights into design requirements;',
              'Contributing to the game concept and interaction design;',
              'Designing exercises and gameplay around phonemic listening;',
              'Testing prototypes with kindergarten children;',
              'Observing behaviour and identifying usability problems;',
              'Analysing qualitative testing data;',
              'Iterating the product based on both children and expert feedback;',
              'Contributing to the implementation and final evaluation.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'My design approach',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 'Understand', label: 'Research' },
              { step: 'Gameplay', label: 'Concept' },
              { step: 'Design', label: 'Child-centred UI' },
              { step: 'Test', label: 'Usability tests' },
              { step: 'Learn', label: 'Iteration 1' },
              { step: 'Iterate', label: 'Expert feedback' },
            ],
          },

          { type: 'subheading', number: 1, title: 'Understand the problem', image: '/images/MenuScene.png', caption: null, },
          {
            type: 'text',
            body: [
              'We began with literature research and interviews with four specialists in audiologopedics. Their feedback revealed several important constraints.',
              'The game should focus primarily on **receptive listening exercises**, because pronunciation exercises generally require a trained person to hear whether the child pronounces sounds correctly.',
              'The experts also warned that the product should not allow children to progress simply by guessing, because that would undermine the training objective.',
              'From the research we translated our findings into design requirements including:',
            ],
            list: [
              'Tablet-based interaction;',
              'Child involvement throughout development;',
              'Receptive phonological exercises;',
              'Exercises related to fronting and backing;',
              'Simple interactions and objectives;',
              'Visual and auditory representations of sounds;',
              'Gamified interpretations of existing exercises;',
              'Interaction design appropriate for young children;',
              'Avoiding mechanics that reward random guessing.',
            ],
            after: 'That gave us a useful design principle:',
          },
          {
            type: 'quote',
            text: 'The game had to be entertaining enough to encourage repetition, but structured enough that listening remained necessary to succeed.',
          },

          { type: 'subheading', number: 2, title: 'Turn exercises into gameplay', image: null, caption: null },
          {
            type: 'text',
            body: [
              'Instead of presenting children with traditional exercise sheets, **we transformed phonological exercises into short game mechanics.**',
              'The concept became an animal-themed world guided by a panda character who introduces the different tasks and encourages the player. We designed three core types of interaction.',
            ],
          },
          {
            type: 'choices',
            label: 'Three core interactions',
            wide: true,
            items: [
              {
                title: 'Sound Candy',
                text: 'Children listen to a sound or nonsense word and drag a piece of “sound candy” to the animal associated with the corresponding phoneme. Simple, visual, and suitable for touchscreens and small hands.',
                image: 'images/Bane1Iteration2.png',
              },
              {
                title: 'Sound Selection',
                text: 'Children listen to a sound and navigate between animals to select the one representing the correct phoneme.',
                image: 'images/Level 2 - Iteration3.png',
              },
              {
                title: 'Sound Puzzle',
                text: 'Children listen to a sound and identify the matching animal within a visual grid.',
                image: 'images/iteration3level3.png',
              },
            ],
          },
          {
            type: 'text',
            body: 'Recurring characters and sound associations were maintained across levels to support **recognition rather than relearning**.',
          },

          { type: 'subheading', number: 3, title: 'Design specifically for children', image: null, caption: null },
          {
            type: 'text',
            body: 'Designing for children changed many normal UX assumptions. We deliberately reduced interface complexity by using:',
          },
          {
            type: 'notes',
            items: [
              { title: 'Large interactive elements', text: 'Buttons and draggable objects needed to be easy for small hands to manipulate.' },
              { title: 'Visual + auditory feedback', text: 'Children could both see and hear the result of their actions.' },
              { title: 'Recognition over recall', text: 'Recurring characters and consistent layouts reduced memory demands.' },
              { title: 'Minimal interface clutter', text: 'Only elements necessary for the current task were emphasized.' },
              { title: 'Consistent interactions', text: 'Navigation, feedback, and recurring characters behaved similarly between levels.' },
            ],
          },
          {
            type: 'text',
            body: 'These choices were grounded in interaction-design principles and guidelines for serious games for young children, including reducing cognitive load, avoiding clutter, making interaction elements easy to identify, and favouring recognition over remembering.',
          },

          { type: 'subheading', number: 4, title: 'Test with the actual users', image: null, caption: null, },
          {
            type: 'text',
            body: [
              'We conducted a pilot study and two rounds of formative usability testing with kindergarten children.',
              'The testing focused on behaviours such as:',
            ],
            list: [
              'Whether children understood the instructions;',
              'Whether interactions were understandable;',
              'Whether they understood the icons;',
              'Where they became confused;',
              'Where they became disengaged;',
              'Whether they completed exercises by understanding them or guessing.',
            ],
            after: [
              'The formal usability study involved children aged approximately three to six from two Copenhagen kindergartens.',
              'We relied heavily on **behavioural observation**, because children sometimes reported that tasks were easy even when their behaviour indicated difficulty.',
            ],
          },

          { type: 'subheading', number: 5, title: 'What failed in Iteration 1?', image: null, caption: null, },
          {
            type: 'text',
            body: ['The first round revealed several problems.', 'Children frequently:'],
            list: [
              'Skipped or interrupted instructions;',
              'Struggled to understand why answers were correct;',
              'Guessed until they succeeded;',
              'Became frustrated when levels took too long;',
              'Had difficulty accurately tapping smaller elements;',
              'Understood the physical interaction but not necessarily the phonological goal.',
            ],
          },
          {
            type: 'insights',
            items: [
              {
                insight: 'Children frequently tapped around during instructions and accidentally interrupted them.',
                decision: 'We introduced interaction constraints while instructions played.',
                why: 'Children needed to receive the necessary information before interacting with the level.',
              },
              {
                insight: 'Some interactive elements were too small.',
                decision: 'We enlarged characters and their interaction areas.',
                why: 'The design needed to accommodate younger users with less precise touchscreen interaction.',
              },
              {
                insight: 'Children often forgot what they were supposed to do.',
                decision: 'The panda became a permanent, tappable helper that could replay instructions.',
                why: 'Instead of requiring children to remember instructions, help became available directly in the interface.',
              },
              {
                insight: 'The original difficulty level was too high.',
                decision: 'We introduced simpler levels based on matching individual phonemes before progressing to nonsense words.',
                why: 'The progression could now move from a simpler phonemic task toward more complex sound discrimination.',
              },
            ],
          },
          {
            type: 'text',
            body: 'These changes are clearly visible between the first and second design iterations.',
          },

          { type: 'subheading', number: 6, title: 'Iterate with both users and experts', image: null, caption: null, },
          {
            type: 'text',
            body: [
              'Children’s usability findings were combined with feedback from a speech therapist.',
              'Children revealed whether the interface worked; the specialist evaluated whether the **training logic and difficulty progression** were appropriate.',
              'Expert feedback supported the phoneme-to-nonsense-word concept but recommended a clearer progression in difficulty.',
            ],
          },
          {
            type: 'flow',
            items: [
              { title: 'Levels 1–3', text: 'Matching and recognizing individual phonemic sounds.' },
              { title: 'Levels 4–6', text: 'Applying those sounds within nonsense words.' },
            ],
          },
          {
            type: 'text',
            body: [
              'The expert considered this progression from phonemic exercises to nonsense-word exercises appropriate.',
              'The structure of the final product wasn’t arbitrary:',
            ],
          },
          {
            type: 'flow',
            items: ['Research insight', 'Expert feedback', 'Difficulty progression', 'Final architecture'],
          },

          { type: 'subheading', title: 'The final product', image: null, caption: null, },
          {
            type: 'text',
            body: [
              'The final tablet application contained **six levels across three gameplay mechanics**, each presented at two levels of phonological difficulty.',
              'The panda acted as a recurring guide, while consistent animal characters represented phonemes throughout the experience.',
            ],
          },
          {
            type: 'flow',
            items: ['Menu', 'Level Selection', 'Game', 'Completion'],
          },
          {
            type: 'text',
            body: 'Players could replay levels, continue to the next level, pause, restart, or return to the menu. The structure balanced user freedom with consistency and familiarity.',
          },
          {
            type: 'choices',
            label: 'Level 1-3',
            wide: true,
            items: [
              {
                title: 'Level 1: Sound Candy',
                text: 'Children listen to a sound or nonsense word and drag a piece of “sound candy” to the animal associated with the corresponding phoneme. Simple, visual, and suitable for touchscreens and small hands.',
                image: '/images/Bane1Iteration2.png',
              },
              {
                title: 'Level 2: Sound Selection',
                text: 'Children listen to a sound and navigate between animals to select the one representing the correct phoneme.',
                image: '/images/Level 2 - Iteration3.png',
              },
              {
                title: 'Level 3: Sound Puzzle',
                text: 'Children listen to a sound and identify the matching animal within a visual grid.',
                image: '/images/iteration3level3.png',
              },
            ],

          },

          {
            type: 'choices',
            label: 'Level 4-6',
            wide: true,
            items: [
              {
                title: 'Level 4: Sound Candy',
                text: 'Children listen to a sound or nonsense word and drag a piece of “sound candy” to the animal associated with the corresponding phoneme. Simple, visual, and suitable for touchscreens and small hands.',
                image: '/images/Bane4Iteration2.png',
              },
              {
                title: 'Level 5: Sound Selection',
                text: 'Children listen to a sound and navigate between animals to select the one representing the correct phoneme.',
                image: '/images/Level 5 - Iteration3.png',
              },
              {
                title: 'Level 6: Sound Puzzle',
                text: 'Children listen to a sound and identify the matching animal within a visual grid.',
                image: '/images/level6.png',
              },
            ],

          },
        ],
      },

      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Final evaluation',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: 'The final evaluation examined both **engagement** and **phonological relevance**.',
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Was it engaging?',
                text: [
                  'The final test included two four-year-old children with phonological difficulties.',
                  'Both selected the **highest rating on the project’s Smileyometer** both before and after playing, and both said they would like to play the game again.',
                  'Behavioural observations suggested particularly strong engagement from one participant, while the second showed reduced engagement when interactions became repetitive or unclear.',
                  'Because only two children participated in this final evaluation, we treated these results as promising rather than conclusive.',
                ],
              },
              {
                title: 'Could it support phonological training?',
                text: [
                  'The speech therapist concluded that the exercises clearly targeted receptive fronting and backing and were appropriate for beginner and intermediate training.',
                  'The expert also highlighted the product’s specialization as a strength while noting that adult guidance could still support children in understanding what to listen for.',
                ],
              },
            ],
          },
          {
            type: 'text',
            body: 'The findings supported the game as a **supplement to existing phonological training**, rather than a replacement for speech therapists or parent involvement.',
          },
          { type: 'subheading', title: 'Key outcomes', image: null, caption: '' },
          {
            type: 'metrics',
            items: [
              { value: '3 → 6', text: 'Core levels expanded into a structured two-stage difficulty progression.' },
              { value: 'Multiple iterations', text: 'Testing findings directly changed interaction, instructions, difficulty and UI.' },
              { value: 'Real users', text: 'The game was repeatedly tested with kindergarten children during development.' },
              { value: 'Expert-guided', text: 'Speech-therapy expertise shaped both the exercises and final evaluation.' },
              { value: '“Play again”', text: 'Both children in the final target-group test said they wanted to play again.' },
            ],
          },
        ],
      },
    ],
  },

  'digital-study-card': {
    title: ['From Campus Card', 'to Student Companion'],
    subtitle: 'Reimagining the physical university study card as a mobile experience',
    //meta: '2nd Semester Project · UX/UI Design · User Research · Mobile Application · 2022',
    intro: [
      'We explored how the physical AAU study card could become a digital product without sacrificing the speed and simplicity students already relied on.',
      'The final concept combined identification, NFC campus access, room permissions, student discounts, and university information in one mobile experience.',
    ],
    heroImage: '/images/studycardhero.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX Research, UX/UI Design, Usability Testing, Product Design, Project Coordination, Data Analysis',
      },
      { icon: 'tools', title: 'Tools', text: 'Figma, Unity, NFC' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'Interviews, surveys, focus groups, personas, think-aloud, PSSUQ, SUS',
      },
      { icon: 'pin', title: 'Context', text: 'Mobile application, seven-person group, 2nd Semester Project, 2022' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who was it for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The primary users were **students at Aalborg University Copenhagen**.',
              'Initial stakeholder research included students, university staff, and administration, but students emerged as the primary target because they used the study card most frequently and across the widest range of situations.',
            ],
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Campus access',
                text: 'Students used the card to enter university buildings and rooms.',
              },
              {
                title: 'Identification',
                text: 'The card provided student identification and student-number access.',
              },
              {
                title: 'Student services',
                text: 'It supported printing, facilities, and external student discounts.',
              },
            ],
          },
          {
            type: 'highlight',
            label: 'Core user need',
            text: 'Any digital replacement had to remain as fast and reliable as the physical card while providing additional value.',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'What problem were we solving?',
        image: '/images/digitalcardsketch.png',
        caption: 'Initial Design sketches exploring how a digital study card could be more than a copy of the physical card.',
        blocks: [
          {
            type: 'text',
            body: [
              'The physical study card already performed its primary task well: students could take it out, scan it, and enter.',
              'Research nevertheless revealed recurring **frustrations around forgotten cards, unclear room permissions, missing access, student information, and fragmented university services.**',
            ]
          },
          {
            type: 'quote',
            text: 'A digital version could not simply be a copy of the physical card.',
          },
          {
            type: 'text',
            body: [
              'If opening the app took longer than pulling a card from a wallet, students would have little reason to use it. This became especially clear in the focus group, where NFC campus access was ranked as the highest-priority functionality, and participants emphasized that digital access needed to be at least as efficient as the physical card.',
            ],
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How might we make a digital study card more convenient than the physical card without making everyday campus access slower or more complicated?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: '/images/studycardinitial.png',
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'As part of a seven-person team, I contributed across **research, product definition, interaction design, prototyping, and usability evaluation**.',
            ],
            list: [
              'Investigated student needs through interviews, survey research, and a focus group;',
              'Translated research into product and interaction requirements;',
              'Developed user flows, sketches, and interface concepts;',
              'Prototyped the mobile experience in Figma;',
              'Contributed to the interactive implementation;',
              'Conducted think-aloud and task-based usability testing;',
              'Analysed qualitative and quantitative usability findings;',
              'Iterated the interface across three design cycles.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How did we approach the problem?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 'Research', label: 'Understand the problem' },
              { step: 'Prioritize', label: 'Define value' },
              { step: 'Define', label: 'Requirements' },
              { step: 'Design', label: 'Core experience' },
              { step: 'Extend', label: 'Digital capabilities' },
              { step: 'Test', label: 'Evaluate & iterate' },
            ],
          },

          // 1 — RESEARCH
          {
            type: 'subheading',
            number: 1,
            title: 'Understand what was worth digitizing',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We began by questioning whether replacing the physical study card with an app would create meaningful value at all.',
              'Interviews with students, staff, and administration were followed by a broader student survey with **235 responses**.',
              'The research revealed an important tension: students were familiar with digital cards, but digitization alone was not enough to make them prefer one.',
            ],
          },
          {
            type: 'insights',
            labels: { decision: 'Design implication' },
            items: [
              {
                insight: 'Students were comfortable with digital cards but did not automatically prefer them.',
                decision: 'The digital product needed to offer more than a reproduction of the physical card.',
                why: 'Changing an established behaviour required clear additional value.',
              },
            ],
          },

          // 2 — PRIORITIZE
          {
            type: 'subheading',
            number: 2,
            title: 'Define where digital could add value',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'A focus group helped us prioritize which capabilities could make the digital experience more useful than the existing card.',
              '**NFC campus access emerged as the highest priority**, followed by room permissions, student information, discounts, and university services.',
            ],
          },
          {
            type: 'flow',
            label: 'Product shift',
            items: [
              'Digital copy of the card',
              'Campus access + student services',
              'Digital student companion',
            ],
          },

          // 3 — REQUIREMENTS
          {
            type: 'subheading',
            number: 3,
            title: 'Turn research into product requirements',
            image: '/images/digitalcardjourney.png',
            caption: 'User journey mapping helped us identify pain points and opportunities for a digital study card.',
          },
          {
            type: 'text',
            body: [
              'The research gave us a clear direction: preserve the speed of the physical card while using digital capabilities to solve additional student needs.',
              'We translated that direction into a focused set of functional and usability requirements.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Quick access',
                text: 'The digital study card should be immediately available for everyday campus entry.',
              },
              {
                title: 'NFC campus entry',
                text: 'Students should be able to use their phone for building and room access.',
              },
              {
                title: 'Room permissions',
                text: 'Students should be able to see which spaces they can access before reaching the door.',
              },
              {
                title: 'Request access',
                text: 'Missing permissions should be actionable directly from the application.',
              },
              {
                title: 'Student services',
                text: 'Discounts and relevant university information should be accessible within the same experience.',
              },
            ],
          },
          {
            type: 'highlight',
            label: 'Design principle',
            text: 'Preserve what already worked, then use digital capabilities to add value the physical card could not provide.',
          },

          // 4 — CORE EXPERIENCE
          {
            type: 'subheading',
            number: 4,
            title: 'Preserve the fastest interaction',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The physical study card already performed its primary task efficiently: take it out, scan it, and enter.',
              'A digital replacement could not turn that interaction into a multi-step flow, so the card remained immediately accessible from the main screen with NFC as the primary interaction.',
            ],
          },
          {
            type: 'flow',
            label: 'Existing behaviour',
            items: ['Take card', 'Scan', 'Enter'],
          },
          {
            type: 'text',
            body: [
              'We also borrowed familiar patterns from digital wallets, mobile ID applications, and existing student products rather than introducing unnecessary new conventions.',
            ],
          },
          {
            type: 'insights',
            items: [
              {
                insight: 'Students already understood digital wallets and mobile identification patterns.',
                decision: 'Use familiar navigation, card layouts, icons, and scanning conventions.',
                why: 'Familiarity reduced the learning required for an interaction students performed frequently.',
              },
            ],
          },

          // 5 — DIGITAL VALUE
          {
            type: 'subheading',
            number: 5,
            title: 'Add what the physical card could not',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The strongest opportunities came from capabilities unavailable on the physical card.',
              'Room access was one example: instead of discovering missing permissions at a locked door, students could see their access status beforehand and request access directly.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Access',
                text: 'The room can be entered.',
                color: '#7cc47f',
              },
              {
                title: 'Can be requested',
                text: 'Access can be requested directly from the application.',
                color: '#f2c94c',
              },
              {
                title: 'No access',
                text: 'The room cannot currently be entered.',
                color: '#e57373',
              },
            ],
          },
          {
            type: 'text',
            body: 'The colour system reflected AAU’s existing physical access system, preserving a familiar mental model while making permissions visible before students reached the door.',
          },
          {
            type: 'flow',
            label: 'Existing experience',
            items: ['Try door', 'Access denied', 'Find support', 'Request access'],
          },
          {
            type: 'flow',
            label: 'Proposed experience',
            items: ['Check access', 'Request if needed'],
          },

          // 6 — TEST + ITERATE
          {
            type: 'subheading',
            number: 6,
            title: 'Test assumptions and redesign',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The first prototype was tested with six AAU students using think-aloud testing, task completion, efficiency measurements, and semi-structured interviews.',
              'Testing exposed several assumptions that did not hold up in use. The next iteration therefore changed terminology, feedback, navigation, and interaction guidance rather than simply refining the visuals.',
            ],
          },
          {
            type: 'insights',
            labels: { decision: 'Change' },
            items: [
              {
                insight: '“Adgang” (Access) was ambiguous.',
                decision: 'Rename the section “Lokaler” (Rooms) and revise the icon.',
                why: 'The navigation now reflected what students were actually looking for.',
              },
              {
                insight: 'Scanning feedback was easy to overlook.',
                decision: 'Introduce larger, colour-coded feedback with animation.',
                why: 'System status needed to be immediately visible during a fast interaction.',
              },
              {
                insight: 'Students struggled to understand how to request access.',
                decision: 'Place the request action directly within the limited-access message.',
                why: 'The next action became available at the point where the problem occurred.',
              },
              {
                insight: 'The NFC symbol did not clearly communicate the interaction.',
                decision: 'Replace it with an animation showing a phone moving toward a scanner.',
                why: 'Demonstrating the interaction was clearer than relying on icon interpretation.',
              },
              {
                insight: 'Students were not always sure how functionality worked.',
                decision: 'Add a Help & Support section.',
                why: 'Users needed a clear recovery path instead of relying on trial and error.',
              },
            ],
          },
        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'What did the project achieve?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The second iteration showed a measurable improvement in navigation efficiency. In the first iteration, only one participant consistently reached the optimal click count across tasks. In the second iteration, 4 out of 6 participants achieved the optimal number of clicks across the first five tasks, suggesting improved efficiency after the redesign.',
              'The PSSUQ evaluation was also positive. The average score for system usefulness was 6.28/7, while the information and interface categories also averaged above 6. The sample of six participants was too small to treat these numbers as representative of the whole student population.',
              'The interviews supported those findings: participants commonly described the application as easy, fast and straightforward, and users recognised familiar navigation and visual patterns from other mobile applications.',
              'Perhaps the most meaningful product result was this:',
            ],
          },
          {
            type: 'quote',
            text: 'All six participants in the second iteration said they would use and prefer the digital study card over the physical card.',
          },
          {
            type: 'text',
            body: 'That doesn’t prove all AAU students would prefer it, but it does show that the tested concept was moving toward the project’s intended experience.',
          },
          { type: 'subheading', title: 'Key outcomes', image: null, caption: '' },
          {
            type: 'metrics',
            items: [
              { value: '235', text: 'Survey responses. A larger quantitative study helped validate early interview findings.' },
              {
                value: '3 iterations',
                text: 'Research → test → improve → test again. The design evolved based on observed user behaviour rather than only visual preference.',
              },
              {
                value: '4/6',
                text: 'Reached optimal task efficiency across the first five tasks in the second iteration.',
              },
              {
                value: '6.28 / 7',
                text: 'System usefulness. Positive PSSUQ results, while acknowledging the limited sample size.',
              },
              {
                value: '6/6',
                text: 'Preferred the digital concept: all second-iteration participants said they would use it over the physical card.',
              },
            ],
          },
        ],
      },

    ],
  },

  'vr-driving-simulator': {
    title: ['From Theory', 'to Experience'],
    subtitle: 'Bringing movement and orientation into driving theory through VR',
    //meta: '5th Semester Project · VR · Interaction Design · UX Research · Learning Experience · 2023',
    intro: [
      'We designed and developed a VR driving-theory simulator exploring how immersive scenarios could help learner drivers understand concepts that are difficult to communicate through static images.',
      'The experience placed users inside traffic situations where they had to observe, orient themselves, make decisions, and receive feedback.',
    ],
    heroImage: '/images/drivingcard.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX Research, Interaction Design, VR Experience Design, Stakeholder Management, User Testing',
      },
      { icon: 'tools', title: 'Tools', text: 'Unity, Figma, Meta Quest 2, XR Interaction Toolkit, GitHub' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'Interviews, surveys, UMUX, SUS, IPQ, observation, expert evaluation',
      },
      { icon: 'pin', title: 'Context', text: 'VR learning tool, four-person group, 5th Semester Project, 2023' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who was it for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The primary users were **learner drivers currently working toward a Danish driving licence**.',
              'Research with driving students showed that many appreciated classroom teaching because they could ask questions and receive immediate explanations, but some found long theory sessions passive or boring. **Students also reported that certain situations were difficult to understand when they were presented only through still images.**',
              'Across two surveys, a total of 26 driving students contributed insight into their learning experience. The research showed that students generally preferred learning by doing rather than reading, and wanted more opportunities to see realistic situations rather than only hear them explained.',
              'Driving instructors were also important stakeholders. They helped us understand which parts of driving theory students typically struggle to translate into practical driving, particularly:',
            ],
          },
          {
            type: 'notes',
            items: [
              { title: 'Speed' },
              { title: 'Distance' },
              { title: 'Orientation' },
              { title: 'Head movement' },
              { title: 'Blind spots' },
            ],
          },
          {
            type: 'text',
            body: 'These became central to the product direction.',
          },
          {
            type: 'highlight',
            label: 'Core user need',
            text: 'Learner drivers needed a way to experience movement and orientation before encountering the same situations on the road.',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'What problem were we solving?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'Traditional driving-theory material relies heavily on photos, illustrations and written explanations.',
              'While these methods can communicate traffic rules, they do not easily communicate what movement actually feels like. A picture can show another vehicle, but it cannot easily communicate:',
            ],
          },
          {
            type: 'notes',
            items: [
              { title: 'How quickly is it approaching?' },
              { title: 'How far away is it?' },
              { title: 'When should I turn my head?' },
              { title: 'What can I see in my blind spot?' },
            ],
          },
          {
            type: 'quote',
            text: 'The problem was not that theory lacked information, but that some information was difficult to understand without experiencing movement and space.',
          },
          {
            type: 'text',
            body: [
              'The driving instructors repeatedly identified this limitation. They explained that students sometimes struggled with questions involving speed and distance because static images did not communicate movement, and that orientation and head movement were important aspects of real driving that existing tools did not adequately represent.',
              'The student research supported this. Some students reported that situations were hard to imagine from images alone, and 93% of the first survey group preferred active tasks and theory-test practice over simply reading from a book.',
              'That led us to investigate VR as a bridge between:',
            ],
          },
          { type: 'flow', items: ['Learning the theory', 'Experiencing the situation'] },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How might VR help learner drivers experience the spatial and movement-based aspects of driving theory before encountering them on the road?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'This was a four-person group project, where the team worked across research, interaction design, VR development, evaluation and implementation.',
              'As part of the team, I contributed to the research, UX and interaction design, prototype development and user evaluation of an immersive VR learning experience.',
              'The project involved:',
            ],
            list: [
              'Interviewed driving instructors and surveyed learner drivers;',
              'Translated research into VR interaction and learning requirements;',
              'Designed traffic scenarios and interaction flows;',
              'Explored alternative VR interface concepts;',
              'Prototyped and implemented the experience in Unity;',
              'Tested usability, presence, feedback, and interaction quality;',
              'Evaluated the final concept with learner drivers and professional instructors.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How did we approach the problem?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: 'The design was guided by both user research and principles of immersion, learning and VR interaction.',
          },
          {
            type: 'steps',
            items: [
              { step: 'Understand', label: 'Instructor interviews' },
              { step: 'Validate', label: 'Student surveys' },
              { step: 'Define', label: 'Requirements' },
              { step: 'Build', label: 'Scenarios' },
              { step: 'Test', label: 'UI comparison' },
              { step: 'Refine', label: 'Presence & feedback' },
            ],
          },

          {
            type: 'subheading',
            number: 1,
            title: 'Understand what static theory was missing',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We began with the existing driving-education experience rather than assuming VR was the solution.',
              'Interviews with driving instructors identified a recurring limitation: static theory material was effective for explaining rules, but weaker at communicating **movement, distance, orientation, and head movement**.',
            ],
          },
          {
            type: 'quote',
            text: 'Existing theory tools lacked movement.',
          },
          {
            type: 'flow',
            items: [
              {
                title: 'Not',
                text: '“How do we put driving theory into VR?”',
              },
              {
                title: 'But',
                text: '“Which parts of driving theory benefit from spatial and perceptual experience?”',
              },
            ],
          },
          {
            type: 'subheading',
            number: 2,
            title: 'Define where VR could add value',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Student research supported the instructors’ findings. Learner drivers preferred active and visual learning, but still valued instructor explanations and conventional theory-test practice.',
              'VR was therefore positioned as a **supplement**, not a replacement for existing teaching.',
            ],
          },
          {
            type: 'notes',
            label: 'Three core needs',
            items: [
              {
                title: 'Experience movement',
                text: 'Communicate speed and distance dynamically. This scenario shows a learner driver assessing approaching traffic before entering the road.',
              },
              {
                title: 'Require orientation',
                text: 'Encourage users to physically look around the environment. This scenario shows a learner driver turning at an intersection and checking for pedestrians, bicycles, and traffic signals.',
              },
              {
                title: 'Provide feedback',
                text: 'Explain why decisions were right or wrong. This scenario shows a learner driver passing a stationary vehicle, having to look for oncoming traffic and position themselves correctly.',
              },
            ],
          },
          {
            type: 'highlight',
            label: 'Product role',
            text: 'Use VR for the parts of driving theory that benefit from spatial, perceptual, and movement-based experience.',
          },
          {
            type: 'subheading',
            number: 3,
            title: 'Turn research into design requirements',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: 'The research was translated into a focused set of requirements for the VR experience:',
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Immersive scenarios',
                text: 'Represent realistic traffic situations in a fully immersive environment.',
              },
              {
                title: 'Physical orientation',
                text: 'Require users to look around and inspect their surroundings.',
              },
              {
                title: 'Natural guidance',
                text: 'Direct attention without taking control of the user’s view.',
              },
              {
                title: 'Contextual interaction',
                text: 'Keep decision-making interfaces appropriate to the driving environment.',
              },
              {
                title: 'Learning feedback',
                text: 'Explain the consequences of correct and incorrect decisions.',
              },
              {
                title: 'Comfort',
                text: 'Account for cybersickness and physical discomfort.',
              },
            ],
          },

          {
            type: 'subheading',
            number: 4,
            title: 'Build scenarios around real theory situations',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Rather than inventing game-like situations, we based the experience on existing driving-theory material.',
              'Three scenarios were selected because they required users to interpret movement, positioning, and their surroundings.',
            ],
          },
          {
            type: 'choices',
            label: 'Three scenarios',
            items: [
              {
                title: 'Starting from the roadside',
                text: 'Assess approaching vehicles and speed before entering the road.',
                image: '/images/Starting from Roadside.png',
              },
              {
                title: 'Turning at an intersection',
                text: 'Orient around vehicles, cyclists, pedestrians, and traffic signals.',
                image: '/images/Intersection.png',
              },
              {
                title: 'Passing a stationary vehicle',
                text: 'Assess oncoming traffic while positioning around another vehicle.',
                image: '/images/Overtaking.png',
              },
            ],
          },
          {
            type: 'flow',
            items: [
              'Theory material',
              'Figma concept',
              'Interactive VR scenario',
            ],
          },

          {
            type: 'subheading',
            number: 5,
            title: 'Design interaction for immersion and usability',
            image: '/images/drivingcollage.png',
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Designing for VR required more than making the environment visually realistic. The interaction had to feel natural, guide attention, communicate feedback, and remain physically comfortable.',
            ],
          },
          {
            type: 'insights',
            items: [
              {
                insight: 'An arm-mounted UI pulled attention away from the driving environment.',
                decision: 'Move answer choices into the car dashboard.',
                why: 'The interface became more contextual and less distracting.',
              },
              {
                insight: 'Users could look anywhere in the VR environment.',
                decision: 'Introduce a glowing Orb to guide attention through visual and auditory cues.',
                why: 'Attention could be directed without forcibly rotating the user’s view.',
              },
              {
                insight: 'Right/wrong feedback alone provided limited learning value.',
                decision: 'Add explanations, replay opportunities, visual states, and environmental feedback.',
                why: 'Users needed to understand the consequence of their decisions.',
              },
              {
                insight: 'Vehicle movement could create sensory mismatch.',
                decision: 'Maintain a stable dashboard reference and avoid unnecessary head movement.',
                why: 'The experience needed to account for cybersickness as well as usability.',
              },
            ],
          },
          {
            type: 'quote',
            text: 'Presence came from behaviour, feedback, and contextual interaction — not graphical fidelity alone.',
          },
          {
            type: 'subheading',
            number: 6,
            title: 'Test, compare, and refine',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We tested competing interaction concepts rather than selecting the final interface by preference alone.',
              'Ten participants compared an arm-mounted interface with an in-car dashboard using UMUX.',
            ],
          },
          {
            type: 'flow',
            items: [
              {
                title: 'Arm-mounted UI',
                text: 'UMUX: 65 / 100',
              },
              {
                title: 'Dashboard UI',
                text: 'UMUX: 81 / 100',
              },
            ],
          },
          {
            type: 'insights',
            items: [
              {
                assumption: 'An arm-mounted interface could feel immersive and accessible.',
                test: 'Compare it directly with a dashboard-based interface.',
                result: '65 → 81',
                decision: 'Use the dashboard UI.',
                why: 'It felt more natural, reduced distraction, and matched the context of sitting inside a car.',
              },
            ],
          },


          { type: 'subheading', title: 'The final experience', image: null, caption: 'Placeholder – swap for a picture of this step' },
          {
            type: 'text',
            body: 'The finished simulator consisted of three interactive traffic scenarios. Users could either play through all three scenarios or select an individual scenario. The experience followed a consistent structure:',
          },
          {
            type: 'flow',
            items: [
              'Introduction',
              'Enter scenario',
              'Observe the environment',
              'Orient through head movement',
              'Decide using the dashboard UI',
              'Receive feedback',
              'Retry or progress',
              'Final feedback',
            ],
          },
        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Results',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'metrics',
            items: [
              {
                value: '81 / 100',
                text: 'UMUX score for the dashboard interface, compared with 65 / 100 for the arm-mounted concept.',
              },
              {
                value: '77.5',
                text: 'Mean SUS score for the final VR prototype.',
              },
              {
                value: '3',
                text: 'Interactive traffic scenarios built around movement and orientation.',
              },
              {
                value: '2',
                text: 'Professional driving instructors evaluated the final concept.',
              },

              {
                value: 'Active learning',
                text: 'Students moved from passively interpreting static images to looking, deciding and reacting inside the scenario.',
              },
            ],
          },
          {
            type: 'text',
            body: [
              'Learner-driver testing indicated good perceived usability despite limited prior VR experience.',
              'Presence results were more mixed: participants reported a general sense of presence, while spatial presence and involvement were weaker.',
              'Because the final learner-driver sample was small, these findings should be treated as indicative rather than representative.',
            ],
          },
          {
            type: 'subheading',
            title: 'Expert perspective',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The driving instructors responded positively to using VR as a supplement to theory teaching, particularly the ability to physically look around and experience traffic elements in motion.',
              'They also identified areas for further development, including visual fidelity, more realistic consequences, improved vehicle behaviour, and a broader range of scenarios.',
            ],
          },
          {
            type: 'quote',
            text: 'The strongest role for the simulator was not replacing theory lessons, but making spatial and movement-based concepts easier to experience before real-world driving.',
          },
        ],
      },
    ],
  },

  spyrun: {
    title: ['From Exercise', 'to Play'],
    subtitle: 'Gamifying auditory training for children with APD',
    //meta: '4th Semester Project · Game UX · Accessibility · Spatial Audio · Mobile Development · 2023',
    intro: [
      'SpyRun is a mobile endless-runner game exploring how auditory-processing exercises could be embedded into gameplay for children with Auditory Processing Disorder.',
      'The experience combined spatial audio, background noise, sound localization, and listening tasks inspired by existing APD training.',
    ],
    heroImage: '/images/spyrunhero.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX Research, Game UX, Interaction Design, Accessibility, User Testing, Stakeholder Management and communication',
      },
      { icon: 'tools', title: 'Tools', text: 'Unity, C#' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'Interviews, surveys, think-aloud, SUS, expert evaluation',
      },
      { icon: 'pin', title: 'Context', text: 'Mobile game, five-person group, 4th Semester Project, 2023' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who were we designing for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The primary users were **children aged 12–15 with Auditory Processing Disorder (APD)**.',
              'APD affects how auditory information is processed rather than whether sound can be heard. Common difficulties include filtering background noise, distinguishing similar sounds, remembering auditory information, and identifying where sounds originate.',
            ],
          },
          {
            type: 'notes',
            items: [
              { title: 'Speech in noise' },
              { title: 'Sound localization' },
              { title: 'Auditory memory' },
              { title: 'Sound discrimination' },
              { title: 'Filtering distractions' },
            ],
          },
          {
            type: 'text',
            body: 'Expert interviews also highlighted a gap in engaging digital training options designed specifically for older children and teenagers.',
          },
          {
            type: 'highlight',
            label: 'Core user need',
            text: 'Auditory training needed to remain repetitive enough to support practice without becoming so repetitive that users disengaged.',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'The design challenge',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'Auditory training often depends on repeated listening exercises, but repetition can reduce motivation and make practice feel clinical or monotonous.',
              'Because regular practice is important, engagement was not simply a visual or entertainment concern, it directly affected whether users were likely to continue training.',
            ],
          },
          {
            type: 'quote',
            text: 'The training needed repetition. The game needed to make that repetition worth continuing.',
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How might auditory-processing exercises become part of an engaging game without losing their training purpose?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'As part of a five-person team, I contributed across **research, game UX, interaction design, accessibility, implementation, and evaluation**.',
            ],
            list: [
              'Researched APD and existing auditory-training approaches;',
              'Interviewed audiology specialists and investigated target-group needs;',
              'Translated auditory exercises into game mechanics;',
              'Contributed to narrative, game flow, and interaction design;',
              'Designed accessibility and UI considerations;',
              'Implemented gameplay and spatial-audio behaviour;',
              'Conducted usability and target-group testing;',
              'Evaluated the concept with an audiology specialist.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How did we approach the problem?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 'Understand', label: 'APD & training' },
              { step: 'Define', label: 'Requirements' },
              { step: 'Frame', label: 'Genre & narrative' },
              { step: 'Translate', label: 'Exercises → mechanics' },
              { step: 'Refine', label: 'Difficulty & accessibility' },
              { step: 'Test', label: 'Users & expert' },
            ],
          },

          {
            type: 'subheading',
            number: 1,
            title: 'Understand what needed training',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We began with APD research and interviews with two audiology specialists to understand which auditory difficulties a digital game could meaningfully address.',
              'A recurring challenge was **auditory figure/ground**: identifying an important sound while filtering competing noise.',
            ],
          },
          {
            type: 'quote',
            text: 'The game should not simply contain sound, success should depend on listening.',
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Speech in noise',
                text: 'Recognize relevant speech despite competing background sound.',
              },
              {
                title: 'Sound localization',
                text: 'Identify where a sound originates.',
              },
              {
                title: 'Figure/ground listening',
                text: 'Focus on relevant auditory information while ignoring distractions.',
              },
            ],
          },
          {
            type: 'subheading',
            number: 2,
            title: 'Turn research into design requirements',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Research into APD, existing training tools, gamification, and accessibility was translated into a focused set of product requirements.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Mobile-first',
                text: 'The experience should run on a device already familiar and accessible to the target group.',
              },
              {
                title: 'Spatial audio',
                text: 'Sound direction should become an active part of the training mechanics.',
              },
              {
                title: 'Realistic listening environments',
                text: 'Background noise and reverberation should reflect situations such as school and traffic.',
              },
              {
                title: 'Training through gameplay',
                text: 'APD exercises should be embedded into game mechanics rather than presented as separate tests.',
              },
              {
                title: 'Progressive difficulty',
                text: 'Auditory challenge should increase gradually as the player progresses.',
              },
              {
                title: 'Accessible interaction',
                text: 'Visual reinforcement, clear instructions, and adjustable audio should support different user needs.',
              },
            ],
          },

          {
            type: 'subheading',
            number: 3,
            title: 'Make repetition feel purposeful',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We selected an endless-runner structure because it naturally supports short sessions, repeated challenges, increasing difficulty, and replayability.',
              'A spy narrative then gave the auditory tasks a reason to exist inside the game world: players received radio instructions, filtered competing voices, located threats, and reacted to sound while escaping.',
            ],
          },
          {
            type: 'flow',
            label: 'Game loop',
            items: [
              'Run',
              'Receive audio cue',
              'Interpret sound',
              'React',
              'Continue',
            ],
          },
          {
            type: 'quote',
            text: 'Gameplay gave repetition structure; the narrative gave it meaning.',
          },

          {
            type: 'subheading',
            number: 4,
            title: 'Design challenges around the auditory skill',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: 'Three core mechanics translated existing auditory exercises into actions that affected gameplay:',
          },
          {
            type: 'choices',
            label: 'Three auditory mechanics',
            items: [
              {
                title: 'Distractor Agent',
                text: 'Two voices compete for attention. The player must identify and follow the relevant speaker, targeting figure/ground and dichotic listening.',
                image: '/images/Biler.png',
              },
              {
                title: 'Selection of Words',
                text: 'The player identifies a spoken target among visual choices while background noise competes for attention.',
                image: '/images/3 ting.png',
              },
              {
                title: 'Spatial Audio Laser',
                text: 'The player hears a threat approaching from one direction and must move away from it, targeting sound localization.',
                image: '/images/Laser 1.png',
              },
            ],
          },
          {
            type: 'text',
            body: 'Each mechanic was derived from an intended auditory skill rather than adding sound challenges purely for entertainment.',
          },

          {
            type: 'subheading',
            number: 5,
            title: 'Control difficulty without creating confusion',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The challenge was to make the listening task progressively harder without letting unrelated interface or visual problems become part of the difficulty.',
              'School and traffic environments introduced realistic background noise, while challenge increased gradually through stronger auditory competition.',
            ],
          },
          {
            type: 'notes',
            numbered: true,
            items: [
              {
                title: 'Progressive difficulty',
                text: 'Background noise and challenge increased as the player progressed.',
              },
              {
                title: 'Visual reinforcement',
                text: 'Critical information did not rely exclusively on audio.',
              },
              {
                title: 'Clear instructions',
                text: 'Players needed to understand what they were listening for before difficulty increased.',
              },
              {
                title: 'Consistent UI',
                text: 'Navigation and feedback remained predictable so interaction did not compete with the auditory task.',
              },
              {
                title: 'Adjustable audio',
                text: 'Sound and background-noise levels could be adapted to individual needs.',
              },
            ],
          },
          {
            type: 'quote',
            text: 'Difficulty should come from the skill being trained, not from unclear interaction.',
          },

          {
            type: 'subheading',
            number: 6,
            title: 'Test different questions with the right participants',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Because access to children with diagnosed APD was limited, we separated general usability testing from target-group and expert evaluation.',
              'Each participant group was used to answer a different question about the product.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'General usability',
                text: 'Test whether the interaction, controls, instructions, and overall experience were understandable and usable.',
              },
              {
                title: 'Target-group relevance',
                text: 'Understand whether children with APD found the concept engaging and preferable to conventional training exercises.',
              },
              {
                title: 'Training validity',
                text: 'Use expert evaluation to assess whether the auditory mechanics reflected relevant APD training principles.',
              },
            ],
          },
        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Results',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'metrics',
            items: [
              {
                value: '82.73',
                text: 'Mean SUS score in the general usability evaluation.',
              },
              {
                value: '10 / 11',
                text: 'Usability participants described the game as entertaining.',
              },
              {
                value: '2',
                text: 'Children with APD tested the concept and responded positively to the overall experience.',
              },
              {
                value: '1',
                text: 'Audiology specialist reviewed the training logic and exercise relevance.',
              },
            ],
          },

          {
            type: 'subheading',
            title: 'What worked',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The prototype achieved strong perceived usability, and most usability participants found the experience entertaining.',
              'Both children with APD responded positively to the concept and preferred aspects of the game to conventional auditory exercises.',
              'The audiology specialist recognized the game mechanics as relevant to areas such as speech-in-noise, filtering, and dichotic listening.',
            ],
          },

          {
            type: 'subheading',
            title: 'What testing challenged',
            image: null,
            caption: '',
          },
          {
            type: 'insights',
            columns: 3,
            labels: {
              result: 'Finding',
              decision: 'Design implication',
            },
            items: [
              {
                title: 'Selection of Words',
                result: 'Visual ambiguity made the task harder for reasons unrelated to listening.',
                decision: 'Reduce visual ambiguity so difficulty comes from the auditory task.',
              },
              {
                title: 'Spatial Audio Laser',
                result: 'Participants struggled to identify the sound direction; the localization cues were not distinct enough.',
                decision: 'Improve spatial separation and allow more time to interpret direction.',
              },
              {
                title: 'Distractor Agent',
                result: 'Users struggled to tell the competing voices apart, making the mechanic harder than intended.',
                decision: 'Rebalance stereo positioning, volume, instructions, and progression.',
              },
            ],
          },

          {
            type: 'quote',
            text: 'Difficulty should come from the auditory skill being trained, not from ambiguity in the interface or interaction.',
          },

          {
            type: 'subheading',
            title: 'Limitations',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The prototype was not evaluated as a clinical intervention and cannot be claimed to improve auditory processing.',
              'Only two children with APD participated, and testing was short-term. A longer longitudinal study with a larger target-group sample would be required to evaluate training effectiveness.',
            ],
          },
        ],
      },
    ],
  },

  'interactive-exhibit': {
    title: ['From Looking', 'to Interacting'],
    subtitle: 'Designing a social, physical-digital learning experience for museum visitors',
    //meta: '3rd Semester Project · Experience Design · UX Research · Interaction Design · Computer Vision · 2022',
    intro: [
      'We designed an interactive museum exhibit for Thorvaldsens Museum that combined physical cards, projected feedback, object detection, and game-based learning.',
      'Visitors matched question cards with sculpture cards on a table. A camera recognized the cards using computer vision, and a projector responded in real time with feedback and information about the museum. The goal was to help visitors gain and retain knowledge in a social and interactive way.',
    ],
    heroImage: '/images/thorhero.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX Research, Stakeholder Communication, Experience Design, Interaction Design, Prototyping, User Testing',
      },
      {
        icon: 'tools',
        title: 'Tools',
        text: 'Figma, Python, OpenCV, PyTorch, YOLOv5, Roboflow',
      },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'User-Centered, Interviews, think-aloud, observation, prototype testing',
      },
      { icon: 'pin', title: 'Context', text: 'Museum exhibit, six-person group, 3rd Semester Project, 2022' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who were we designing for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The experience was designed for **visitors at Thorvaldsens Museum**, a broad audience spanning different ages, nationalities, motivations, and levels of prior knowledge.',
              'Research also showed that museum visits were often social rather than solitary, making shared interaction an important part of the design context.',
            ],
          },
          {
            type: 'notes',
            items: [
              { title: 'Different ages' },
              { title: 'Different nationalities' },
              { title: 'Different knowledge levels' },
              { title: 'Different visit motivations' },
              { title: 'Often visiting socially' },
            ],
          },
          {
            type: 'highlight',
            label: 'Core user need',
            text: 'The experience had to provide accessible information without requiring visitors to download an app or disengage from the physical museum.',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'The design challenge',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'Thorvaldsens Museum keeps physical information around its sculptures intentionally minimal, with additional content available through its mobile app.',
              'However, our visitor research showed that **none of the seven participants in the first interview round used the app during their visit**.',
            ],
          },
          {
            type: 'flow',
            label: 'Existing experience',
            items: ['See sculpture', 'Find number', 'Open app', 'Search', 'Read'],
          },
          {
            type: 'text',
            body: [
              'Visitors wanted more information, but many did not want technology to interrupt the museum experience.',
              'This created a tension between **providing richer information** and **preserving direct engagement with the physical museum**.',
            ],
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How might we make museum learning more interactive and social without moving the experience onto each visitor’s personal screen?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'As part of a six-person team, I contributed across **visitor research, experience design, physical interaction design, prototyping and user testing**.',
            ],
            list: [
              'Researched museum visitor behaviour and stakeholder needs;',
              'Interviewed museum professionals about interactive exhibition design;',
              'Translated research into a shared physical interaction concept;',
              'Designed the card system and projected feedback;',
              'Tested early proofs of concept with users;',
              'Iterated the interaction and onboarding based on observed behaviour;',
              'Tested the final installation with visitors inside Thorvaldsens Museum.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How did we approach the problem?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: 'The solution was shaped by both visitor behaviour and museum constraints.',
          },
          {
            type: 'steps',
            items: [
              { step: 'Understand', label: 'Visitors & museum' },
              { step: 'Define', label: 'Experience principles' },
              { step: 'Concept', label: 'Social interaction' },
              { step: 'Prototype', label: 'Physical interface' },
              { step: 'Build', label: 'Computer vision' },
              { step: 'Test', label: 'In the museum' },
            ],
          },

          {
            type: 'subheading',
            number: 1,
            title: 'Understand how visitors actually behave',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We began with visitor behaviour rather than technology.',
              'Two rounds of interviews showed that visitors often came with other people, wanted more information, rarely used the existing museum app, and were more receptive to technology when it supported rather than replaced the physical experience.',
            ],
          },
          {
            type: 'insights',
            labels: { decision: 'Design implication' },
            items: [
              {
                insight: 'Visitors were already physically present, often with other people, and did not want to shift attention onto personal screens.',
                decision: 'Design a shared physical interaction rather than another individual mobile experience.',
                why: 'The technology should extend the museum visit without isolating visitors from the space or each other.',
              },
            ],
          },

          {
            type: 'subheading',
            number: 2,
            title: 'Define the experience principles',
            image: '/images/setupgabe.jpg',
            caption: '',
          },
          {
            type: 'text',
            body: 'Research with visitors and museum professionals led to four principles for the experience:',
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Shared',
                text: 'The experience should encourage interaction between visitors rather than isolate them.',
              },
              {
                title: 'Physical',
                text: 'Visitors should manipulate something tangible rather than interact only through a screen.',
              },
              {
                title: 'Self-directed',
                text: 'Technology should support exploration without forcing a fixed path.',
              },
              {
                title: 'Informative',
                text: 'Interaction should lead to meaningful museum knowledge rather than entertainment alone.',
              },
            ],
          },
          {
            type: 'quote',
            text: 'The technology should support the museum experience, not compete with it.',
          },

          {
            type: 'subheading',
            number: 3,
            title: 'Turn museum learning into a social matching game',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'We chose a matching-game structure because it was familiar, easy to understand, and naturally encouraged discussion between visitors.',
              'Players matched **question cards** with **sculpture cards**, after which the installation provided immediate feedback and additional information.',
            ],
          },

          {
            type: 'flow',
            items: [
              { title: 'Question card', text: '“Which statue depicts the acting pope from 1800 until his death?”' },
              { title: 'Sculpture card', text: 'Pius VII' },
            ],
          },
          {
            type: 'flow',
            label: 'Interaction loop',
            items: ['Read', 'Discuss', 'Choose', 'Place', 'Receive feedback', 'Learn'],
          },
          {
            type: 'quote',
            text: 'Learning became something visitors could discuss and act on together.',
          },
          {
            type: 'subheading',
            number: 4,
            title: 'Make the physical objects the interface',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The installation did not use a conventional touchscreen. **The cards themselves became the controls.**',
              'Visitors selected a question and sculpture card, placed them inside projected areas on the table, and received immediate feedback from the system.',
            ],
          },
          {
            type: 'choices',
            label: 'Interaction in three stages',
            rows: true,

            items: [
              {
                title: '1. Choose',
                text: 'Select a question card and the sculpture believed to match it.',
                image: '/images/cardwithsymbolscorrect.png',
              },
              {
                title: '2. Place',
                text: 'Place both cards inside the projected interaction areas.',
                image: '/images/nocardscreens.png',
              },
              {
                title: '3. Feedback',
                text: 'The system recognizes the pair and responds directly on the table.',
                image: '/images/cardscreens.png',
              },
            ],
          },

          {
            type: 'text',
            body: 'The projected interface changed depending on what the system detected:',
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Waiting',
                text: 'Prompt the visitor to place the first card.',
              },
              {
                title: 'One card detected',
                text: 'Prompt for the corresponding card type.',
              },
              {
                title: 'Incorrect match',
                text: 'Provide immediate red feedback.',
                color: '#e57373',
              },
              {
                title: 'Correct match',
                text: 'Provide green confirmation and additional museum information.',
                color: '#7cc47f',
              },
            ],
          },
          {
            type: 'subheading',
            number: 5,
            title: 'Design for two audiences at once',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The cards needed to work for both the visitor and the computer-vision system.',
              'That meant balancing human readability and museum aesthetics with visual features the detection model could reliably distinguish.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'For visitors',
                list: [
                  'Clear categories',
                  'Readable text',
                  'Recognizable sculptures',
                  'Familiar card proportions',
                  'Museum-consistent visual language',
                ],
              },
              {
                title: 'For computer vision',
                list: [
                  'Strong contrast',
                  'Distinctive symbols',
                  'Limited symmetry',
                  'Clear feature points',
                  'Non-reflective surfaces',
                ],
              },
            ],
          },
          {
            type: 'quote',
            text: 'The same object had to be understandable to a museum visitor and recognizable to a machine.',
          },

          {
            type: 'subheading',
            number: 6,
            title: 'Build and test the full installation',
            image: '/images/setupnoone.jpg',
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The final prototype combined physical cards, overhead camera input, object detection, and projected feedback into one real-time interaction.',
              'The YOLOv5 model recognized the cards and compared detected combinations against the correct pairs before updating the projection.',
            ],
          },
          {
            type: 'flow',
            items: [
              'Place cards',
              'Camera detects',
              'Model identifies',
              'Pair is evaluated',
              'Projection updates',
            ],
          },
          {
            type: 'text',
            body: 'The completed installation was then tested with visitors inside Thorvaldsens Museum rather than only in a lab setting.',
          },

        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Results',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'metrics',
            items: [
              {
                value: '23',
                text: 'Museum visitors tested the final installation.',
              },
              {
                value: '18',
                text: 'Real-world test sessions inside Thorvaldsens Museum.',
              },
              {
                value: '67%',
                text: 'Sessions involved more than one participant.',
              },
              {
                value: '100%',
                text: 'Participants completed all question cards.',
              },
              {
                value: '0.8853',
                text: 'Object-detection mAP for the trained model.',
              },
            ],
          },
          {
            type: 'text',
            body: [
              'Participants generally found the interaction easy to use and responded positively to the concept.',
              'Group sessions also supported the social premise of the design, with visitors discussing and solving the matches together.',
            ],
          },
          {
            type: 'subheading',
            title: 'What testing revealed',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'By the final test, understanding the interaction was no longer the primary issue. The larger challenge was improving the quality of the learning task itself.',
              'Some questions were too easy to infer from the limited card set, suggesting that future versions should introduce more cards, less leading questions, and greater difficulty progression.',
            ],
          },
          {
            type: 'quote',
            text: 'Once the interaction became understandable, the next design challenge shifted from usability to learning quality.',
          },
          {
            type: 'subheading',
            title: 'Limitations',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The study demonstrated usability and engagement, but did not establish long-term knowledge retention.',
              'A larger and longer study would be required to determine whether repeated use improves what visitors remember after leaving the museum.',
            ],
          },
        ],
      },
    ],
  },

  'maze-chase': {
    title: ['Balancing Players', 'Through the Environment'],
    subtitle: 'Designing adaptive multiplayer VR through dynamic difficulty',
    //meta: 'Research Project · VR Game Design · Adaptive Systems · Experimental Research · 2025',
    intro: [
      'We designed and developed a four-player VR chase game exploring whether Multiplayer Dynamic Difficulty Adjustment could balance players with different skill levels.',
      'Instead of modifying player abilities, the system regenerated the maze around each player’s performance, giving struggling players more distance from the seeker and stronger players less.',
    ],
    heroImage: '/images/mazechase.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'Game UX, VR Interaction Design, Adaptive Game Design, Research, User Testing, Data Analysis',
      },
      { icon: 'tools', title: 'Tools', text: 'VR, Meta Quest, Unity, C#, procedural generation, multiplayer systems' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'Dynamic Difficulty Adjustment, Flow Short Scale, experimental comparison, statistical analysis',
      },
      { icon: 'pin', title: 'Context', text: 'Multiplayer VR game, three-person group, 7th semester research project, 2025' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who were we designing for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The experience was designed for **multiplayer VR groups with different skill levels**.',
              'Players can differ in spatial awareness, reaction speed, strategic ability, and familiarity with VR, meaning the same challenge can feel too easy for one player and overwhelming for another.',
            ],
          },
          {
            type: 'notes',
            items: [
              { title: 'Spatial awareness' },
              { title: 'Reaction speed' },
              { title: 'Strategic ability' },
              { title: 'VR experience' },
            ],
          },
          {
            type: 'highlight',
            label: 'Core challenge',
            text: 'Support high- and low-performing players in the same session without making the balancing system feel unfair.',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'The design challenge',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'Dynamic Difficulty Adjustment is commonly used to keep challenge aligned with player skill.',
              'In multiplayer games, however, changing the experience for one player can affect everyone else. Helping a struggling player can easily feel like punishing a stronger one.',
            ],
          },
          {
            type: 'quote',
            text: 'The challenge was not simply to balance difficulty, but to do it without making the balancing feel visible or unfair.',
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How might a multiplayer VR game adapt to performance in real time without directly changing player abilities?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'As part of a three-person team, I contributed across **game design, adaptive-system design, VR interaction, experimental testing, and data analysis**.',
            ],
            list: [
              'Researched multiplayer Dynamic Difficulty Adjustment and flow theory;',
              'Designed the seeker-and-hider game loop;',
              'Defined player-performance metrics;',
              'Translated performance into adaptive maze generation;',
              'Contributed to procedural level-generation logic;',
              'Built adaptive and non-adaptive experimental conditions;',
              'Evaluated player experience using the Flow Short Scale;',
              'Analysed quantitative and qualitative results.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How did we approach the problem?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: 'We needed to balance players without directly altering their abilities, so we adapted the environment instead.',
          },
          {
            type: 'steps',
            items: [
              { step: 'Define', label: 'Flow & balance' },
              { step: 'Balance', label: 'Environment, not abilities' },
              { step: 'Adapt', label: 'Performance → distance' },
              { step: 'Loop', label: 'Seeker & hiders' },
              { step: 'Generate', label: 'Procedural maze' },
              { step: 'Compare', label: 'Adaptive vs. non-adaptive' },
            ],
          },

          {
            type: 'subheading',
            number: 1,
            title: 'Define what balance should feel like',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The design was guided by flow theory: challenge should remain high enough to avoid boredom without becoming so difficult that it creates frustration.',
              'For the adaptive system, that translated into a second requirement: balancing should happen without interrupting the player or demanding explicit difficulty choices.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Matched challenge',
                text: 'Difficulty should respond to how the player is performing.',
              },
              {
                title: 'Player control',
                text: 'The system should not directly take abilities away from the player.',
              },
              {
                title: 'Immediate adaptation',
                text: 'Changes should happen between rounds without additional setup.',
              },
              {
                title: 'Low visibility',
                text: 'The player should experience the effect without managing the system itself.',
              },
            ],
          },
          {
            type: 'quote',
            text: 'Adapt the challenge while keeping the experience seamless.',
          },
          {
            type: 'subheading',
            number: 2,
            title: 'Adapt the environment, not the player',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'A conventional balancing system could slow stronger players down or give struggling players additional speed.',
              'We deliberately avoided changing player abilities because those adjustments could feel artificial or punitive.',
            ],
          },
          {
            type: 'quote',
            text: 'The player stayed the same. The maze changed.',
          },
          {
            type: 'flow',
            label: 'Instead of',
            items: ['Player struggles', 'Modify player ability'],
          },
          {
            type: 'flow',
            label: 'We explored',
            items: ['Player struggles', 'Modify the environment'],
          },
          {
            type: 'subheading',
            number: 3,
            title: 'Turn performance into maze structure',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Each player started with four lives. Remaining lives became a real-time indicator of performance.',
              'After each round, the system compared each player against the group and recalculated how far that player should begin from the seeker.',
            ],
          },
          {
            type: 'flow',
            label: 'Lower-performing player',
            items: [
              'Fewer lives',
              'Greater distance from seeker',
              'More opportunity to escape',
            ],
          },
          {
            type: 'flow',
            label: 'Higher-performing player',
            items: [
              'More lives',
              'Shorter distance from seeker',
              'Greater pressure',
            ],
          },
          {
            type: 'highlight',
            label: 'Adaptive logic',
            text: 'Performance changed the spatial relationship between players rather than their movement abilities.',
          },

          {
            type: 'subheading',
            number: 4,
            title: 'Build the game around the adaptive loop',
            image: '/images/mazephase.png',
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Four players entered the maze: one seeker and three hiders.',
              'When a hider was caught, roles changed, the player lost a life, and the maze regenerated using the updated performance data.',
            ],
          },
          {
            type: 'flow',
            label: 'Round loop',
            items: [
              'Hide',
              'Get caught',
              'Lose a life',
              'Switch roles',
              'Recalculate performance',
              'Regenerate maze',
              'Next round',
            ],
          },
          {
            type: 'text',
            body: [
              'Before each round, players briefly saw the maze layout and player positions. This made spatial memory and route planning part of the skill rather than reducing performance to movement speed alone.',
            ],
          },

          {
            type: 'subheading',
            number: 5,
            title: 'Generate the challenge procedurally',
            image: '/images/maze.png',
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Because player distances changed after every round, predefined levels were not flexible enough.',
              'The maze was therefore generated procedurally from the required seeker-to-hider distances.',
            ],
          },
          {
            type: 'notes',
            numbered: true,
            items: [
              {
                title: 'Generate paths',
                text: 'Create routes that satisfy the adaptive player distances.',
              },
              {
                title: 'Refine paths',
                text: 'Remove problematic dead ends while preserving the intended distances.',
              },
              {
                title: 'Add escape routes',
                text: 'Give hiders alternative routes rather than trapping them.',
              },
              {
                title: 'Refine the maze',
                text: 'Remove undesirable open areas and preserve a playable structure.',
              },
            ],
          },
          {
            type: 'flow',
            items: [
              'Player performance',
              'Target distance',
              'Maze generation',
              'Personalized challenge',
            ],
          },

          {
            type: 'subheading',
            number: 6,
            title: 'Compare adaptive and non-adaptive gameplay',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'To test whether adaptation changed the player experience, we built two versions of the same game.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Adaptive',
                text: 'Maze distances changed according to player performance.',
              },
              {
                title: 'Non-adaptive',
                text: 'Players experienced the game without performance-based balancing.',
              },
            ],
          },
          {
            type: 'text',
            body: [
              'The final comparison used 12 players per condition.',
              'Rather than measuring enjoyment alone, we used the Flow Short Scale to evaluate concentration, challenge, control, absorption, and smoothness of action.',
            ],
          },
          {
            type: 'quote',
            text: 'We measured the experience the adaptive system was intended to influence, not simply whether players liked the game.',
          },
        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Results',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'metrics',
            items: [
              {
                value: '24',
                text: 'Players in the final comparison: 12 adaptive and 12 non-adaptive.',
              },
              {
                value: '0.87 vs. 1.03',
                text: 'Variation in remaining lives. The adaptive condition produced slightly more similar outcomes.',
              },
              {
                value: '5.32 / 7',
                text: 'Mean flow score in the adaptive condition.',
              },
              {
                value: '5.43 / 7',
                text: 'Mean flow score in the non-adaptive condition.',
              },
            ],
          },

          {
            type: 'subheading',
            title: 'Balancing performance did not increase flow',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The adaptive condition produced slightly more balanced player outcomes, but it did not produce higher overall flow.',
              'The difference in flow between adaptive and non-adaptive gameplay was not statistically significant.',
            ],
          },
          {
            type: 'quote',
            text: 'Balancing performance did not automatically create a better experience.',
          },

          {
            type: 'subheading',
            title: 'Flow remained similar across skill levels',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Within the adaptive condition, higher- and lower-performing players reported similar flow levels.',
              'This suggests that the system may have helped maintain a comparable experience across different performance levels, although the small sample prevents strong conclusions.',
            ],
          },

          {
            type: 'subheading',
            title: 'What testing exposed',
            image: null,
            caption: '',
          },
          {
            type: 'insights',
            columns: 3,
            labels: {
              test: 'Issue',
              result: 'Consequence',
              decision: 'Design implication',
            },
            items: [
              {
                test: 'Players could not always identify themselves on the map.',
                result: 'The interface introduced confusion into a task intended to test spatial memory.',
                decision: 'Give every player a persistent individual colour or marker.',
              },
              {
                test: 'Role changes were sometimes unclear.',
                result: 'Players could lose track of whether they were the seeker or a hider.',
                decision: 'Strengthen role-change feedback before the next round begins.',
              },
              {
                test: 'Maze generation occasionally produced invalid paths.',
                result: 'Technical problems could affect both fairness and experimental validity.',
                decision: 'Validate procedural generation separately before experimental testing.',
              },
            ],
          },

          {
            type: 'subheading',
            title: 'Limitations',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The final comparison was small, and technical and interaction issues remained in the experimental build.',
              'A stronger follow-up study should separate usability validation from hypothesis testing so interface or generation problems do not interfere with measurement of the adaptive system itself.',
            ],
          },
        ],
      },
    ],
  },

  'dangers-of-decibel': {
    title: ['From Awareness', 'to Action'],
    subtitle: 'Designing a VR health experience to make hearing risk feel real',
    //meta: '8th Semester Project · VR · Health Communication · Interaction Design · Behavior Change · 2025',
    intro: [
      'We designed and developed an immersive VR experience about noise-induced hearing loss for young adults aged 18–25.',
      'The experience combined education, simulated hearing loss, and preventative actions to explore whether VR could move users beyond awareness toward more personally relevant hearing-health decisions.',
    ],
    heroImage: '/images/dangerscard.png',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX Research, VR Experience Design, Interaction Design, Game UX, Health Communication, User Testing',
      },
      { icon: 'tools', title: 'Tools', text: 'Unity, XR Interaction Toolkit, Meta Quest 3S, Audacity, Canva' },
      {
        icon: 'chart',
        title: 'Methods',
        text: 'User-Centered, KAB questionnaire, Health Belief Model, surveys, ANOVA, t-tests',
      },
      { icon: 'pin', title: 'Context', text: 'VR experience, five-person group, 8th Semester Project, 2025' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who was it for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The primary users were **young adults aged 18–25 who regularly encounter loud music environments**, including concerts, festivals, and clubs.',
              'Target-group research showed that hearing-health risks were familiar to many participants, but awareness did not consistently translate into protective behavior.',
            ],
          },
          {
            type: 'metrics',
            featured: false,
            items: [
              { value: '38%', text: 'Had experienced tinnitus.' },
              { value: '21%', text: 'Had tried earplugs.' },
              { value: '33%', text: 'Never thought about potential hearing consequences.' },
              { value: '61%', text: 'Had thought about the risks but had not changed their habits.' },
              { value: '20%', text: 'Believed they were personally at risk.' },
              { value: 'Over half', text: 'Were unsure whether hearing damage was reversible.' },
            ],
          },
          {
            type: 'highlight',
            label: 'Core user need',
            text: 'The risk needed to feel personally relevant before preventative behavior would feel worth adopting.',
          },
        ],
      },
      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'What problem were we solving?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: 'Noise-induced hearing loss is preventable, but awareness alone does not necessarily change behavior. Young people may know that loud sound can be harmful, while still believing:',
          },
          { type: 'quote', text: '“It probably won’t happen to me.”' },
          {
            type: 'text',
            body: [
              'The project research showed that this gap between knowledge and action was central.',
              'Traditional campaigns and printed information can explain what noise-induced hearing loss is, but they struggle to communicate:',
            ],
            list: [
              'What hearing loss actually feels like;',
              'How quickly loud environments can become dangerous;',
              'How everyday choices influence exposure;',
              'Why protective behaviors are worth the effort.',
            ],
            after:
              'The project therefore drew on the Health Belief Model, which suggests that behavior change depends on perceived susceptibility, severity, benefits and barriers, as well as self-efficacy and cues to action.',
          },
          {
            type: 'highlight',
            label: 'Design challenge',
            text: 'How might VR make hearing-health risks feel personally relevant while also showing users what they can do to protect themselves?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'What did I do?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'As part of a five-person team, I contributed across **research, VR experience design, interaction design, sound design, implementation, and evaluation**.',
            ],
            list: [
              'Researched noise-induced hearing loss and protective behavior;',
              'Investigated the target group and relevant behavior-change theory;',
              'Translated the Health Belief Model into design requirements;',
              'Designed three connected VR scenarios;',
              'Created first-person interactions and hearing-loss simulations;',
              'Designed prevention mechanics around distance, exposure, and earplugs;',
              'Implemented and tested the experience in Unity;',
              'Evaluated VR against reading and control conditions using a KAB questionnaire.',
            ],
          },
        ],
      },
      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How did we approach the problem?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 'Understand', label: 'Knowledge → action gap' },
              { step: 'Define', label: 'Behavior principles' },
              { step: 'Structure', label: 'Learn → Experience → Act' },
              { step: 'Simulate', label: 'Hearing consequences' },
              { step: 'Practice', label: 'Preventative behavior' },
              { step: 'Compare', label: 'VR vs. reading' },
            ],
          },

          {
            type: 'subheading',
            number: 1,
            title: 'Understand why awareness does not become action',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Research showed that many young adults were aware that loud sound could damage hearing, yet still did not perceive themselves as personally vulnerable or change their behavior.',
              'This meant the project could not rely on information alone.',
            ],
          },
          {
            type: 'flow',
            items: [
              {
                title: 'Not',
                text: '“Give users more facts about hearing loss.”',
              },
              {
                title: 'But',
                text: '“Help users understand the risk, experience the consequence, and practise what to do about it.”',
              },
            ],
          },

          {
            type: 'subheading',
            number: 2,
            title: 'Turn behavior theory into design principles',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The Health Belief Model helped define what the experience needed to change beyond knowledge.',
              'VR was useful because it could combine first-person experience, agency, simulation, and immediate feedback around those behavior-change factors.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Susceptibility',
                text: 'Make the risk feel personally relevant.',
              },
              {
                title: 'Severity',
                text: 'Make the consequences understandable and concrete.',
              },
              {
                title: 'Benefits',
                text: 'Show why protective actions matter.',
              },
              {
                title: 'Barriers',
                text: 'Address reasons users may avoid hearing protection.',
              },
              {
                title: 'Self-efficacy',
                text: 'Make protective behavior feel achievable.',
              },
              {
                title: 'Cues to action',
                text: 'Create memorable moments that can support later decisions.',
              },
            ],
          },

          {
            type: 'subheading',
            number: 3,
            title: 'Structure the experience as Learn → Experience → Act',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: 'The final experience used three connected scenarios, each serving a different role in the behavior-change journey:',
          },
          {
            type: 'choices',
            label: 'Three stages',
            //rows: true,
            items: [
              {
                title: '1. Apartment — Learn',
                text: 'Build foundational knowledge about hearing loss, decibels, and prevention.',
                image: '/images/apartment.png',
              },
              {
                title: '2. Café — Experience',
                text: 'Experience how hearing loss can affect an ordinary social interaction.',
                image: '/images/cafe.png',
              },
              {
                title: '3. Festival — Act',
                text: 'Practise protective decisions around exposure, distance, and earplugs.',
                image: '/images/festival.png',
              },
            ],
          },
          {
            type: 'flow',
            items: [
              'Know the risk',
              'Feel the consequence',
              'Practice the solution',
            ],
          },

          {
            type: 'subheading',
            number: 4,
            title: 'Make abstract consequences tangible',
            image: '/images/wrist-ui.png',
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Two interactions were designed specifically to turn abstract hearing-health concepts into experiences users could directly relate to.',
            ],
          },
          {
            type: 'insights',
            items: [
              {
                insight: 'Decibels are difficult to interpret as abstract numbers.',
                decision: 'Connect volume changes to real-time dB levels and safe exposure time.',
                why: 'Users could relate the risk to the familiar action of turning sound up or down.',
              },
              {
                insight: 'Descriptions of hearing loss do not communicate what conversation difficulty actually feels like.',
                decision: 'Simulate moderate hearing loss during an everyday café conversation.',
                why: 'Users experienced the social consequence instead of only reading about it.',
              },
            ],
          },
          {
            type: 'quote',
            text: 'Instead of explaining the consequence, let the user experience it.',
          },
          {
            type: 'subheading',
            number: 5,
            title: 'Turn prevention into interaction',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The festival scene moved from understanding the risk to actively managing it.',
              'Instead of presenting hearing-protection advice as another information panel, preventative behaviors became part of the game rules.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Distance',
                text: 'Moving away from loud sound reduced exposure.',
              },
              {
                title: 'Earplugs',
                text: 'Using hearing protection reduced the effect of loud environments.',
              },
              {
                title: 'Exposure',
                text: 'Remaining in dangerous sound for too long reduced hearing health.',
              },
              {
                title: 'Feedback',
                text: 'A wrist interface showed dB level, exposure, hearing health, and progress.',
              },
            ],
          },
          {
            type: 'flow',
            label: 'Risky behavior',
            items: [
              'Stay close to loud source',
              'Exposure rises',
              'Hearing health falls',
            ],
          },
          {
            type: 'flow',
            label: 'Protective behavior',
            items: [
              'Move away or use earplugs',
              'Exposure decreases',
            ],
          },
          {
            type: 'quote',
            text: 'The protection advice became part of the rules rather than another piece of text.',
          },
          {
            type: 'subheading',
            number: 6,
            title: 'Compare VR with traditional information',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The final evaluation compared whether the immersive experience produced different outcomes from receiving the same information as text.',
            ],
          },
          {
            type: 'notes',
            items: [
              {
                title: 'VR',
                text: '10 participants completed the immersive experience.',
              },
              {
                title: 'Reading',
                text: '10 participants received equivalent information as text.',
              },
              {
                title: 'Control',
                text: '10 participants received no intervention.',
              },
            ],
          },
          {
            type: 'text',
            body: [
              'All participants completed a Knowledge, Attitudes, and Behaviors questionnaire before and after their assigned condition.',
            ],
          },
        ],
      },
      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Results',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'metrics',
            items: [
              {
                value: '30',
                text: 'Participants: 10 VR, 10 reading, 10 control.',
              },
              {
                value: '+4.6',
                text: 'Average knowledge increase in the VR group.',
              },
              {
                value: '+4.0',
                text: 'Average knowledge increase in the reading group.',
              },
              {
                value: '3',
                text: 'Connected scenarios: Learn → Experience → Act.',
              },
            ],
          },

          {
            type: 'subheading',
            title: 'VR taught effectively, but text performed similarly',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'Knowledge increased significantly in both the VR and reading conditions.',
              'The VR group improved slightly more, but the difference between the two interventions was small and not statistically significant.',
            ],
          },
          {
            type: 'quote',
            text: 'Immersion did not automatically make information more learnable than reading.',
          },

          {
            type: 'subheading',
            title: 'The stronger signal appeared in attitudes',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: 'The VR group showed positive movement in several Health Belief Model factors:',
          },
          {
            type: 'notes',
            items: [
              {
                title: 'Severity',
                text: 'Participants perceived hearing loss as more serious after the experience.',
                color: '#7cc47f',
              },
              {
                title: 'Benefits',
                text: 'Participants became more positive toward hearing-protection strategies.',
                color: '#7cc47f',
              },
              {
                title: 'Cues to action',
                text: 'Scores improved in VR while decreasing in the reading condition.',
                color: '#7cc47f',
              },
              {
                title: 'Barriers',
                text: 'The experience did not significantly reduce perceived barriers.',
                color: '#e57373',
              },
              {
                title: 'Self-efficacy',
                text: 'Participants did not become more confident in their ability to protect their hearing.',
                color: '#e57373',
              },
            ],
          },
          {
            type: 'quote',
            text: 'The experience made the consequences feel more serious, but did less to make protective behavior feel easier.',
          },

          {
            type: 'subheading',
            title: 'What testing exposed',
            image: null,
            caption: '',
          },
          {
            type: 'insights',
            labels: {
              result: 'What happened',
              decision: 'Better direction',
            },
            items: [
              {
                title: 'Pointing with a ray',
                result: 'Users reached out to touch controls directly; the immersive environment set a different expectation.',
                decision: 'Use direct touch where possible, or teach ray interaction explicitly.',
              },
              {
                title: 'Instruction panels',
                result: 'Some participants struggled with text-heavy instructions, adding unnecessary cognitive load.',
                decision: 'Replace instructions with progressive interaction and guidance in the environment.',
              },
            ],
          },

          {
            type: 'subheading',
            title: 'Limitations',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The study measured immediate knowledge and attitudes rather than long-term behavior.',
              'The sample was small and relatively homogeneous, and no dedicated usability study was completed before the final experiment.',
              'The results therefore show potential for immersive hearing-health communication, but not evidence that the experience changed lasting real-world behavior.',
            ],
          },
        ],
      },
    ],
  },

  relesys: {
    title: ['Many Brands,', 'One Platform'],
    subtitle: 'Designing branded mobile experiences within a scalable SaaS platform',

    intro: [
      'At Relesys, I designed and implemented branded mobile experiences for frontline employees across retail, hospitality, grocery, and other industries.',
      'My work focused on translating distinct brand identities into usable interfaces within an established SaaS platform, from rapid prototyping in Figma to front-end customization in CSS and LESS.',
      'The work fell into two types of assignments: **designing new client applications** and **improving live ones**.',
    ],

    notice:
      'Due to confidentiality agreements, client-specific mockups and unreleased designs cannot be shown. This case study therefore focuses on representative challenges, design decisions, and implementation patterns.',

    heroImage: '/images/Relesyscard.png',
    heroNote: 'Selected client work confidential',

    facts: [
      {
        icon: 'user',
        title: 'Role',
        text: 'UX/UI Design, Rapid Prototyping, Brand Translation, Front-End Implementation, Visual Design, Accesibility, Interaction Design, Responsive Design',
      },
      { icon: 'tools', title: 'Tools', text: 'Figma, CSS, LESS, HTML, Jira, CMS' },
      {
        icon: 'chat',
        title: 'Collaboration',
        text: 'Senior Designers, Client Success, Implementation, Solution Engineering, Sales',
      },
      { icon: 'pin', title: 'Context', text: 'Intership, Digital Designer, Relesys A/S, Fall 2025' },
    ],

    sections: [
      {
        id: 'who',
        nav: 'Who',
        label: 'Who?',
        title: 'Who was I designing for?',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'The applications served **frontline employees working in fast-paced, non-desk environments**, where information needed to be clear, recognizable, and quickly accessible.',
              'At the same time, each client organization expected the product to reflect its own brand identity while remaining consistent with the underlying Relesys platform.',
            ],
          },
          {
            type: 'cards',
            items: [
              {
                title: 'Frontline employees',
                text: 'Needed clear, accessible interfaces suited to everyday non-desk work.',
              },
              {
                icon: 'pin',
                title: 'Client organizations',
                text: 'Needed the application to feel recognizable as part of their own brand.',
              },
              {
                icon: 'chat',
                title: 'Internal teams',
                text: 'Translated client requirements, technical constraints, and business needs into actionable design input.',
              },
            ],
          },
          {
            type: 'text',
            body: 'The clients spanned multiple industries, each with different visual identities and communication needs.',
          },
          {
            type: 'notes',
            items: [
              { title: 'Hospitality' },
              { title: 'Fashion' },
              { title: 'Retail' },
              { title: 'Grocery' },
              { title: 'Manufacturing' },
            ],
          },
        ],
      },

      {
        id: 'why',
        nav: 'Why',
        label: 'Why?',
        title: 'The design challenge',
        image: '/images/relesys1.png',
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'Relesys serves many clients through the same underlying SaaS platform, but each application still needs to feel recognizably tied to its own brand.',
              'My challenge was to create that distinction without redesigning the product from scratch, balancing brand identity, usability, technical constraints, and the existing platform structure.',
            ],
          },
          {
            type: 'highlight',
            label: 'Design question',
            text: 'How can a shared SaaS platform support clearly differentiated brand experiences without compromising consistency or implementation feasibility?',
          },
        ],
      },
      {
        id: 'what',
        nav: 'What',
        label: 'What?',
        title: 'Two types of assignments',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'text',
            body: [
              'My work generally fell into **two types of assignments**: creating new branded application designs and improving existing client applications.',
            ],
          },
          {
            type: 'notes',
            numbered: true,
            items: [
              {
                title: 'New client designs',
                text: 'Translated brand identities and client requirements into new mobile experiences within the Relesys platform.',
              },
              {
                title: 'Existing application improvements',
                text: 'Refined, fixed, and extended live applications based on usability issues, visual inconsistencies, technical constraints, and new requirements.',
              },
            ],
          },
          {
            type: 'text',
            body: 'Across both types of work, I:',
            list: [
              'Created rapid prototypes in Figma;',
              'Translated brand identities into mobile interface systems;',
              'Designed responsive layouts within platform constraints;',
              'Implemented visual customizations using CSS and LESS;',
              'Worked directly within the Relesys CMS;',
              'Resolved design and implementation tasks through Jira;',
              'Collaborated across Design, Client Success, Implementation, Solution Engineering, and Sales.',
            ],
          },
        ],
      },

      {
        id: 'how',
        nav: 'How',
        label: 'How?',
        title: 'How I approached the work',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'steps',
            items: [
              { step: 'Interpret', label: 'Requirements' },
              { step: 'Translate', label: 'Brand system' },
              { step: 'Design', label: 'Within constraints' },
              { step: 'Implement', label: 'In production' },
              { step: 'Solve', label: 'Recurring problems' },
            ],
          },

          {
            type: 'subheading',
            number: 1,
            title: 'Translate requirements into design direction',
            image: null,
            caption: null,
          },
          {
            type: 'text',
            body: [
              'Projects typically began with requirements from client-facing teams describing functionality, modules, brand priorities, and implementation needs.',
              'I translated these inputs into a focused design direction before moving into visual exploration.',
            ],
          },
          {
            type: 'flow',
            items: ['Client requirements', 'Design priorities', 'Interface direction'],
          },

          {
            type: 'subheading',
            number: 2,
            title: 'Translate brand identity into product language',
            image: '/images/relesysganni.png',
            caption: null,
          },
          {
            type: 'text',
            body: [
              'I analysed color, typography, imagery, shape language, spacing, iconography, and hierarchy to identify the visual characteristics that made each brand recognizable.',
              'These characteristics were then translated into reusable interface decisions that worked within the existing product structure.',
            ],
          },
          {
            type: 'flow',
            items: [
              {
                title: 'Brand input',
                text: 'Color, typography, imagery, shape language, tone.',
              },
              {
                title: 'Interface translation',
                text: 'Tiles, hierarchy, icons, spacing, navigation.',
              },
              {
                title: 'Product expression',
                text: 'A recognizable branded experience within the shared platform.',
              },
            ],
          },

          {
            type: 'subheading',
            number: 3,
            title: 'Create distinction within a shared system',
            image: null,
            caption: null,
          },
          {
            type: 'text',
            body: [
              'Relesys already had an established product architecture, module system, HTML structure, and CMS.',
              'My role was therefore to create meaningful visual differentiation without breaking consistency, usability, or implementation feasibility.',
            ],
          },
          {
            type: 'notes',
            items: [
              { title: 'Brand expression' },
              { title: 'Platform consistency' },
              { title: 'Usability' },
              { title: 'Technical feasibility' },
            ],
          },

          {
            type: 'subheading',
            number: 4,
            title: 'Carry design into implementation',
            image: null,
            caption: null,
          },
          {
            type: 'text',
            body: [
              'My involvement continued beyond high-fidelity design into implementation within the CMS.',
              'Working with CSS and LESS required me to account for responsive behaviour, existing selectors, flex layouts, pseudo-elements, logical properties, and maintainable styling.',
            ],
          },
          {
            type: 'flow',
            items: ['Figma', 'CMS', 'CSS / LESS', 'Responsive Testing', 'Delivery'],
          },

          {
            type: 'subheading',
            number: 5,
            title: 'Design for unpredictable content',
            image: null,
            caption: null,
          },
          {
            type: 'text',
            body: [
              'Because clients could use their own imagery, I could not design around a fixed visual background. Interface elements had to remain readable and recognizable across changing content.',
              'This meant designing for variability rather than optimizing for a single ideal case.',
            ],
          },
          {
            type: 'insights',
            labels: { insight: 'Problem' },
            items: [
              {
                title: 'Text over dynamic imagery',
                insight: 'Headlines could lose contrast depending on the image selected by the client.',
                decision: 'Use a consistent image overlay and standardized title treatment.',
                why: 'The interface needed to maintain readable contrast independently of the underlying image.',
              },
              {
                title: 'Actions over dynamic imagery',
                insight: 'Contextual icons could become difficult to distinguish against certain backgrounds.',
                decision: 'Place actions on a contrasting background rather than relying on icon color alone.',
                why: 'Controls needed to remain visible regardless of the imagery behind them.',
              },
            ],
          },
        ],
      },

      {
        id: 'results',
        nav: 'Results',
        label: 'Results',
        title: 'Impact',
        image: null,
        caption: '',
        blocks: [
          {
            type: 'metrics',
            items: [
              {
                value: '2–3 days',
                text: 'Full prototype delivery time by the end of the role, compared with 1.5–2 weeks for my first prototype.',
              },
              {
                value: 'Design → code',
                text: 'Took interface decisions from Figma into the live CMS environment.',
              },
              {
                value: 'Multi-brand',
                text: 'Designed across clients with different identities, industries, and requirements.',
              },
              {
                value: 'Cross-functional',
                text: 'Worked across Design, Client Success, Sales, Implementation, and Solution Engineering.',
              },
              {
                value: 'Front-end',
                text: 'Applied CSS, LESS, responsive design, flexbox, and existing HTML structures in production work.',
              },
            ],
          },

          {
            type: 'subheading',
            title: 'Working at product scale',
            image: null,
            caption: '',
          },
          {
            type: 'text',
            body: [
              'The work **strengthened my ability to make design decisions** within an existing product ecosystem rather than treating every problem as a blank canvas.',
              'Requirements often came through multiple teams, implementation constraints were real, and design decisions had to account for users, brand identity, business priorities, technical feasibility, and delivery time simultaneously.',
            ],
          },
          {
            type: 'quote',
            text: 'The strongest solution was rarely the one with the fewest constraints, but the one that used those constraints deliberately.',
          },
        ],
      },
    ],
  },
};
