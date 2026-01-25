/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Matthew',
  lastName: 'Gourd',
  jobTitle: 'Senior Technical Writer',
  city: 'London',
  postalCode: '',
  country: '',
  phone: '',
  email: 'mattgourd@gmail.com',
  education: [
    {
      school: 'University of Wales',
      degree: 'BSc (Hons) Technology Management',
      graduationDate: '',
      description: 'Part-completed, achieved 2:1 in first year'
    },
    {
      school: 'Marling Grammar School',
      degree: '10 GCSE passes, 2 A-Level passes',
      graduationDate: '',
      description: 'English and Art'
    }
  ],
  links: [
    {
      label: 'Website',
      link: 'https://mattgourd.com'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mattgourd'
    }
  ],
  skills: [
    'Docs-as-Code',
    'Markdown',
    'AsciiDoc',
    'MDX',
    'Hugo',
    'Antora',
    'Mintlify',
    'Confluence',
    'Jira',
    'Git',
    'GitHub',
    'VS Code',
    'Cursor',
    'Copilot',
    'Custom GPTs',
    'MCP servers',
    'OpenAPI',
    'Swagger',
    'JSON',
    'YAML'
  ],
  professionalSummary: `Accomplished technical writing specialist driving developer adoption in high-growth fintech and SaaS companies. Expert at transforming complex engineering concepts into clear documentation that accelerates product success. Proven track record in API documentation and developer enablement. Advocate for modern docs-as-code workflows and AI-enhanced productivity.`,
  employmentHistory: [
    {
      jobTitle: 'Senior Technical Writer',
      startDate: 'Dec 2025',
      endDate: 'Present',
      employer: 'Backbase',
      city: 'remote',
      achievements: [
        'Produce extensive technical documentation for solution engineers working with bank clients',
        'Drive adoption of standardised workflows to improve consistency across development teams',
        'Use an AI-first workflow to extract details from source code and accelerate documentation'
      ]
    },
    {
      jobTitle: 'Documentation Manager',
      startDate: 'Jul 2023',
      endDate: 'Nov 2025',
      employer: 'Backbase',
      city: 'remote',
      achievements: [
        'Lead distributed team of technical writers, enhancing collaboration, productivity, and growth',
        'Partnered with engineers to produce developer guides for complex banking software',
        'Championed AI tool adoption while maintaining rigorous quality standards'
      ]
    },
    {
      jobTitle: 'Senior Technical Writer',
      startDate: 'Nov 2021',
      endDate: 'Jul 2023',
      employer: 'Backbase',
      city: 'remote',
      achievements: [
        'Created comprehensive technical and integration documentation for global banking software',
        'Implemented the Google Developer Documentation Style Guide across EMEA teams',
        'Enhanced peer review processes and content strategy for fast-paced product release cycles'
      ]
    },
    {
      jobTitle: 'Technical Account Manager',
      startDate: 'May 2021',
      endDate: 'Oct 2021',
      employer: 'Viva Wallet',
      city: 'remote',
      achievements: [
        'Served as primary technical liaison for enterprise clients during high-stakes system incidents',
        'Authored comprehensive payment API guides that improved developer adoption rates',
        'Built a fully automated docs-as-code pipeline using GitHub and Markdown'
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Jan 2019',
      endDate: 'Apr 2021',
      employer: 'Viva Wallet',
      city: 'remote',
      achievements: [
        'Built a developer portal from scratch, accelerating developer community growth',
        'Wrote comprehensive API, SDK, and plugin documentation for payment integration platform',
        'Established documentation analytics to drive data-driven content optimisation'
      ]
    },
    {
      jobTitle: 'Digital Content Officer',
      startDate: 'Apr 2018',
      endDate: 'Dec 2018',
      employer: 'University of the Arts London (UAL)',
      city: 'London',
      achievements: [
        'Led large-scale content migration during CMS transition impacting more than 20,000 students',
        'Redesigned online forms and workflows to support diverse student population',
        'Collaborated across IT and academic departments to ensure seamless digital transformation'
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Sep 2017',
      endDate: 'Feb 2018',
      employer: 'ipagoo',
      city: 'London',
      achievements: [
        'Created comprehensive Open Banking API documentation during critical regulatory transition',
        'Launched the company\'s first developer portal in high-growth fintech startup environment'
      ]
    },
    {
      jobTitle: 'Technical Writer (Contract)',
      startDate: 'Jun 2016',
      endDate: 'May 2017',
      employer: 'MIRACL',
      city: 'London',
      achievements: [
        'Documented complex cryptographic SDKs and multi-factor authentication platforms',
        'Conducted technical reviews and testing on AWS infrastructure for worldwide deployment'
      ]
    }
  ],
  photo: './matt-profile-photo2.png',
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