/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Matt',
  lastName: 'Gourd',
  jobTitle: 'Manager, Documentation',
  city: 'London',
  postalCode: 'N2',
  country: 'UK',
  phone: '(+44)7498719486',
  email: 'mattgourd@gmail.com',
  education: [
    {
      school: 'University of Wales',
      degree: 'BSc',
      graduationDate: '1995',
      description: 'Technology Management (1 year completed)'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/matthewrgourd'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mattgourd/'
    }
  ],
  skills: [
    'Markdown',
    'AsciiDoc',
    'HTML',
    'CSS',
    'XML',
    'JSON',
    'YAML',
    'OpenAPI',
    'Swagger',
    'Postman',
    'Git',
    'Docs-as-Code',
    'Agile'
  ],
  languages: ['English'],
  professionalSummary: `Documentation manager with over 20 years in digital. Cheerful, enthusiastic, and approachable to colleagues at all levels.\n 
  Interests: FinTech, neobanks, digital banking, cloud banking, digital wallets, loan origination, online payments, e-commerce, money transfer, blockchain, cryptocurrency.`,
  employmentHistory: [
    {
      jobTitle: 'Manager, Documentation',
      startDate: 'July 2023',
      endDate: 'Present',
      employer: 'Backbase',
      city: 'Remote',
      achievements: [
              ]
    },
    {
      jobTitle: 'Senior Technical Writer',
      startDate: 'Nov 2021',
      endDate: 'July 2023',
      employer: 'Backbase',
      city: 'Remote',
      achievements: [
        'Manage and expand functional, procedural, and reference documentation released with a loan origination software product sold to banks.',
        'Improve documentation architecture and style, adhering to the Google developer documentation style guide.',
        'Streamline internal processes with other technical writers and stakeholders to deliver greater efficiency.',
      ]
    },
    {
      jobTitle: 'Technical Account Manager',
      startDate: 'May 2021',
      endDate: 'Oct 2021',
      employer: 'Viva Wallet',
      city: 'Remote',
      achievements: [
        'Took ownership of client queries, working independently or co-ordinating with colleagues in Sales Success, Product and Development teams. In the event of platform instabilities, software bugs or loss of service, expedited issues to the Core team.',
        'Wrote and published technical documentation for the Viva Wallet Developer Portal. Established a Docs-as-Code approach with Markdown for content authoring, a static website generator for online publishing, and GitHub for version control.',
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Jan 2019',
      endDate: 'Apr 2021',
      employer: 'Viva Wallet',
      city: 'Remote',
      achievements: [
        'Developed comprehensive web-based developer resources for payment APIs, online checkouts, and e-commerce plugins.',
        'Built a brand-new developer portal from scratch.',
        'Introduced Docs-as-Code approach to documentation.',
        'Enhanced and extended API reference material.',
      ]
    },
    {
      jobTitle: 'Digital Content Officer',
      startDate: 'Apr 2018',
      endDate: 'Dec 2018',
      employer: 'University of the Arts',
      city: 'London',
      achievements: [
        'Developed online content and forms.',
        'Migrated content to a new website platform.',
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Sep 2017',
      endDate: 'Feb 2018',
      employer: 'ipagoo',
      city: 'London',
      achievements: [
        'Wrote API documentation and technical blog posts for a FinTech in the Open Banking space.',
        'Brought in a standardised look to all digital content, and built a developer portal from the ground up.',
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Jun 2016',
      endDate: 'May 2017',
      employer: 'MIRACL',
      city: 'London',
      achievements: [
        'Wrote user guides to accompany a zero-factor authentication platform.', 
        'Peer-reviewed MIRACL SDK developer support material.', 
        'Tested and documented encryption products on AWS servers and VMs.',
      ]
    }
  ],
  photo: 'https://res.cloudinary.com/diy2hv1ds/image/upload/v1689492027/the-master-square-removebg-whitebg_mpz7uq.png',
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