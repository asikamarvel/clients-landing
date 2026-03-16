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

const icons = {
  web: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
  software: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  erp: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/></svg>',
  transform: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
  consult: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
};

export const services: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design & Management',
    shortTitle: 'Web Design',
    tagline: 'Digital presence, engineered with intent',
    description: 'We design and develop responsive, performance-optimized websites tailored to your business objectives. Our process covers the full lifecycle\u2014strategy, design, build, launch, and long-term management\u2014ensuring your digital presence evolves with your business.',
    icon: icons.web,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    offerings: [
      'Custom responsive web design and development',
      'Content management system integration',
      'E-commerce platform development',
      'Performance optimization and technical SEO',
      'Accessibility compliance (WCAG)',
      'Ongoing maintenance and content management',
    ],
    approach: [
      'Discovery and requirements analysis to define objectives, audience, and scope',
      'Information architecture and wireframing validated through stakeholder review',
      'Visual design and prototyping with iterative feedback loops',
      'Development using modern frameworks with rigorous cross-device testing',
      'Post-launch analytics, optimization, and ongoing support',
    ],
  },
  {
    slug: 'app-development',
    title: 'App Design & Development',
    shortTitle: 'App Development',
    tagline: 'Mobile applications built for scale and usability',
    description: 'We build native and cross-platform mobile applications that prioritize user experience, performance, and reliability. From initial concept through to App Store deployment, our team delivers applications that meet enterprise-grade standards while remaining intuitive for end users.',
    icon: icons.app,
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80',
    offerings: [
      'iOS and Android native application development',
      'Cross-platform solutions using React Native and Flutter',
      'UI/UX research, design, and interactive prototyping',
      'Backend API architecture and integration',
      'App Store optimization and deployment management',
      'Post-launch iteration and feature development',
    ],
    approach: [
      'Product discovery workshops to define core user journeys and feature priorities',
      'Iterative design sprints with testable prototypes at each stage',
      'Agile development with bi-weekly sprint reviews and stakeholder demos',
      'Comprehensive QA across device types, OS versions, and network conditions',
      'Managed deployment and continuous improvement based on usage analytics',
    ],
  },
  {
    slug: 'software-agents',
    title: 'Software, Agents & Agentic AI',
    shortTitle: 'Software & AI',
    tagline: 'Intelligent systems that automate, adapt, and deliver',
    description: 'We develop custom software solutions and AI-powered systems\u2014including autonomous agents and multi-agent architectures\u2014designed to automate complex workflows, enhance decision-making, and integrate with your existing infrastructure. Our work spans classical software engineering through to LLM-powered agentic systems.',
    icon: icons.software,
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    offerings: [
      'Custom software architecture and development',
      'AI agent design, development, and deployment',
      'Multi-agent system orchestration and governance',
      'Large language model integration and prompt engineering',
      'Workflow automation and process intelligence',
      'API development and third-party systems integration',
    ],
    approach: [
      'Operational audit to identify high-value automation and AI opportunities',
      'System architecture design with defined goals, guardrails, and evaluation criteria',
      'Iterative development with rapid prototyping and controlled testing',
      'Production deployment with monitoring, logging, and human-in-the-loop safeguards',
      'Ongoing optimization informed by performance telemetry and user feedback',
    ],
  },
  {
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    shortTitle: 'ERP',
    tagline: 'Unified operations through enterprise systems',
    description: 'We implement, customize, and support Enterprise Resource Planning systems that consolidate your operations into a single, coherent platform. Whether deploying Odoo, configuring SAP, or building bespoke solutions, we deliver ERP implementations that reduce complexity and scale with your organization.',
    icon: icons.erp,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    offerings: [
      'ERP platform evaluation and selection consulting',
      'Odoo implementation, configuration, and module customization',
      'SAP configuration and custom development',
      'Bespoke ERP development for specialized requirements',
      'Data migration, system integration, and workflow mapping',
      'End-user training, documentation, and ongoing support',
    ],
    approach: [
      'Business process analysis and requirements documentation',
      'Platform selection informed by technical and operational constraints',
      'Phased implementation designed to minimize disruption to operations',
      'Structured knowledge transfer and change management',
      'Ongoing technical support with proactive system health monitoring',
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Business & Digital Transformation',
    shortTitle: 'Transformation',
    tagline: 'Modernizing operations for the demands of a digital economy',
    description: 'We guide organizations through the process of digital transformation\u2014from strategic planning through execution. Whether migrating legacy infrastructure, redesigning business processes, or building a digital-first operational model, we bring structured methodology and technical depth to every engagement.',
    icon: icons.transform,
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    offerings: [
      'Digital strategy and transformation roadmap development',
      'IT infrastructure assessment and modernization',
      'Legacy system migration and cloud adoption',
      'Business process reengineering and optimization',
      'Organizational change management and adoption support',
      'Digital maturity assessment and benchmarking',
    ],
    approach: [
      'Comprehensive assessment of current digital maturity and capability gaps',
      'Identification of quick wins alongside strategic long-term objectives',
      'Phased roadmap development aligned with business priorities and budget',
      'Execution with dedicated technical and project management leadership',
      'Continuous measurement of impact against defined success metrics',
    ],
  },
  {
    slug: 'consultancy',
    title: 'Project Management & Tech Consultancy',
    shortTitle: 'Consultancy',
    tagline: 'Structured guidance for complex technical decisions',
    description: 'Our consultants bring senior-level expertise to help organizations navigate technology decisions, manage critical projects, and develop internal technical capability. We provide the clarity, structure, and hands-on support needed to move complex initiatives forward with confidence.',
    icon: icons.consult,
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    offerings: [
      'Technical project management and delivery oversight',
      'Technology stack evaluation, selection, and migration planning',
      'IT audits, security assessments, and compliance review',
      'Vendor evaluation, selection, and relationship management',
      'Technical team structuring, hiring support, and mentorship',
      'Architecture review, performance optimization, and technical debt assessment',
    ],
    approach: [
      'In-depth discovery to understand organizational context and technical landscape',
      'Evidence-based analysis benchmarked against industry standards',
      'Clear, prioritized recommendations with actionable implementation roadmaps',
      'Hands-on execution support\u2014not just advisory deliverables',
      'Knowledge transfer to ensure lasting internal capability development',
    ],
  },
];
