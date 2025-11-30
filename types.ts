export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string; // Short summary
  points: string[]; // Bullet points
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  date: string;
  readTime: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}