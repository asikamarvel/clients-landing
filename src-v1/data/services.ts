export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  heroImage: string;
  offerings: string[];
  approach: string[];
}

// Lucide-style SVG icons
const icons = {
  web: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
  software: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-3 8h10l-3-8c1-1 2-2 2-4a4 4 0 0 0-4-4z"/><path d="M8 18h8"/><path d="M9 22h6"/></svg>',
  erp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/></svg>',
  transform: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
  consult: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
};

export const services: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design & Management',
    shortTitle: 'Web Design',
    tagline: 'Websites that work as hard as you do',
    description: 'We design and build responsive, high-performance websites that represent your brand and convert visitors into customers. From custom builds to CMS-powered platforms, we handle the full lifecycle — design, development, deployment, and ongoing management.',
    icon: icons.web,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    offerings: [
      'Custom responsive website design',
      'CMS integration (WordPress, Strapi, headless)',
      'E-commerce development',
      'Website performance optimization',
      'SEO and accessibility compliance',
      'Ongoing maintenance and support',
    ],
    approach: [
      'We start with understanding your business goals and target audience',
      'Design mockups and prototypes for your approval before any coding begins',
      'Build with clean, modern code using the latest frameworks and standards',
      'Thorough testing across devices and browsers before launch',
      'Post-launch support with analytics and iterative improvements',
    ],
  },
  {
    slug: 'app-development',
    title: 'App Design & Development',
    shortTitle: 'App Development',
    tagline: 'Mobile experiences your users will love',
    description: 'We build native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android. From concept to deployment and beyond, our team handles the full product lifecycle with an emphasis on performance, usability, and scalability.',
    icon: icons.app,
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    offerings: [
      'iOS and Android native development',
      'Cross-platform apps (React Native, Flutter)',
      'UI/UX design and prototyping',
      'App Store optimization and deployment',
      'Backend API development',
      'Post-launch maintenance and updates',
    ],
    approach: [
      'Discovery workshops to define features and user flows',
      'Iterative design with interactive prototypes',
      'Agile development with regular sprint demos',
      'Comprehensive QA and device testing',
      'Deployment support and ongoing iteration based on user feedback',
    ],
  },
  {
    slug: 'software-agents',
    title: 'Software, Agents & Agentic AI',
    shortTitle: 'Software & AI',
    tagline: 'Intelligent systems that think, adapt, and execute',
    description: 'We develop custom software solutions, AI agents, and agentic AI systems that automate workflows, make intelligent decisions, and integrate seamlessly with your existing infrastructure. From classical software engineering to cutting-edge LLM-powered agents, we build tools that give your business a technical edge.',
    icon: icons.software,
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    offerings: [
      'Custom software development',
      'AI agent design and deployment',
      'Multi-agent (agentic) system architecture',
      'LLM integration and prompt engineering',
      'Workflow automation and process optimization',
      'API development and third-party integration',
    ],
    approach: [
      'Audit your current workflows to identify automation opportunities',
      'Design agent architectures with clear goals, guardrails, and evaluation criteria',
      'Build iteratively with rapid prototyping and user testing',
      'Deploy with monitoring, logging, and human-in-the-loop fallbacks',
      'Continuous improvement through data-driven optimization',
    ],
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Development, Customization & Support',
    shortTitle: 'ERP Solutions',
    tagline: 'Your operations, unified and optimized',
    description: 'We help businesses implement, customize, and maintain Enterprise Resource Planning systems that unify operations across departments. Whether you need a fresh Odoo installation, SAP customization, or a fully bespoke ERP solution, we deliver systems that scale with your growth.',
    icon: icons.erp,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    offerings: [
      'ERP system selection and consultation',
      'Odoo implementation and customization',
      'SAP configuration and module development',
      'Custom ERP development from scratch',
      'Data migration and system integration',
      'Training, support, and maintenance',
    ],
    approach: [
      'Business process analysis and requirements gathering',
      'System architecture design and platform selection',
      'Phased implementation to minimize business disruption',
      'Staff training and change management support',
      'Ongoing technical support and system optimization',
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Business & Digital Transformation',
    shortTitle: 'Transformation',
    tagline: 'Modernize your operations for the digital era',
    description: 'We guide organizations through the complex process of digital transformation — from strategy to execution. Whether you are migrating legacy systems, building a digital-first culture, or rethinking your IT infrastructure, we bring the expertise and structured approach to make it happen.',
    icon: icons.transform,
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    offerings: [
      'Digital strategy development',
      'IT infrastructure modernization',
      'Legacy system migration',
      'Business process reengineering',
      'Change management and adoption',
      'Digital maturity assessments',
    ],
    approach: [
      'Comprehensive assessment of your current digital maturity',
      'Identify quick wins and long-term transformation goals',
      'Develop a phased roadmap aligned with business objectives',
      'Execute with dedicated project management and technical leads',
      'Measure impact and iterate continuously',
    ],
  },
  {
    slug: 'consultancy',
    title: 'Project Management & Tech Consultancy',
    shortTitle: 'Consultancy',
    tagline: 'Expert guidance for complex technical decisions',
    description: 'Our senior consultants help you navigate complex technology decisions, manage critical projects, and build internal technical capability. Whether you need an experienced project manager, a technology audit, or strategic advisory on your tech stack, we bring clarity to complexity.',
    icon: icons.consult,
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    offerings: [
      'Technical project management',
      'Technology stack evaluation and selection',
      'IT audits and security assessments',
      'Vendor evaluation and management',
      'Technical team building and mentorship',
      'Architecture review and optimization',
    ],
    approach: [
      'Deep-dive discovery sessions to understand your challenges',
      'Data-driven analysis and benchmarking against industry standards',
      'Clear, actionable recommendations with prioritized roadmaps',
      'Hands-on support for execution, not just strategy decks',
      'Knowledge transfer to build lasting internal capability',
    ],
  },
];
