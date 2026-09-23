import rjMe from '../assets/rj_me.gif';
import rjSetup from '../assets/rj_setup.jpg';
import rjShowcase from '../assets/rj_portfolio_showcase.png';
import thcLanding from '../assets/thc_landing.png';
import thcOpsPanel from '../assets/thc_ops_panel.png';
import thcScreenshot from '../assets/thc_live_screenshot.png';
import smartParkingOverview from '../assets/smart_parking_overview.jpg';
import smartParkingLcd from '../assets/smart_parking_lcd.jpg';
import smartParkingAward from '../assets/smart_parking_award.png';
import mmLightHero from '../assets/mm_light_hero.png';
import mmDarkHero from '../assets/mm_dark_hero.png';
import mmExperience from '../assets/mm_experience.png';

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
  bullets?: string[];
  images?: {
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
    name: 'THC Booking & Operations Platform',
    category: 'Freelance · Client Production',
    description: 'Live client booking and operations platform on Supabase featuring PostgreSQL schemas with Row Level Security (RLS), real-time Fast Pass reservations with algorithmic tiered pricing (3 PC / 3 PS5 tiers), passwordless staff operations portal, and automated WhatsApp CRM dispatch.',
    metrics: ['Real-Time Fast Pass', 'Supabase PostgreSQL RLS', 'Passwordless Staff Portal', 'WhatsApp CRM Dispatch'],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Supabase', 'Vite'],
    liveUrl: 'https://traphouseclub.vercel.app',
    images: {
      col1Top: thcOpsPanel,
      col1Bottom: thcScreenshot,
      col2: thcLanding,
    },
  },
  {
    id: 'stock-intelligence',
    number: '02',
    name: 'Stock Intelligence & Social Sentiment Dashboard',
    category: 'Group Project · Aug 2026',
    description: 'Interactive Streamlit dashboard for a 5-stage AI stock-analysis pipeline, rendering sentiment gauges, ML price predictions, and AI-generated analyst narratives across 20 financial subreddits.',
    metrics: ['5-Stage AI Pipeline', '20 Financial Subreddits', '5-Model ML Ensemble', 'Instant JSON Cache Launch'],
    stack: ['Streamlit', 'Plotly', 'Python', 'XGBoost', 'scikit-learn', 'spaCy', 'VADER', 'CrewAI + Ollama'],
    githubUrl: 'https://github.com/ANIRUDH-Main/Stock-Intelligence',
    bullets: [
      'Built the interactive Streamlit dashboard for a 5-stage AI stock-analysis pipeline, rendering sentiment gauges, ML price predictions, and AI-generated analyst narratives for tickers detected across 20 financial subreddits.',
      "Owned the presentation layer of the pipeline — consuming pre-generated outputs from the team's Reddit scraper, VADER/spaCy sentiment and ticker-detection stage, and 5-model ML prediction stage (XGBoost, Random Forest, Gradient Boosting, Ridge, SVR) — and rendering them into a clear, interactive Plotly-based interface.",
      'Designed the dashboard to run independently of the upstream pipeline, reading from pre-generated JSON so it launches instantly without re-running scraping or model training.',
    ],
  },
  {
    id: 'smart-parking',
    number: '03',
    name: 'Real-Time Smart Parking System',
    category: 'Award-Winning IoT / 2nd Place',
    description: 'Awarded 2nd Place at TechFusion for an Arduino-based occupancy detection system using 4 ultrasonic sensors, processing real-time distance data to classify parking slot states with <50ms detection latency and embedded C sensor fusion logic.',
    metrics: ['🏆 2nd Place TechFusion', '<50ms Latency', 'Multi-Node Sensor Fusion', 'Cash Prize Winner'],
    stack: ['Arduino', 'Ultrasonic Sensors', 'Embedded C', 'IoT', 'Real-Time Data Processing'],
    liveUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7347155248789999616/',
    images: {
      col1Top: smartParkingOverview,
      col1Bottom: smartParkingLcd,
      col2: smartParkingAward,
    },
  },
  {
    id: 'marketing-maestros',
    number: '04',
    name: 'College Society Website',
    category: 'Marketing Maestros Club, IINTM',
    description: 'Built and deployed a dual-themed (light/dark) responsive website serving 100+ society members, featuring dynamic member profiles, testimonials, and social media integration with sub-2s page load using vanilla JS optimization and zero-downtime CI/CD via Vercel.',
    metrics: ['Sub-2s Page Load', 'Dual-Themed (Light/Dark)', '100+ Society Members', 'Zero-Downtime CI/CD'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel CI/CD'],
    liveUrl: 'https://marketing-maestros.vercel.app',
    images: {
      col1Top: mmLightHero,
      col1Bottom: mmExperience,
      col2: mmDarkHero,
    },
  },
  {
    id: 'client-portfolio',
    number: '05',
    name: 'Client Portfolio Website',
    category: 'Freelance Production',
    description: 'Designed and shipped a production-ready responsive portfolio site for a client — live, deployed, and publicly accessible on Vercel with responsive multi-section UI and performance optimization.',
    metrics: ['Live & Publicly Deployed', 'Client Portfolio', 'Responsive Multi-Section UI', 'Zero-Downtime Vercel CI/CD'],
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
    description: 'Built understanding of foundational generative AI concepts, AI ethics, and risk identification via the IBM Risk Atlas; applied large language models in practical scenarios such as customer service and content creation, with a focus on guiding IBM Granite models effectively.',
    credlyUrl: 'https://www.credly.com/badges/62bfe1a2-4f41-4936-ba5c-c7f646a44097',
  },
  {
    title: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google Cloud Skill Badge',
    date: 'May 2024',
    badge: 'Google Cloud Skill Badge',
    description: 'Built and deployed a GenAI application using the Gemini API and Python SDK for text generation and function calling, packaged as a Docker container and deployed on Cloud Run.',
    credlyUrl: 'https://www.credly.com/badges/5f52a8c7-3b57-496e-8f61-99ef9df5d570',
  },
  {
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud Skill Badge',
    date: 'May 2024',
    badge: 'Google Cloud Skill Badge',
    description: 'Applied prompt engineering, image analysis, and multimodal generative techniques within Vertex AI, crafting effective prompts to guide Gemini model output for real-world scenarios.',
    credlyUrl: 'https://www.credly.com/badges/ee3ba7b4-a098-4814-961e-3c0a2d465c9c',
  },
  {
    title: 'Foundations of Prompt Engineering',
    issuer: 'AWS Training & Certification',
    date: 'May 2024',
    badge: 'AWS Certified',
    description: 'Studied and applied prompt engineering techniques — few-shot learning, chain-of-thought, instruction tuning, and role prompting — for interacting with Foundation Models.',
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Vivekananda Institute of Professional Studies (VIPS), GGSIPU',
    timeline: '2025 - 2027 · Expected: 2027',
    coursework: 'Artificial Intelligence, Data Structures, Advanced DBMS, Computer Networks',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    timeline: '2022 - 2025 · Graduated 2025',
    coursework: 'Web Technologies, Data Structures, DBMS, Object-Oriented Programming (OOP)',
  },
];

export const LEADERSHIP = [
  {
    role: 'Team Member (Core Team)',
    organization: 'Google Developer Groups (GDG), New Delhi',
    period: 'Sep 2026 - Present',
    description: "Currently organizing DevFest 2026 as part of the GDG New Delhi team, coordinating logistics and planning for the community's flagship annual developer event.",
  },
  {
    role: 'Event Planning Lead',
    organization: 'Marketing Maestros Club, IINTM',
    period: 'Feb 2024 - Jun 2025',
    description: 'Planned and executed 5+ college events for 200+ attendees; led cross-functional teams of 8-10 volunteers across logistics, marketing, and content — strengthening communication and project management skills.',
  },
];
