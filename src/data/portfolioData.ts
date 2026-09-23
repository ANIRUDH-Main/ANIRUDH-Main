import rjMe from '../assets/rj_me.gif';
import rjSetup from '../assets/rj_setup.jpg';
import rjShowcase from '../assets/rj_portfolio_showcase.png';
import thcLogo from '../assets/thc_logo.jpg';
import thcFloral from '../assets/thc_floral.jpg';
import thcScreenshot from '../assets/thc_live_screenshot.png';

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  metrics: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags: string[];
}

export interface TechCardItem {
  name: string;
  category: string;
  highlight: string;
  tagline: string;
  accentGradient: string;
  glowColor: string;
  borderColor: string;
  icon: string;
}

export const TECH_STACK_ROW_1: TechCardItem[] = [
  {
    name: 'React 19',
    category: 'Frontend Engineering',
    highlight: 'v19.0 · Modern UI',
    tagline: 'High-performance interactive web interfaces & state management',
    accentGradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    borderColor: 'group-hover:border-cyan-400/50',
    icon: 'Atom',
  },
  {
    name: 'Vertex AI',
    category: 'Google Cloud Platform',
    highlight: 'Google Certified',
    tagline: 'Multimodal prompt design, image analysis & enterprise Gemini deployment',
    accentGradient: 'from-blue-500/20 via-sky-500/10 to-transparent',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderColor: 'group-hover:border-blue-400/50',
    icon: 'Cloud',
  },
  {
    name: 'Gemini API',
    category: 'Generative AI',
    highlight: 'Function Calling',
    tagline: 'Python SDK, Streamlit GenAI apps & containerized Cloud Run deployments',
    accentGradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    borderColor: 'group-hover:border-indigo-400/50',
    icon: 'Brain',
  },
  {
    name: 'TypeScript',
    category: 'Strict Typing',
    highlight: 'ES2024 · Clean Code',
    tagline: 'Scalable type safety across complex client and backend architectures',
    accentGradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderColor: 'group-hover:border-blue-400/50',
    icon: 'FileCode',
  },
  {
    name: 'Supabase',
    category: 'Backend & Realtime',
    highlight: 'Postgres & Auth',
    tagline: 'Row Level Security, real-time WebSockets & relational schemas',
    accentGradient: 'from-emerald-600/20 via-green-500/10 to-transparent',
    glowColor: 'rgba(34, 197, 94, 0.25)',
    borderColor: 'group-hover:border-green-400/50',
    icon: 'Database',
  },
  {
    name: 'Python',
    category: 'AI & Data Analysis',
    highlight: 'NumPy · Pandas',
    tagline: 'Data cleaning, feature extraction, API scripts & LLM pipelines',
    accentGradient: 'from-yellow-500/20 via-blue-500/10 to-transparent',
    glowColor: 'rgba(234, 179, 8, 0.25)',
    borderColor: 'group-hover:border-yellow-400/50',
    icon: 'Terminal',
  },
];

export const TECH_STACK_ROW_2: TechCardItem[] = [
  {
    name: 'Prompt Engineering',
    category: 'Multimodal AI',
    highlight: 'AWS & GCP Certified',
    tagline: 'Few-shot, chain-of-thought, instruction tuning & role prompting',
    accentGradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    borderColor: 'group-hover:border-purple-400/50',
    icon: 'Sparkles',
  },
  {
    name: 'Docker & Cloud Run',
    category: 'Cloud Deployment',
    highlight: 'Serverless DevOps',
    tagline: 'Containerized GenAI apps packaged with Docker & deployed to Cloud Run',
    accentGradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    glowColor: 'rgba(14, 165, 233, 0.25)',
    borderColor: 'group-hover:border-sky-400/50',
    icon: 'Workflow',
  },
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    highlight: 'RLS Policies',
    tagline: 'Complex schemas, per-role security policies & data integrity',
    accentGradient: 'from-blue-500/20 via-indigo-600/10 to-transparent',
    glowColor: 'rgba(59, 130, 246, 0.25)',
    borderColor: 'group-hover:border-blue-400/50',
    icon: 'Server',
  },
  {
    name: 'Tailwind CSS',
    category: 'Modern Styling',
    highlight: 'Fluid Layouts',
    tagline: 'Custom design systems, fluid clamp typography & responsive UI',
    accentGradient: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    glowColor: 'rgba(20, 184, 166, 0.25)',
    borderColor: 'group-hover:border-teal-400/50',
    icon: 'Layers',
  },
  {
    name: 'Arduino & IoT',
    category: 'Embedded Hardware',
    highlight: '<50ms Latency',
    tagline: 'Ultrasonic sensor arrays, embedded C logic & serial data streams',
    accentGradient: 'from-red-500/20 via-rose-500/10 to-transparent',
    glowColor: 'rgba(239, 68, 68, 0.25)',
    borderColor: 'group-hover:border-red-400/50',
    icon: 'Cpu',
  },
  {
    name: 'IBM Granite',
    category: 'Enterprise GenAI',
    highlight: 'IBM SkillsBuild',
    tagline: 'Foundational generative AI, AI ethics & IBM Risk Atlas governance',
    accentGradient: 'from-cyan-600/20 via-blue-700/10 to-transparent',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    borderColor: 'group-hover:border-cyan-400/50',
    icon: 'Bot',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    name: 'Full-Stack Web Engineering',
    description: 'Architecting high-performance client platforms with React 19, TypeScript, Supabase, PostgreSQL RLS, and responsive frontends with sub-2s load speeds.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase'],
  },
  {
    number: '02',
    name: 'GenAI Apps & Gemini API',
    description: 'Building and deploying production GenAI applications using Google Cloud Vertex AI, Gemini API, and Python SDK with function calling, containerized via Docker on Cloud Run.',
    tags: ['Vertex AI', 'Gemini API', 'Streamlit', 'Docker', 'Google Cloud Run'],
  },
  {
    number: '03',
    name: 'Prompt Design & Multimodal AI',
    description: 'Formulating few-shot, chain-of-thought, image analysis, and multimodal prompts in Vertex AI and IBM Granite to optimize foundation model outputs for enterprise use cases.',
    tags: ['Few-Shot', 'Chain-of-Thought', 'Multimodal', 'Vertex AI', 'AWS & IBM Certified'],
  },
  {
    number: '04',
    name: 'Database & Cloud Architecture',
    description: 'Designing normalized PostgreSQL relational schemas with Row Level Security (RLS), real-time WebSockets synchronization, Supabase auth, and cloud workflows.',
    tags: ['PostgreSQL', 'Supabase Realtime', 'Row Level Security', 'Google Cloud'],
  },
  {
    number: '05',
    name: 'Real-Time IoT & Data Systems',
    description: 'Developing hardware-to-cloud data telemetry using Arduino microcontrollers and ultrasonic sensor arrays, achieving <50ms occupancy classification latency.',
    tags: ['Arduino', 'Embedded C', 'Sensor Fusion', 'Real-Time Data'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'thc-platform',
    number: '01',
    name: 'THC Operations & Booking',
    category: 'Client / Production',
    description: 'Live commercial booking and operations platform for TRAPHOUSE CLUB featuring algorithmic tiered pricing, passwordless staff portal, and automated WhatsApp CRM dispatch.',
    metrics: ['Real-Time Fast Pass', 'Supabase PostgreSQL RLS', 'Automated WhatsApp CRM', 'React 19 + TypeScript'],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Supabase', 'Vite'],
    liveUrl: 'https://traphouseclub.vercel.app',
    images: {
      col1Top: thcLogo,
      col1Bottom: thcFloral,
      col2: thcScreenshot,
    },
  },
  {
    id: 'smart-parking',
    number: '02',
    name: 'Real-Time Smart Parking IoT',
    category: 'Award-Winning IoT / 2nd Place',
    description: 'Awarded 2nd Place at TechFusion 2025 for an Arduino-based smart parking system with multi-sensor telemetry, servo motor automation, and <50ms classification latency.',
    metrics: ['🏆 2nd Place TechFusion', '<50ms Latency', 'Multi-Node Sensor Fusion', 'Cash Prize Winner'],
    stack: ['Arduino', 'Ultrasonic Sensors', 'Embedded C', 'IoT', 'Real-Time Data'],
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7347155248789999616/',
    images: {
      col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
  {
    id: 'marketing-maestros',
    number: '03',
    name: 'Marketing Maestros Platform',
    category: 'Club Platform / Production',
    description: 'Dual-themed (light/dark) responsive website serving 100+ society members with dynamic member profiles, testimonials, and social media integration with sub-2s page load.',
    metrics: ['Sub-2s Page Load', 'Dual-Themed (Light/Dark)', '100+ Society Members', 'Zero-Downtime CI/CD'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel CI/CD'],
    liveUrl: 'https://marketing-maestros.vercel.app',
    images: {
      col1Top: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    id: 'client-portfolio',
    number: '04',
    name: 'Client Portfolio Website',
    category: 'Freelance / Client Production',
    description: 'Designed and shipped a production-ready responsive portfolio site for a content creator client — featuring game configurations, battle-station setup specs, and social stream integrations, live on Vercel.',
    metrics: ['Live & Publicly Deployed', 'Content Creator Portfolio', 'Responsive Multi-Section UI', 'Zero-Downtime Vercel CI/CD'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Vercel CI/CD'],
    liveUrl: 'https://rjnotop-gg.vercel.app',
    images: {
      col1Top: rjMe,
      col1Bottom: rjSetup,
      col2: rjShowcase,
    },
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Getting Started with Generative AI',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 2026',
    badge: 'IBM SkillsBuild',
    description: 'Foundational generative AI concepts, AI ethics, risk identification via IBM Risk Atlas, and practical application of IBM Granite models.',
    credlyUrl: 'https://www.credly.com/badges/62bfe1a2-4f41-4936-ba5c-c7f646a44097',
  },
  {
    title: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google Cloud',
    date: 'May 2024',
    badge: 'Google Cloud',
    description: 'GenAI application development using Gemini API and Python SDK for text generation and function calling, packaged with Docker on Cloud Run.',
    credlyUrl: 'https://www.credly.com/badges/5f52a8c7-3b57-496e-8f61-99ef9df5d570',
  },
  {
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    date: 'May 2024',
    badge: 'Google Cloud',
    description: 'Prompt engineering, image analysis, and multimodal generative techniques within Vertex AI, crafting prompts to guide Gemini models.',
    credlyUrl: 'https://www.credly.com/badges/ee3ba7b4-a098-4814-961e-3c0a2d465c9c',
  },
  {
    title: 'Foundations of Prompt Engineering',
    issuer: 'AWS Training & Certification',
    date: 'May 2024',
    badge: 'AWS Certified',
    description: 'Few-shot learning, chain-of-thought, instruction tuning, and role prompting for interacting with Foundation Models.',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Vivekananda Institute of Professional Studies (VIPS), GGSIPU',
    timeline: '2025 - 2027',
    coursework: 'Artificial Intelligence, Data Structures, Advanced DBMS, Computer Networks',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    timeline: '2022 - 2025',
    coursework: 'Web Technologies, Data Structures, DBMS, Object-Oriented Programming',
  },
];

export const LEADERSHIP = [
  {
    role: 'Team Member (Core Team)',
    organization: 'Google Developer Groups (GDG), New Delhi',
    period: 'Sep 2026 - Present',
    description: 'Coordinating logistics and planning for DevFest 2026 as part of the GDG New Delhi core team for the flagship annual developer event.',
  },
  {
    role: 'Event Planning Lead',
    organization: 'Marketing Maestros Club, IINTM',
    period: 'Feb 2024 - Jun 2025',
    description: 'Led 5+ college events for 200+ attendees and managed cross-functional teams of 8-10 volunteers across logistics, marketing, and content.',
  },
];
