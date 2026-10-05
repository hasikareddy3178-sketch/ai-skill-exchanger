import { Skill } from '../types/skill';

export const SAMPLE_SKILLS: Skill[] = [
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering',
    shortDescription: 'Master structured prompting techniques including Chain-of-Thought, few-shot conditioning, and guardrailing for robust AI outputs.',
    fullDescription: 'A comprehensive workflow for designing, benchmarking, and refining system prompts. Includes ready-to-use templates for role definitions, edge-case rejection, structured JSON schema outputs, and multi-turn persona maintenance across leading LLMs.',
    category: 'Prompt Craft',
    difficulty: 'Beginner',
    author: {
      name: 'Elena Rostova',
      handle: '@elenacraft',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'Lead Prompt Architect',
      rating: 4.9,
      exchangesCount: 342,
    },
    rating: 4.9,
    reviewsCount: 184,
    downloadsCount: 3820,
    tags: ['Few-Shot', 'Chain of Thought', 'System Prompts', 'Evaluation'],
    featured: true,
    modelCompatibility: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Llama 3.1'],
    samplePrompt: `You are an elite reasoning assistant. Before answering, break down your analysis into three distinct phases:
1. [Deconstruct]: Identify core assumptions, ambiguous constraints, and key goals.
2. [Hypothesize]: Formulate two alternative perspectives or methodologies.
3. [Synthesize]: Deliver the definitive recommendation with rationale and confidence score.`,
    useCase: 'Designing bulletproof production prompts for customer-facing AI agents.',
    updatedAt: '2 days ago',
  },
  {
    id: 'ai-research-assistant',
    name: 'AI Research Assistant',
    shortDescription: 'Synthesize complex scientific papers, verify citations, extract methodologies, and generate publication-ready literature summaries.',
    fullDescription: 'Automate deep academic paper discovery and cross-synthesis. This skill provides systematic extraction of research hypotheses, sample sizes, methodology trade-offs, and critical reviews while preventing hallucinated references.',
    category: 'Research & Science',
    difficulty: 'Intermediate',
    author: {
      name: 'Dr. Marcus Vance',
      handle: '@marcus_vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Computational Biologist',
      rating: 4.8,
      exchangesCount: 219,
    },
    rating: 4.8,
    reviewsCount: 129,
    downloadsCount: 2450,
    tags: ['Literature Review', 'Citation Verification', 'Academic Summaries', 'ArXiv'],
    featured: true,
    modelCompatibility: ['Claude 3.5 Sonnet', 'GPT-4o', 'Perplexity Pro'],
    samplePrompt: `Act as a senior peer reviewer. When provided with an abstract and methodology section:
- Extract the independent and dependent variables.
- Evaluate statistical validity and identify potential confounding factors.
- Flag unstated assumptions and propose 3 validation experiments.
- Provide a standardized BibTeX citation and 3-bullet executive takeaway.`,
    useCase: 'Accelerating academic literature reviews and grant proposal drafting.',
    updatedAt: '1 week ago',
  },
  {
    id: 'coding-assistant',
    name: 'Coding Assistant',
    shortDescription: 'Write clean, test-driven TypeScript, Python, and Rust code with security audits, edge-case unit tests, and automated refactoring tips.',
    fullDescription: 'An industry-grade software engineering persona tailored for modern development stacks. Enforces strict typing, idiomatic design patterns, zero unnecessary external dependencies, comprehensive error handling, and unit test suites.',
    category: 'Software Engineering',
    difficulty: 'Advanced',
    author: {
      name: 'Sarah Chen',
      handle: '@sarahcodes',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      role: 'Staff Infrastructure Engineer',
      rating: 5.0,
      exchangesCount: 512,
    },
    rating: 5.0,
    reviewsCount: 310,
    downloadsCount: 5910,
    tags: ['TypeScript', 'Refactoring', 'Unit Testing', 'Architecture', 'Clean Code'],
    featured: true,
    modelCompatibility: ['Cursor / Claude 3.5', 'GPT-4o', 'DeepSeek Coder'],
    samplePrompt: `You are a Principal Software Engineer. When implementing or reviewing code:
1. Prioritize type-safety, readability, and performance.
2. Provide the idiomatic solution with zero third-party bloat.
3. Automatically write companion unit tests covering boundary cases and error branches.
4. Highlight any subtle concurrency, memory, or security pitfalls.`,
    useCase: 'Pair programming, refactoring legacy codebases, and writing robust test suites.',
    updatedAt: 'Yesterday',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    shortDescription: 'Craft compelling, high-converting storytelling, SEO blog posts, technical documentation, and persuasive brand messaging with zero AI fluff.',
    fullDescription: 'Banish generic, repetitive AI cliches. This writing engine produces authentic, voice-tailored prose with rhythm variation, punchy hooks, emotional hooks, data integration, and audience-specific tonality adjustments.',
    category: 'Writing & Marketing',
    difficulty: 'Beginner',
    author: {
      name: 'Julian Reed',
      handle: '@reedwords',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      role: 'Brand Storyteller & Copywriter',
      rating: 4.7,
      exchangesCount: 178,
    },
    rating: 4.7,
    reviewsCount: 96,
    downloadsCount: 1890,
    tags: ['Copywriting', 'SEO Content', 'Storytelling', 'Editorial', 'Tone of Voice'],
    featured: true,
    modelCompatibility: ['Claude 3.5 Sonnet', 'GPT-4o', 'Jasper'],
    samplePrompt: `Adopt the tone of an experienced tech essayist (insightful, conversational, crisp).
- Eliminate clichés: never use 'delve', 'testament', 'revolutionize', 'landscape', or 'beacon'.
- Vary sentence length dynamically to produce musical rhythm.
- Back up conceptual claims with relatable, concrete analogies.
- Deliver an unforgettable opening hook in fewer than 20 words.`,
    useCase: 'Publishing standout newsletters, SaaS landing page copy, and viral thought leadership.',
    updatedAt: '3 days ago',
  },
  {
    id: 'data-analytics-agent',
    name: 'Data Analyst & Visualizer',
    shortDescription: 'Transform raw CSV/SQL data into insightful executive summaries, key KPI anomaly detections, and python visualization recipes.',
    fullDescription: 'Expert statistical interpreter that turns messy datasets into strategic business intelligence. Analyzes distributions, flags statistical outliers, and recommends optimal visual storytelling charts.',
    category: 'Data & Analytics',
    difficulty: 'Intermediate',
    author: {
      name: 'Priya Patel',
      handle: '@priyadata',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Senior Analytics Lead',
      rating: 4.9,
      exchangesCount: 145,
    },
    rating: 4.9,
    reviewsCount: 78,
    downloadsCount: 1420,
    tags: ['Data Science', 'Pandas', 'KPI Tracking', 'Visualization', 'SQL'],
    featured: false,
    modelCompatibility: ['GPT-4o Code Interpreter', 'Claude 3.5 Sonnet'],
    samplePrompt: `Analyze the provided schema or metric records. Highlight:
1. Top 3 primary trends with statistical significance.
2. Outlier anomalies and probable root causes.
3. Actionable levers management can pull this quarter.`,
    useCase: 'Turning executive metrics into automated weekly operational briefings.',
    updatedAt: '5 days ago',
  },
  {
    id: 'ui-ux-design-prompt-smith',
    name: 'UI/UX Interface Designer',
    shortDescription: 'Generate accessible Tailwind CSS components, design tokens, micro-copy, and design systems for web and mobile interfaces.',
    fullDescription: 'Engineered specifically for frontend developers and product designers. Crafts accessible, responsive HTML/Tailwind wireframes, interactive state specifications, and micro-interactions.',
    category: 'Design & UI/UX',
    difficulty: 'Intermediate',
    author: {
      name: 'Liam O’Connor',
      handle: '@liamdesign',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      role: 'Design Systems Architect',
      rating: 4.8,
      exchangesCount: 260,
    },
    rating: 4.8,
    reviewsCount: 112,
    downloadsCount: 2130,
    tags: ['Tailwind CSS', 'Design Systems', 'Microcopy', 'Accessibility', 'Figma'],
    featured: false,
    modelCompatibility: ['Claude 3.5 Sonnet', 'v0 by Vercel', 'GPT-4o'],
    samplePrompt: `Generate a production-ready Tailwind CSS component with:
- Strict mobile-first responsiveness.
- Accessible ARIA labels and focus-visible states.
- Clean semantic HTML tags with zero redundant wrapper divs.`,
    useCase: 'Rapidly prototyping clean web UI blocks with modern design aesthetics.',
    updatedAt: '4 days ago',
  }
];

export const CATEGORIES = [
  'All',
  'Prompt Craft',
  'Research & Science',
  'Software Engineering',
  'Writing & Marketing',
  'Data & Analytics',
  'Design & UI/UX',
];
