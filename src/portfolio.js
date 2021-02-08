/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: "Jason Nordheim",
  title: "Hi, I'm Jason",
  subTitle: [
    emoji('{ "Problem Solver" : 👨‍🔧 }'),
    emoji('{ "Engineer" : 👷 }'),
    emoji('{ "Developer" : 👨‍💻 }'),
    emoji('{ "Always Learning" : 📚 }'),
  ],
  // resumeLink:
  //   'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jason-nordheim",
  linkedin: "https://www.linkedin.com/in/jasonnordheim/",
  gmail: "jason.nordheim@gmail.com",
  devTo: "https://dev.to/jasonnordheim",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Let me introduce myself... ",
  subTitle:
    "A driven Full Stack Software Developer with a background in System Administration, Automation and Data-Analysis.",
  skills: [
    emoji("✨ Always learning new skills and checking out new technologies"),
    emoji(
      "✨ Passionate about using data to increase efficiencies and drive innovation"
    ),
    emoji(
      "✨ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Mac OS", fontAwesomeClassname: "fab fa-apple" },
    { skillName: "Windows", fontAwesomeClassname: "fab fa-windows" },
    {
      skillName: "C#/.Net Framework",
      fontAwesomeClassname: "fab fa-microsoft",
    },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "Yarn", fontAwesomeClassname: "fab fa-yarn" },
    { skillName: "SQL/NoSQL", fontAwesomeClassname: "fas fa-database" },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fas fa-cloud",
    },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Ruby", fontAwesomeClassname: "fas fa-gem" },
    { skillName: "Rails", fontAwesomeClassname: "fas fa-subway" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Github", fontAwesomeClassname: "fab fa-github" },
    { skillName: "HTML", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS", fontAwesomeClassname: "fab fa-css3" },
    { skillName: "SASS", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap" },
    {
      skillName: "Authentication",
      fontAwesomeClassname: "fab fa-expeditedssl",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Flatiron School",
      logo: require("./assets/images/filatiron.jpg"),
      subHeader: "Immersive Software Engineering Bootcamp Program",
      duration: "March 2020 - September 2020",
      url: "https://flatironschool.com/",
      desc: "15 week immersive full-stack software engineering bootcamp",
      descBullets: [
        "VCS and collaborative software development using git & Github",
        "Frontend Technologies: HTML/CSS, JavaScript, React, Redux",
        "Backend Technologies: Ruby, Ruby on Rails, Sinatra, ActiveRecord, Bcrypt, SQL",
        "Emphasis on project-based-learning",
      ],
    },
    {
      schoolName: "Rochester Institute of Technology",
      logo: require("./assets/images/RIT.png"),
      subHeader: "Bachelor of Science in Management Information Systems (MIS)",
      duration: "September 2013 - December 2017",
      url: "https://www.rit.edu/",
      desc:
        "MIS program ranked top 10% in the nation. Took more than 30 credit hours in computer science courses.",
      descBullets: [
        "Completed Computer Science Foundational Courses",
        "Completed Double Minors in Digital Business (15 credit-hours) & Web Development (27 credit-hours) and concentration in Psychology",
        "Consistent Dean’s List Student with 3.49/4.00 GPA (cumulative)",
        "Involved with multiple on-campus student run organizations: American Marketing Association (AMA), Business and Technology Professionals (BTP), Delta Sigma Pi (DSP), and No Voice Zone (NVZ)",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //     progressPercentage: "90%", //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%",
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%",
  //   },
  // ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desktop Engineer",
      company: "Paychex",
      companylogo: require("./assets/images/Paychex.jpg"),
      url: "https://www.paychex.com/",
      date: "June 2018 – March 2020",
      desc:
        "Built and maintained enterprise systems supporting end-user computing, including provisioning, configuration, management, deployment, maintenance, and security",
      descBullets: [
        "Automation and scripting of using Python and C# (.NET Framework) to script the various system administration tasks",
        "Lead engineer and project manager for implementation of ZPA (Zscaler Private Access)",
        "Technical documentation via Confluence Wiki Pages",
        "Packaging and deployment of enterprise applications leveraging Powershell scripting, SCCM, Microsoft Intune (MSIX) and virtualization technologies (Citrix & VMware)",
        "Discovery, project management, and Implementation of end-user computing needs leveraging agile methodologies including sprints, stories, kanban boards, and scrums.",
      ],
    },
    {
      role: "Data Analyst & Developer",
      company: "Rochester Precision Optics",
      companylogo: require("./assets/images/RPO.jpg"),
      url: "https://www.rit.edu/",
      date: "June 2018 – March 2020",
      desc:
        "At RPO, the IT department consisted of all of 3 people, so while my primary function was data analysis, I also assisted in System Administration and technical support",
      descBullets: [
        "Created in house software solutions to provide management with analyzed supplier data in a Windows Form Application (C#/.NET) ",
        "Identification and drafting of technical requirements, use-cases, and other technical documentation to support software development",
        "Developed CLI application to validate payroll activities against hours logged in ADP",
      ],
    },
    {
      role: "Data Analyst & Developer",
      company: "Rochester Institute of Technology",
      companylogo: require("./assets/images/RIT.png"),
      url: "http://www.rpoptics.com/",
      date: "May 2016 – August 2016",
      desc:
        "Built and maintained enterprise systems supporting end-user computing, including provisioning, configuration, management, deployment, maintenance, and security",
      descBullets: [
        "Leverage relational database management systems to query, join, and sanitize data from Oracle PL/SQL databases",
        "Analyze and reduce large data-sets to provide accurate, clear and concise reports to support various university efforts including fundraising, networking and marketing activities",
        "Create dashboards charts, and other data-visualizations with Tableau, Excel, and PowerBI",
        "Update and maintain database documentation using unified modeling language (UML)",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jason_nordheim", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const projectSection = {
  title: "Projects",
  subtitle: "See what I've built 👷",
  projects: [
    {
      title: "2048",
      image: require("./assets/images/2048_logo.png"),
      link: "https://play-2048-with-me.web.app/",
      links: [
        { description: "demo", url: "https://play-2048-with-me.web.app/" },
        {
          description: "rpo",
          url: "https://github.com/jason-nordheim/react-2048",
        },
      ],
      desc: "The classic game of combining tiles to get to 2048",
      alt: "React 2048",
    },
    {
      title: "Snake",
      image: require("./assets/images/Snake.jpg"),
      links: [
        { description: "demo", url: "https://vanilla-js-snake.web.app/" },
        {
          description: "repo",
          url: "https://github.com/jason-nordheim/pure-js-snake",
        },
      ],
      link: "https://vanilla-js-snake.web.app/",
      desc:
        "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
      alt: "Pure JavaScript Snake",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle: "Just some stuff with my name on it.",

  achievementsCards: [
    {
      title: "Udemy",
      subtitle:
        "Udemy is the leading global marketplace for learning and instruction, helping more than 35 million individuals learn new skills from more than 130,000 online courses. Checkout the courses I've completed below.",
      image: require("./assets/images/UdemyLogo.png"),
      footerLink: [
        {
          name: "Web Development Masterclass",
          url:
            "https://drive.google.com/file/d/1uoOFJgDu6w7F-gbW9fTx4clNg9ea9S3j/view?usp=sharing",
        },
        {
          name: "AWS Certified Developer Associate",
          url:
            "https://drive.google.com/file/d/1qy0f675Hfva49zrhnGOtcs23AFCoXfnp/view?usp=sharing",
        },
      ],
    },
    {
      title: "LinkedIn",
      subtitle:
        "LinkedIn Learning is an online educational platform that helps you discover and develop business, technology-related, and creative skills through expert-led course videos. Checkout the courses I've completed below.",
      image: require("./assets/images/linkedin.png"),
      footerLink: [
        {
          name: "Programming Foundations: Object-Oriented Design",
          url:
            "http://www.linkedin.com/learning/programming-foundations-object-oriented-design-3?trk=flagship-lil_details_certification&trk=lil_details_certification",
        },
        {
          name: "Python for Data Science Essential Training Part 1",
          url:
            "https://www.linkedin.com/learning/python-for-data-science-essential-training-part-1/data-science-life-hacks",
        },
        {
          name: "SQL Essential Training",
          url:
            "https://www.linkedin.com/learning/sql-essential-training-3/understanding-sql",
        },
        {
          name:
            "Data Science & Analytics Career Paths & Certifications: First Steps",
          url:
            "https://www.linkedin.com/learning/data-science-analytics-career-paths-certifications-first-steps-3",
        },
        {
          name: "Programming Foundations: Algorithms",
          url:
            "https://www.linkedin.com/learning/programming-foundations-algorithms",
        },
      ],
    },
    {
      title: "PluralSight Courses",
      subtitle:
        "Pluralsight is a leader in a providing on-demand comprehensive training on the latest technologies with courses authored by seasoned industry exports, assessments, and learning paths. Checkout some of the courses I've completed below.",
      image: require("./assets/images/pluralsight.jpg"),
      footerLink: [
        {
          name: "JavaScript Variables and Types",
          url:
            "https://drive.google.com/file/d/1cm4II99IGLVLSnr7K0WKz3FpfIUUxwuJ/view?usp=sharing",
        },
        {
          name: "Python: The Big Picture",
          url:
            "https://drive.google.com/file/d/1RJMGPe1homu4VWD6Tdm4emVRe9tHnLeY/view?usp=sharing",
        },
        {
          name: "Managing AWS Operations",
          url:
            "https://drive.google.com/file/d/10Y8fcXmXK1KpOvjlbncBFYMP5LZW5hps/view?usp=sharing",
        },
        {
          name: "Dependency Injection in ASP.NET Core",
          url:
            "https://drive.google.com/file/d/1ya9gX6o3uxxz3s9XPIxKo5HszzUUnZlA/view?usp=sharing",
        },
        {
          name: "Fundamental Cloud Concepts for AWS",
          url:
            "https://drive.google.com/file/d/18FSzJfUK_jIGhxeke3ebCB8SalP-i-ff/view?usp=sharing",
        },
        {
          name: "Node.js: The Big Picture",
          url:
            "https://drive.google.com/file/d/1ce3_IixMMXvJRJUvXUJnxgyRX_8sttTj/view?usp=sharing",
        },
        {
          name: "C# Fundamentals",
          url:
            "https://drive.google.com/file/d/1iymSNZvoElBhd8J0sp-U6ArqIK8nBav2/view?usp=sharing",
        },
        {
          name: "Querying Data from PostgreSQL",
          url:
            "https://drive.google.com/file/d/15ncsoVQ1LbfNUKfrjm-BxH_xoaR4W3qR/view?usp=sharing",
        },
        {
          name: "React: Getting Started",
          url:
            "https://drive.google.com/file/d/1FcOblboKBOSBkPxvzPq3pxH7FGoFHpZR/view?usp=sharing",
        },
        {
          name: "TypeScript: The Big Picture",
          url:
            "https://drive.google.com/file/d/1VJmDsE8g_xFA2CU1SYHRKAY-o1YM6uYR/view?usp=sharing",
        },
        {
          name: "Angular Fundamentals",
          url:
            "https://drive.google.com/file/d/1ZPTG2M5of98QJ0kb3H65M1npx1yBWtpz/view?usp=sharing",
        },
        {
          name: "Spring: The Big Picture",
          url:
            "https://drive.google.com/file/d/1GhFb7C8pymmRPcVPMoTLUBArAAEoqDm6/view?usp=sharing",
        },
        {
          name: "Getting Started with Programming in Java",
          url:
            "https://drive.google.com/file/d/1FtluMDjDzeu1AIoYySuMOwqq5I-rBglF/view?usp=sharing",
        },
        {
          name: "PostgreSQL Data Manipulation Playbook",
          url:
            "https://drive.google.com/file/d/1M8I64aC8YvGRlgJ2pzUVIM7ClYyJAUYt/view?usp=sharing",
        },
        {
          name: "Domain-Driven Design in Practice",
          url:
            "https://drive.google.com/file/d/1LLGwojCcs5Si9jV_EiNl0uXIrJV43ogA/view",
        },
        {
          name: "HTML, CSS, and JavaScript: The Big Picture",
          url:
            "https://drive.google.com/file/d/1ojl9ikHaNY-nAc3xqbKtiSFELCsARBzi",
        },
        {
          name: "JavaScript Variables and Types",
          url:
            "https://drive.google.com/file/d/1cm4II99IGLVLSnr7K0WKz3FpfIUUxwuJ/view",
        },
        {
          name: "Documenting an ASP.NET Core API with OpenAPI/Swagger",
          url:
            "https://drive.google.com/file/d/1ojl9ikHaNY-nAc3xqbKtiSFELCsARBzi/view?usp=sharing",
        },
        {
          name: "Building Application with React and Flux",
          url:
            "https://drive.google.com/file/d/1gMKTMDPiKwH5Hd4XE6wv3cEFmsA0_gPq/view?usp=sharing",
        },
        {
          name: "Designing RESTful Web APIs",
          url:
            "https://drive.google.com/file/d/1gMKTMDPiKwH5Hd4XE6wv3cEFmsA0_gPq/view?usp=sharing",
        },
        {
          name: "Python for Data Analysts",
          url:
            "https://drive.google.com/file/d/1Fvo48YYl8ofDIY5lD-G9A_JhQq68lsnF/view?usp=sharing",
        },
        {
          name: "How Git Works",
          url:
            "https://drive.google.com/file/d/1YF6P9MNCWc5Xy0n2ZaSXSAkbSJzPM5iq/view?usp=sharing",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Blogs are a great way to share knowledge and experience with other developers. Here is some of the blogs I've created recently.",

  blogs: [
    {
      url: "https://dev.to/jasonnordheim/let-s-get-sassy-4onp",
      title: emoji("Let's get Sassy 💅"),
      description:
        "Sure, you can style your web applications with just CSS, but Sass or syntactically awesome stylesheets is a preprocessor for CSS that fixes many of the pain points most developers have with CSS.",
      published: "Dec 7, 2020",
      edited: "Dec 7, 2020",
    },
    {
      url: "https://dev.to/jasonnordheim/demystifying-big-1djf",
      title: "🧐 Demystifying Big 🅾️",
      description:
        "Big O is fundamental in the world of computer science, yet many developers and engineers often struggle to understand it. Let me break down the basics for you so you can more confidently and accurately discus and compare code",
      published: "Nov 29, 2020",
      edited: "Nov 30, 2020",
    },
    {
      url:
        "https://dev.to/jasonnordheim/what-are-microservices-and-why-should-you-care-21na",
      title: "What are microservices and why should you care?",
      description:
        "One common trend in web development is a transition to Microservices. Let me get you acquainted with Microservice architecture and compare it to the way we traditionally built web applications",
      published: "Nov 22, 2020",
      edited: "Nov 23, 2020",
    },
    {
      url: "https://dev.to/jasonnordheim/graphql-vs-rest-4mkl",
      title: "GraphQL vs REST",
      description:
        "Traditional APIs have been built using REST or Representational state transfer, but a new technology called GraphQL is here. Should you start using it?",
      published: "Nov 15, 2020",
      edited: "",
    },
    {
      url: "https://dev.to/jasonnordheim/debounce-performance-and-react-4de1",
      title: "Debounce, Performance and React",
      description:
        "Learn the debounce pattern, understand how using the debounce pattern can aid in performance, and see how to implement debounce in the context of a React application",
      published: "Nov 5, 2020",
      edited: "",
    },
    {
      url:
        "https://dev.to/jasonnordheim/how-javascript-came-to-dominate-web-development-3nom",
      title: "How JavaScript came to dominate web development",
      description:
        "JavaScript is inherently connected to HTML and the web. Its history has shaped its syntax and the way it operates under the hood. Come along with me in exploring JavaScripts rich history",
      published: "Oct 26, 2020",
      edited: "",
    },
    {
      url: "https://dev.to/jasonnordheim/lets-talk-typescript-18ae",
      title: "Let's talk TypeScript",
      description:
        "TypeScript is rapidly increasing in popularity. Let's dive in and understand what it is, why it exists, and the problems TypeScript hopes to solve.",
      published: "Oct 21, 2020",
      edited: "",
    },
    {
      url: "https://dev.to/jasonnordheim/getting-started-with-vue-js-3nl2",
      title: "Getting Started with Vue.js",
      description:
        "There are a ton of options when it comes to front-end frameworks. Let's take a quick look at Vue.js and see how to implement the basics.",
      published: "Aug 21, 2020",
      edited: "",
    },
    {
      url:
        "https://dev.to/jasonnordheim/an-intro-into-react-hooks-with-usestate-dnf",
      title: "An Intro into React Hooks with `useState`",
      description:
        "As of React version 16.8, React now supports functional components and hooks. Arguably one of the most important hooks is one called `useState`. Lets see how to implement `useState` in a functional component and compare it to the traditional `state` implemented in older class-based components.",
      published: "Jul 15, 2020",
      edited: "",
    },
    {
      url: "https://dev.to/jasonnordheim/the-javascript-stack-explained-2pp2",
      title: "The JavaScript Stack Explained",
      description:
        "Understanding what is happening 'behind the scenes' or 'under the hood' can be instrumental in tracking down elusive bugs. Let's take a look at how JavaScript executes statements as part of the JavaScript stack.",
      published: "May 21, 2020",
      edited: "May 21, 2020",
    },
    {
      url:
        "https://dev.to/jasonnordheim/an-introduction-to-javascript-classes-methods-1pdp",
      title: "An Introduction to JavaScript Classes & Methods",
      description:
        "With ES2015 and the introduction of classes in JavaScript, developers now have the option to write JavaScript code using the object-oriented paradigm instead of functional. Here's the basics you need to know to get started.",
      published: "May 21, 2020",
      edited: "May 21, 2020",
    },
    {
      url:
        "https://dev.to/jasonnordheim/key-concepts-to-get-started-with-rails-apis-22df",
      title: "Key Concepts to get Started with Rails APIs",
      description:
        "Rails is a powerful framework for building full-stack web applications quickly. Here are the fundamental concepts you need to know to successfully implement a Rails application",
      published: "Apr 21, 2020",
      edited: "",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),
  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/",
  //   },
  // ],
  // display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  // ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's talk ☎️"),
  subtitle:
    "Interested in discussing a project? Just want to say hi? I'd love to hear from you.",
  number: "315-254-7866",
  emailAddress: "jason.nordheim@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "jason_nordheim", //Replace "twitter" with your twitter username without @
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
  projectSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
