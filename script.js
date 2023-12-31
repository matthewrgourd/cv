/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Matt Gourd',
  lastName: '',
  jobTitle: 'Manager, Documentation',
  city: 'London',
  postalCode: 'N2',
  country: '',
  phone: '(+44) 7498719486',
  email: 'mattgourd@gmail.com',
  education: [
    {
      school: 'University of Wales',
      degree: 'BSc (Hons)',
      graduationDate: '1995',
      description: 'Technology Management (1 year completed at 2:1 level)'
    }
  ],
  links: [
    {
      label: 'Portfolio',
      link: 'https://matthewrgourd.github.io/portfolio'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mattgourd'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/matthewrgourd'
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/clearpattern'
    }
  ],
  skills: [
    'Docs-as-Code',
    'Static site generators',
    'Hugo',
    'Antora',
    'Docusaurus',
    'Wordpress',
    'Markdown',
    'AsciiDoc',
    'HTML',
    'CSS',
    'JavaScript',
    'XML',
    'JSON',
    'YAML',
    'OpenAPI',
    'Swagger',
    'Postman',
    'Git'
  ],
  languages: ['English'],
  professionalSummary: `Documentation manager with over 20 years in digital. Cheerful, enthusiastic, and approachable to colleagues at all levels.\n 
  Interests: FinTech, neobanks, digital banking, cloud banking, digital wallets, loan origination, online payments.`,
  employmentHistory: [
    {
      jobTitle: 'Manager, Documentation',
      startDate: 'July 2023',
      endDate: 'current',
      employer: 'Backbase',
      city: 'remote',
      achievements: [
        'Manage a team of three technical writers, providing guidance, training, and mentorship to ensure optimal performance and cohesiveness within the documentation team.',
        'Work closely with backend and frontend engineering teams to capture and communicate technical information effectively, ensuring a seamless synergy between development and documentation efforts.',
        'Contribute to product enhancement and user satisfaction by creating detailed overviews, setup guides, configuration instructions, and reference materials that improve user comprehension and product utilization.',
        'Ensure that documentation meets high quality standards, adheres to best practices, and consistently delivers value to customers.',
              ]
    },
    {
      jobTitle: 'Senior Technical Writer',
      startDate: 'Nov 2021',
      endDate: 'July 2023',
      employer: 'Backbase',
      city: 'remote',
      achievements: [
        'Enhanced the quality of functional, procedural, and reference documentation for a loan origination software product tailored to banks and credit unions. These improvements contributed to a more comprehensive and user-friendly resource for clients.',
        'Ensured compliance with the Google Developer Documentation Style Guide, implementing consistent architecture and style across all documentation. This adherence to industry best practices enabled improved user comprehension and satisfaction.',
        'Collaborated effectively with fellow technical writers and key stakeholders to optimize internal processes. These efforts resulted in increased efficiency and smoother documentation development workflows, leading to improved product delivery timelines.',
        'Played a vital role in enhancing the UX copy within the product, collaborating closely with frontend engineers to implement these improvements effectively. This work contributed to a better user experience for our customers.',
      ]
    },
    {
      jobTitle: 'Technical Account Manager',
      startDate: 'May 2021',
      endDate: 'Oct 2021',
      employer: 'Viva Wallet',
      city: 'remote',
      achievements: [
        'Took ownership of client queries, working independently or co-ordinating with colleagues in Sales Success, Product and Development teams. In the event of platform instabilities, software bugs or loss of service, escalated to the Core team.',
        'Wrote and published technical documentation for the Viva Wallet Developer Portal. Established a Docs-as-Code approach with Markdown for content authoring, a static website generator for online publishing, and GitHub for version control.',
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Jan 2019',
      endDate: 'Apr 2021',
      employer: 'Viva Wallet',
      city: 'remote',
      achievements: [
        'Lead technical writer for Viva Wallet. Developed comprehensive web-based developer resources for payment APIs, online checkouts, and e-commerce plugins.',
      ]
    },
    {
      jobTitle: 'Digital Content Officer',
      startDate: 'Apr 2018',
      endDate: 'Dec 2018',
      employer: 'University of the Arts',
      city: 'London',
      achievements: [
        'Developed online content and forms for the University of the Arts. Migrated content to a new website platform.',
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Sep 2017',
      endDate: 'Feb 2018',
      employer: 'ipagoo',
      city: 'London',
      achievements: [
        'Wrote API documentation and technical blog posts for a FinTech in the Open Banking space. Introduced a standardised look to all digital content, and built a developer website from the ground up.',
      ]
    },
    {
      jobTitle: 'Technical Writer',
      startDate: 'Jun 2016',
      endDate: 'May 2017',
      employer: 'MIRACL',
      city: 'London',
      achievements: [
        'Wrote user guides to accompany a zero-factor authentication platform. Tested and documented encryption products on AWS servers and VMs.',
      ]
    }
  ],
  photo: 'https://res.cloudinary.com/diy2hv1ds/image/upload/v1701097654/matt-gourd_mgozgl.png',
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