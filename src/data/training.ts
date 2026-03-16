export interface TrainingTrack {
  title: string;
  icon: string;
  topics: string[];
  featured?: boolean;
}

const iconAI = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>';
const iconWeb = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>';
const iconMobile = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>';
const iconCloud = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>';
const iconSecurity = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>';
const iconData = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>';

export const trainingTracks: TrainingTrack[] = [
  {
    title: 'AI & Machine Learning',
    icon: iconAI,
    featured: true,
    topics: [
      'Prompt engineering and advanced LLM techniques',
      'AI agent development and orchestration',
      'Machine learning fundamentals and applied ML',
      'Generative AI for text, code, and media',
      'Responsible AI and ethical deployment',
    ],
  },
  {
    title: 'Web Development',
    icon: iconWeb,
    topics: [
      'Modern frontend frameworks (React, Next.js, Astro)',
      'Backend development and API architecture',
      'Full-stack application development',
      'Performance optimization and accessibility',
    ],
  },
  {
    title: 'Mobile Development',
    icon: iconMobile,
    topics: [
      'React Native and Flutter development',
      'iOS and Android platform fundamentals',
      'Mobile UI/UX design principles',
      'App deployment and lifecycle management',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: iconCloud,
    topics: [
      'Cloud infrastructure (AWS, Azure, GCP)',
      'CI/CD pipeline design and implementation',
      'Containerization and orchestration',
      'Infrastructure as code and automation',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: iconSecurity,
    topics: [
      'Security fundamentals and threat modeling',
      'Application security and secure coding',
      'Network security and monitoring',
      'Compliance frameworks and audit preparation',
    ],
  },
  {
    title: 'Data & Analytics',
    icon: iconData,
    topics: [
      'Data analysis and visualization',
      'SQL and database management',
      'Business intelligence and reporting',
      'Data pipeline architecture',
    ],
  },
];
