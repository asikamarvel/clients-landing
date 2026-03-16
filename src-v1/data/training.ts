export interface TrainingTrack {
  title: string;
  icon: string;
  topics: string[];
  featured?: boolean;
}

export const trainingTracks: TrainingTrack[] = [
  {
    title: 'AI & Machine Learning',
    featured: true,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-3 8h10l-3-8c1-1 2-2 2-4a4 4 0 0 0-4-4z"/><path d="M8 18h8"/><path d="M9 22h6"/></svg>',
    topics: [
      'Prompt Engineering & LLM Integration',
      'Building AI Agents & Agentic Systems',
      'Machine Learning Foundations',
      'AI for Business Decision-Making',
      'Generative AI Applications',
      'Responsible AI & Ethics',
    ],
  },
  {
    title: 'Web Development',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
    topics: [
      'Modern HTML, CSS & JavaScript',
      'React, Next.js & Astro',
      'Backend with Node.js & Python',
      'API Design & Integration',
      'Performance Optimization',
    ],
  },
  {
    title: 'Mobile Development',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    topics: [
      'React Native & Flutter',
      'iOS & Android Fundamentals',
      'Cross-Platform Architecture',
      'Mobile UI/UX Best Practices',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    topics: [
      'AWS, Azure & GCP Essentials',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Infrastructure as Code',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    topics: [
      'Network Security Fundamentals',
      'Ethical Hacking & Pen Testing',
      'Security Compliance & Auditing',
      'Incident Response',
    ],
  },
  {
    title: 'Data Analytics',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    topics: [
      'Python for Data Science',
      'SQL & Database Management',
      'Data Visualization with Power BI',
      'Business Intelligence',
    ],
  },
];
