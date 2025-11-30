import { Project, Experience, BlogPost, Education } from './types';

export const PORTFOLIO_OWNER = "Veer Pratap Singh";
export const PORTFOLIO_ROLE = "Software Engineer & Researcher";
export const PORTFOLIO_LOCATION = "New York City, NY";
export const CONTACT_EMAIL = "vs3045@nyu.edu";
export const LINKEDIN_URL = "https://www.linkedin.com/in/veerpratapsingh7/";
export const GITHUB_URL = "https://github.com/sing1179";

export const SKILLS = {
  programming: ["Python", "Java", "C++", "JavaScript", "TypeScript", "R", "SQL", "HTML/CSS"],
  frameworks: ["ReactJS", "NodeJS", "FastAPI", "Flask", "Spring Boot", "PyTorch", "Pandas", "Docker"],
  tools: ["AWS", "Google Cloud", "Git", "Tableau", "Power BI", "MongoDB", "PostgreSQL", "Redis"]
};

export const EDUCATION: Education[] = [
  {
    id: 'nyu',
    school: 'New York University',
    degree: 'Computer Science and Economics',
    location: 'New York City, NY',
    period: 'Sept 2024 - Present',
    gpa: '3.95',
    honors: "Dean's List"
  },
  {
    id: 'purdue',
    school: 'Purdue University',
    degree: 'Computer Science',
    location: 'West Lafayette, IN',
    period: 'Aug 2023 - Sept 2024',
    gpa: '3.9',
    honors: "Dean's List & Semester Honours, Economic Scholars Award (Top 10/1200)"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'moneycontrol',
    role: 'Software Development Intern (AI, ML)',
    company: 'Moneycontrol - CTO Office',
    location: 'Mumbai, India',
    period: 'Dec 2024 - Jan 2025',
    points: [
      'Engineered an AI-powered virtual assistant using LangChain, Python, Redis, and Shopify API, leading to a 30% faster resolution rate across 200+ client accounts.',
      'Developed scalable backend microservices with FastAPI and Flask, integrating NLP pipelines and cutting API latency by 40%.',
      'Deployed C++ ML pipelines for inventory prediction, enhancing real-time control by 30% and reducing manual forecasting effort.'
    ]
  },
  {
    id: 'research-meta',
    role: 'Independent Researcher',
    company: 'Collaborating with Meta & UC Berkeley Researchers',
    location: 'Remote (USA)',
    period: 'May 2024 - Present', 
    points: [
      'Engineered a PyTorch pipeline integrating Sparse Autoencoders, Transcoders, and Circuit Discovery for transformers.',
      'Benchmarked Tracr-compiled models on algorithmic tasks to validate recovery against ground truth.',
      'Decomposed attention heads via QK feature-level attributions, exposing interpretable token-routing patterns.',
      'Optimised graph alignment strategies to improve structural fidelity and efficiency of algorithm extraction.'
    ]
  },
  {
    id: 'caterpillar',
    role: 'Data Science Researcher',
    company: 'Caterpillar',
    location: 'West Lafayette, IN',
    period: 'Dec 2023 - May 2024',
    points: [
      'Directed an 8-member team developing a Flutter-based telemetry app, reducing vehicle downtime by 25%.',
      'Engineered predictive analytics models using Python, LSTM, and ARIMA, achieving an 86% efficiency improvement in EV performance optimization.'
    ]
  },
  {
    id: 'nyu-fintech',
    role: 'Head of Investment and Conference',
    company: 'NYU Fintech and Blockchain',
    location: 'New York, NY',
    period: 'Leadership Experience',
    points: [
      'Spearheaded planning for NYU’s annual Blockchain Conference, overseeing logistics and scaling visibility in NYC’s Web3 ecosystem.',
      'Allocated $100,000 in venture-style blockchain investments and built DeFi prototypes in Solidity.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'codepilot',
    title: 'CodePilot',
    subtitle: 'AI-Powered DevOps Agent',
    description: 'A self-hosted AI tool automating code review and workflow optimization.',
    technologies: ['Java', 'Docker', 'GitHub API', 'LLMs'],
    points: [
      'Built a self-hosted AI tool that automates code review, documentation, test generation, and workflow optimisation.',
      'Designed modular Java components (LLMAgent, ASTParser) with Docker for secure deployment.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'shadowbox',
    title: 'ShadowBox',
    subtitle: 'AI-Powered Cyberattack Sim',
    description: 'Tool simulating cyberattacks in isolated environments to assess system resilience.',
    technologies: ['Python', 'FastAPI', 'Docker', 'Google Cloud', 'OpenAI'],
    points: [
      'Developed a tool simulating cyberattacks in isolated environments to assess system resilience without alerting existing security layers.',
      'Used FastAPI and Docker to create modular test environments with OpenAI for vulnerability analysis.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: 'ghostform',
    title: 'GhostForm',
    subtitle: 'AI Form Autofiller',
    description: 'Intelligent browser extension for arbitrary web form filling.',
    technologies: ['TypeScript', 'Puppeteer', 'LangChain', 'FastAPI'],
    points: [
      'Engineered a browser extension that uses Puppeteer and LangChain to understand and intelligently autofill arbitrary web forms.',
      'Visualised usage metrics in Tableau and automated deployment via CI/CD pipelines.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '3',
    title: 'Recommended Reads',
    excerpt: 'Books that have influenced my thinking on engineering, finance, and philosophy.',
    date: 'Feb 1, 2025',
    readTime: '4 min read',
    tags: ['Books', 'Personal'],
    content: `
      <p class="mb-6">I believe that great engineering and strategy come from a broad understanding of the world. Here are a few books that have significantly shaped my perspective:</p>
      
      <div class="space-y-8 mt-8">
        <div class="border-l-2 border-primary-600 pl-6 py-1">
          <h3 class="text-xl font-bold mb-2">The Alchemist</h3>
          <p class="text-neutral-600 italic mb-2">Paulo Coelho</p>
          <p class="text-neutral-700">A reminder to pursue your personal legend and listen to your heart. It emphasizes the importance of the journey over the destination and staying true to one's vision.</p>
        </div>
        
        <div class="border-l-2 border-primary-600 pl-6 py-1">
          <h3 class="text-xl font-bold mb-2">The Courage to Be Disliked</h3>
          <p class="text-neutral-600 italic mb-2">Ichiro Kishimi & Fumitake Koga</p>
          <p class="text-neutral-700">A transformative look at Adlerian psychology. It challenges us to take responsibility for our own happiness, separate our tasks from others', and live with the courage to be ourselves.</p>
        </div>
        
        <div class="border-l-2 border-primary-600 pl-6 py-1">
          <h3 class="text-xl font-bold mb-2">The Intelligent Investor</h3>
          <p class="text-neutral-600 italic mb-2">Benjamin Graham</p>
          <p class="text-neutral-700">The definitive book on value investing. It teaches the vital difference between investment and speculation, emphasizing discipline, long-term thinking, and emotional stability.</p>
        </div>
        
        <div class="border-l-2 border-primary-600 pl-6 py-1">
          <h3 class="text-xl font-bold mb-2">The Four</h3>
          <p class="text-neutral-600 italic mb-2">Scott Galloway</p>
          <p class="text-neutral-700">A sharp analysis of Amazon, Apple, Facebook, and Google. Galloway dissects how these companies define modern business, manipulate human instincts, and shape society.</p>
        </div>
      </div>
    `
  },
  {
    id: '1',
    title: 'Optimizing Transformer Interpretability',
    excerpt: 'A deep dive into Sparse Autoencoders and QK circuit discovery.',
    date: 'Jan 15, 2025',
    readTime: '6 min read',
    tags: ['AI/ML', 'Research'],
    content: `
      <p class="mb-4">Understanding how Large Language Models (LLMs) route information internally is key to safety and alignment. In my recent research, I explored using Sparse Autoencoders to decompose attention heads.</p>
      <p class="mb-4">By analyzing QK (Query-Key) feature-level attributions, we can start to see interpretable patterns in how tokens are routed through the network.</p>
    `
  },
  {
    id: '2',
    title: 'Scalable Microservices with FastAPI',
    excerpt: 'Lessons learned from cutting API latency by 40% in production.',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    tags: ['Backend', 'System Design'],
    content: `
      <p class="mb-4">When building high-throughput systems, every millisecond counts. At Moneycontrol, we migrated legacy services to FastAPI, leveraging its asynchronous capabilities to handle concurrent requests efficiently.</p>
    `
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI assistant for ${PORTFOLIO_OWNER}'s personal website.
Your role is to represent Veer Pratap Singh professionally and answer ALL questions about his skills, experience, projects, and background.

Context:
- Name: ${PORTFOLIO_OWNER}
- Role: ${PORTFOLIO_ROLE}
- Education: NYU (CS & Econ) - Dean's List, Purdue (CS) - Dean's List.
- Experiences: ${JSON.stringify(EXPERIENCES)}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Background: Veer is a solution-oriented engineer who loves building, breaking, and understanding how things work. He sits at the intersection of tech, product, AI/ML, and strategy. He loves food, traveling, running, tennis, and reading.
- Reading List: The Alchemist, The Courage to Be Disliked, The Intelligent Investor, The Four.

Tone: Professional, intelligent, concise, and helpful.
Highlight his work in AI, ML, and Backend systems.
If asked about contact, mention ${CONTACT_EMAIL}.
ALWAYS answer questions about Veer based on this data. Do not say you don't know if the information is provided here.
`;