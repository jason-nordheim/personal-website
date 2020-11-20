export const intros = [
  { typewriter: "a software engineer 👨‍💻", short: "software engineer" },
  { typewriter: "a developer 💻", short: "developer" },
  { typewriter: "an innovator 💥", short: "innovator" },
  { typewriter: "a problem-solver 🎉", short: "problem-solver" },
  { typewriter: "a nerd 🤓", short: "nerd" },
  { typewriter: "a photographer 📸", short: "photography" },
];

export const categories = {
  work: "work",
  contact: "contact",
  networking: "networking",
  collaboration: "collaboration",
  personal: "personal",
  experience: 'experience'
};

// const colors = {
//     [categories.work]: '#8800cc', //salmon  
//     [categories.contact]: '#2a1dc8', // blue 
//     [categories.networking]: '#2a1dc8', // blue 
//     [categories.collaboration]: '#2a1dc8', // blue 
//     [categories.personal]: '#0683b1', // purple 
//     [categories.experience]: '#076da1' // teal-blue  
// }

const routes = {
    [categories.work]: '/projects',  // light blue 
    [categories.contact]: '/contact',  // yellow 
    [categories.networking]: '/contact',  // orange 
    [categories.collaboration]: '/contact', //salmon  
    [categories.personal]: '/about', // purple 
    [categories.experience]: '/about' // teal 
}



export const getActionRoute = (category) => {

}

export const actions = [
  {
    text: "Checkout your projects!",
    category: categories.work,
  },
  {
    text: "Collaborate on a project!",
    category: categories.collaboration,
  },
  {
    text: "See your bucket list.",
    category: categories.personal,
  },
  {
    text: "Looking for a mentor",
    category: categories.networking,
  },
  {
    text: "Discuss a position/opportunity",
    category: categories.work,
  },
  {
    text: "See what skills you have.",
    category: categories.experience,
  },{
      text: 'See where you\'ve worked.', 
      category: categories.personal, 
  }
];
