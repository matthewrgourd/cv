/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Juan David',
  lastName: 'Nicholls',
  jobTitle: 'Full Stack Developer, Open Source Contributor',
  city: 'Medellin',
  postalCode: '050023',
  country: 'Colombia',
  phone: '+573113101122',
  email: 'jdnichollsc@hotmail.com',
  education: [
    {
      school: 'Universidad de Medellín',
      degree: 'Bachelor',
      graduationDate: '2016',
      description: 'Software Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/jdnichollsc'
    },
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/jdnichollsc'
    },
    {
      label: 'Website',
      link: 'https://bio.link/jdnichollsc'
    },
    {
      label: 'Side projects',
      link: 'https://github.com/proyecto26'
    }
  ],
  skills: [
    'Solidity',
    'C#',
    'JavaScript',
    'TypeScript',
    'NodeJS/NestJS',
    'ReactJS',
    'React Native',
    'Phaser',
    'Ionic',
    'Angular',
    'Firebase',
    'NativeScript',
    'Unity',
    'ASP.NET',
    'Azure',
    'PostgreSQL',
    'MongoDB'
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `Developer with a background in web, mobile and game development, having 10+ years of practice with a passion for open-source projects and a commitment to delivering optimal solutions.
    Great enthusiastic teamwork, considered helpful, creative, assertive and cautious.`,
  employmentHistory: [
    {
      jobTitle: 'Tech Lead / Full-Stack Developer',
      startDate: 'May 2021',
      endDate: 'Present',
      employer: 'Zagalabs',
      city: 'Remote',
      achievements: [
        'Led code refactors using best practices with Angular & NgRx to improve code reusability from web and mobile apps.',
        'Created demos and collaborated with the team for integrations with third-party providers like Uber Eats.'
      ]
    },
    {
      jobTitle: 'Front-End Developer / Tech Lead',
      startDate: 'Mar 2017',
      endDate: 'Apr 2021',
      employer: 'BevyUp (Acquired by Nordstrom) - S4N',
      city: 'Remote',
      achievements: [
        'Joined as the first remote employee and worked with the founders to improve the performance and UX of the apps according to the business goals.',
        'Led team of 5 engineers and Coordinate with other teams to build a modular mobile app for iOS and Android with React Native.',
        'Developed native integrations to improve the UX of mobile apps, reaching more than 3 million downloads with Open Source side projects.',
      ]
    },
    {
      jobTitle: 'Consultant and Software Architect',
      startDate: 'Nov 2016',
      endDate: 'Mar 2017',
      employer: 'MVM Ingeniería de software',
      city: 'Medellín/Colombia',
      achievements: [
        'Created the baseline for the development of reactive apps using new technologies such as MeteorJS and GraphQL for rapid prototyping.',
        'Contributed to configure continuous integration pipelines for new projects through cloud services with Azure and Visual Studio Team Services.'
      ]
    },
    {
      jobTitle: 'Senior Developer / Tech Lead',
      startDate: 'Oct 2014',
      endDate: 'Nov 2016',
      employer: 'Yuxi Global',
      city: 'Medellín/Colombia',
      achievements: [
        'Created a course about JavaScript Patterns for the company.',
        'Defined baseline for cross-platform mobile applications using new technologies, with these results the company became an Ionic Trusted Partner.',
        'Help engineers grow by guiding them through the right challenges, developing self-confidence and soft skills by delegating new responsibilities through a mentoring process.'
      ]
    },
    {
      jobTitle: 'Tech Lead',
      startDate: 'Jul 2014',
      endDate: 'Oct 2014',
      employer: '1Cero1 Software',
      city: 'Medellín/Colombia',
      achievements: [
        'Designed baselines for mobile application development using PhoneGap/Cordova with Ionic Framework.',
        'Trained the team for the implementation of new methodologies such as ALM for the management of applications.'
      ]
    },
    {
      jobTitle: 'Semi-Senior Analyst Developer',
      startDate: 'Feb 2014',
      endDate: 'Jun 2014',
      employer: 'Aerolínea de Antioquia',
      city: 'Medellín/Colombia',
      achievements: [
        `Help the decision-making process of the company, performing research and developing ideas to migrate the company's web portal using CMS based on ASP.NET.`
      ]
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'Jul 2012',
      endDate: 'Jan 2014',
      employer: 'Pacifica Diseño',
      city: 'Medellín/Colombia',
      achievements: [
        'Designed templates with ASP.NET MVC to avoid using Server-side controls (WebForms) for a better separation of concerns (KISS principle).',
        'Defined and implemented a Code-First approach, using ORMs such as Entity Framework to manipulate the database from code.'
      ]
    }
  ],
  photo: 'https://s3.eu-west-1.amazonaws.com/resumedone-eu-west-1/AxajI58Ph-photo.png',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()