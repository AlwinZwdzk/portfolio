import React from 'react';
import { siteConfig } from '@/config/site';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: `${siteConfig.name} Portfolio`,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        mainEntity: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        givenName: 'Alwin',
        familyName: 'Zawadzki',
        jobTitle: 'Full-stack Developer',
        description:
          'Computer Science Bachelor graduate from Lens Institute of Technology, seeking an international internship (Erasmus+ program) in software engineering.',
        url: siteConfig.url,
        image: `${siteConfig.url}/images/avatar.webp`,
        email: 'alwin.zawadzki@gmail.com',
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        knowsLanguage: ['French', 'English'],
        knowsAbout: [
          'Software Engineering',
          'Full-stack Web Development',
          'TypeScript',
          'JavaScript',
          'React',
          'Next.js',
          'Python',
          'Flask',
          'Java',
          'Spring',
          'PHP',
          'Laravel',
          'Tailwind CSS',
          'PostgreSQL',
          'MySQL',
          'Docker',
          'Git',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Lens Institute of Technology (IUT de Lens)',
          url: 'http://www.iut-lens.univ-artois.fr/',
        },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Bachelor of Technology in Computer Science (BUT Informatique)',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
