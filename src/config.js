module.exports = {
  siteTitle: 'Felix Nyandieka | Software Engineer',
  siteDescription:
    'Felix is a Software Engineer based in Nairobi, Kenya. Mainly builds software using JavaScript and Python technologies among others',
  siteKeywords:
    'Felix Nyandieka, Felix, Nyandieka, nyandiekaFelix, software engineer, front-end engineer, back-end engineer, full-stack engineer, web developer, javascript, vue, react, python, flask, django',
  siteUrl: 'https://nyandiekafelix.github.io', // nyandiekafelix.surge.sh
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Felix Nyandieka',
  location: 'Nairobi, Kenya',
  email: 'nyandiekafelix@gmail.com',
  github: 'https://github.com/nyandiekaFelix',
  twitterHandle: '@Nyandieka__',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nyandiekaFelix',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nyandieka-f-330046115/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Nyandieka__',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#work',
    },
    /*{
      name: 'Blog',
      url: '/blog',
    },*/
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    accent: '#F25555' //aqua: '#00ffff',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
