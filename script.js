const resume = {
  name: 'Matthew Gourd',
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
    'Documentation strategy',
    'Information architecture',
    'Developer portals',
    'Documentation analytics',
    'Onboarding journeys',
    'API documentation',
    'SDK documentation',
    'Markdown',
    'AsciiDoc',
    'MDX',
    'Docusaurus',
    'Hugo',
    'Antora',
    'Mintlify',
    'Scalar',
    'Git',
    'GitHub',
    'GitLab',
    'OpenAPI',
    'Swagger',
    'JSON',
    'YAML',
    'CLI testing',
    'VS Code',
    'Cursor',
    'Copilot',
    'Custom GPTs',
    'MCP servers'
  ],
  professionalSummary: `Senior technical writer with 20+ years in documentation and six years focused on developer content in high-growth fintech and SaaS environments. Strong track record in docs-as-code, developer portals, API and integration documentation, and cross-functional work with engineering teams to improve adoption and reduce friction. Particularly effective at turning complex product areas into clear onboarding journeys, scalable content structures, and maintainable documentation workflows with an AI-assisted toolchain.`,
  employmentHistory: [
    {
      jobTitle: 'Senior Technical Writer',
      startDate: 'Dec 2025',
      endDate: 'Present',
      employer: 'Backbase',
      city: 'remote',
      achievements: [
        'Produce technical documentation for solution engineers and developers working on complex banking implementations',
        'Drive adoption of standardised documentation workflows to improve consistency across distributed teams',
        'Use an AI-first workflow to extract implementation details from source code and accelerate delivery without lowering quality'
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
        'Partnered with engineers and solution teams to produce developer guides for complex banking software',
        'Championed AI tool adoption while maintaining rigorous quality standards and repeatable review practices'
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
        'Improved peer review processes and content strategy to support faster, more reliable release cycles'
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
        'Authored payment API guides and technical enablement content that supported developer adoption',
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
        'Built a developer portal from scratch using docs-as-code workflows, giving the company its first scalable developer documentation platform',
        'Wrote API, SDK, and plugin documentation for a payment integration platform, helping developers move from initial setup to successful implementation faster',
        'Established documentation analytics and feedback loops to support data-driven content optimisation'
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
        'Created Open Banking API documentation during a critical regulatory transition',
        'Launched the company\'s first developer portal in a high-growth fintech startup environment'
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
