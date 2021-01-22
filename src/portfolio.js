/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Jason Nordheim',
  title: "Hi, I'm Jason",
  subTitle: emoji(
    '[ {Problem solver,🔨},{Engineer, 👷}, { Runner, 🏃‍♂️}]'
  ),
  // resumeLink:
  //   'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/jason-nordheim',
  linkedin: 'https://www.linkedin.com/in/jasonnordheim/',
  gmail: 'jason.nordheim@gmail.com',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'Let me introduce myself... ',
  subTitle: 'A driven Full Stack Software Developer with a background in System Administration, Automation and Data-Analysis.',
  skills: [
    emoji(
      '→ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('→ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '→ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: 'JavaScript', fontAwesomeClassname: 'fab fa-js' },
    { skillName: 'React', fontAwesomeClassname: 'fab fa-react' },
    { skillName: 'Node.js', fontAwesomeClassname: 'fab fa-node' },
    { skillName: 'npm', fontAwesomeClassname: 'fab fa-npm' },
    { skillName: 'SQL/NoSQL', fontAwesomeClassname: 'fas fa-database' },
    { skillName: 'Google Cloud Platform', fontAwesomeClassname: 'fas fa-cloud' },
    { skillName: 'Angular', fontAwesomeClassname: 'fab fa-angular' },
    { skillName: 'Firebase', fontAwesomeClassname: 'fas fa-fire' },
    { skillName: 'Python', fontAwesomeClassname: 'fab fa-python' },
    { skillName: 'Ruby', fontAwesomeClassname: 'fas fa-gem' },
    { skillName: 'Passport.js', fontAwesomeClassname: 'fas fa-passport' },
    { skillName: 'Git', fontAwesomeClassname: 'fab fa-github' },
    { skillName: 'HTML', fontAwesomeClassname: 'fab fa-html5' },
    { skillName: 'CSS', fontAwesomeClassname: 'fab fa-css3-alt' },
    { skillName: 'SASS', fontAwesomeClassname: 'fab fa-sass', }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Flatiron School',
      logo: require('./assets/images/filatiron.jpg'),
      subHeader: 'Immersive Software Engineering Bootcamp Program',
      duration: 'March 2020 - September 2020',
      desc: '15 week immersive full-stack software engineering bootcamp',
      descBullets: [
        'VCS and collaborative software development using git & Github',
        'Frontend Technologies: HTML/CSS, JavaScript, React, Redux',
        'Backend Technologies: Ruby, Ruby on Rails, Sinatra, ActiveRecord, Bcrypt, SQL',
        'Emphasis on practice-based-learning',
      ],
    },
    {
      schoolName: 'Rochester Institute of Technology',
      logo: require('./assets/images/RIT.png'),
      subHeader: 'Bachelor of Science in Management Information Systems (MIS)',
      duration: 'September 2013 - December 2017',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Double Minors in Digital Business & Web Development', 'Dean’s List Student with 3.49/4.00 GPA', 'Senior Vice President, Newsletter Chair of Delta Sigma Pi - Epsilon Lambda Chapter', 'President of Lowenthal Service Group'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Desktop Engineer',
      company: 'Paychex',
      companylogo: require('./assets/images/Paychex.jpg'),
      date: 'June 2018 – March 2020',
      desc:
        'Built and maintained enterprise systems supporting end-user computing, including provisioning, configuration, management, deployment, maintenance, and security',
      descBullets: [
        'Automation and scripting of using Python and C# (.NET Framework) to script the setup, configuration and maintenance of enterprise systems and software across more than 20,000 systems (Windows & Mac) including more than 2,000 virtualized systems',
        'Lead engineer and project manager for implementation of ZPA (Zscaler Private Access)',
        'Technical documentation via Confluence Wiki Pages',
        'Packaging and deployment of enterprise applications leveraging Powershell scripting, SCCM, Microsoft Intune (MSIX) and virtualization technologies (Citrix & VMware)',
        'Discovery, project management, and Implementation of end-user computing needs leveraging agile methodologies including sprints, stories, kanban boards, and scrums.'
      ],
    },

  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'jason_nordheim', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const projects = {
  title: 'Projects',
  subtitle: 'See what I\'ve built 👷',
  projects: [
    {
      title: '2048',
      image: require('./assets/images/2048_logo.png'),
      link: 'https://play-2048-with-me.web.app/',
      desc: 'The classic game of combining tiles to get to 2048',
      alt: 'React 2048',
    },
    {
      title: 'Snake',
      image: require('./assets/images/Snake.jpg'),
      link: 'https://vanilla-js-snake.web.app/',
      desc: 'Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript',
      alt: 'Pure JavaScript Snake'
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements & Certifications 🏆 '),
  subtitle:
    'Just some stuff with my name on it.',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: null,
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: null,
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: null,
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'Blogs are a great way to share knowledge and experience with other developers. Here is some of the blogs I\'ve created recently.',

  blogs: [
    {
      url: '',
      title: 'title',
      description: 'description',
    },
    {
      url: '',
      title: 'title',
      description: 'description',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '315-254-7866',
  emailAddress: 'jason.nordheim@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'jason_nordheim', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects as bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
