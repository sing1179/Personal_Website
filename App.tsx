import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import { EXPERIENCES, PROJECTS, BLOG_POSTS, PORTFOLIO_OWNER, PORTFOLIO_ROLE, EDUCATION, SKILLS, CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from './constants';
import { BlogPost } from './types';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBlog = (post: BlogPost) => {
    setSelectedBlog(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-primary-600 selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-neutral-50/90 backdrop-blur-sm border-b border-neutral-200/50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span 
            className="font-bold text-xl tracking-tight cursor-pointer hover:text-primary-600 transition-colors"
            onClick={() => handleNavClick('home')}
          >
            {PORTFOLIO_OWNER}
          </span>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-all duration-200 font-mono ${
                  activeSection === link.id && !selectedBlog 
                    ? 'text-primary-600 translate-y-0' 
                    : 'text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
             <span className="text-xs font-medium text-neutral-400 font-mono">MENU</span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[calc(100vh-100px)]">
        
        {/* Blog Detail View */}
        {selectedBlog ? (
          <article className="max-w-2xl mx-auto animate-fadeIn">
             <button 
              onClick={() => setSelectedBlog(null)}
              className="group flex items-center gap-2 text-neutral-400 hover:text-primary-600 mb-10 transition-colors text-xs font-bold uppercase tracking-widest font-mono"
             >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
               </svg>
               Back
             </button>
             <header className="mb-12 border-b border-neutral-200 pb-8">
               <div className="flex gap-2 mb-6">
                 {selectedBlog.tags.map(tag => (
                   <span key={tag} className="border border-neutral-200 text-primary-600 text-[10px] px-2 py-1 rounded-sm font-mono font-bold uppercase">
                     {tag}
                   </span>
                 ))}
               </div>
               <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">{selectedBlog.title}</h1>
               <div className="flex items-center gap-4 text-neutral-400 text-xs font-mono uppercase tracking-wider">
                 <time className="text-neutral-600">{selectedBlog.date}</time>
                 <span className="text-primary-600">/</span>
                 <span>{selectedBlog.readTime}</span>
               </div>
             </header>
             <div 
              className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-p:text-neutral-600 prose-p:leading-8 prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
             />
          </article>
        ) : (
          /* Sections View */
          <div className="space-y-32">
            
            {/* HOME SECTION */}
            {(activeSection === 'home') && (
              <section className="animate-fadeIn">
                <div className="py-12 md:py-24 max-w-4xl">
                  <div className="font-mono text-primary-600 text-sm mb-6 font-bold tracking-widest uppercase">
                    Software Engineer • Researcher
                  </div>
                  <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8 leading-[1.05] text-neutral-900">
                    Scalable Systems. <br />
                    <span className="text-neutral-300">AI Interpretability.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed mb-12 font-light">
                    I’m <strong className="text-neutral-900 font-medium">Veer Pratap Singh</strong>, a junior at NYU studying Computer Science. I’m deeply interested in the broader world of technology — from software engineering and finance to AI and machine learning. This past summer, I spent my time researching LLMs with a focus on interpretability, and it reinforced how much I enjoy understanding the inner workings of intelligent systems, whether it’s building software or exploring how modern models think.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <button onClick={() => handleNavClick('blog')} className="bg-primary-600 text-white px-8 py-3.5 rounded-sm font-medium hover:bg-primary-700 transition-all text-sm font-mono tracking-wide">
                      READ WRITING
                    </button>
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-neutral-900 px-8 py-3.5 border border-neutral-200 rounded-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-all text-sm font-mono tracking-wide">
                      LINKEDIN
                    </a>
                  </div>

                  <div className="mt-20 flex gap-6 text-neutral-400">
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Tech Stack Preview */}
                <div className="pt-10 border-t border-neutral-200">
                   <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-6 font-mono">Core Stack</p>
                   <div className="flex flex-wrap gap-x-8 gap-y-4 text-neutral-600 font-medium">
                     {SKILLS.programming.slice(0, 5).map(skill => (
                       <span key={skill} className="hover:text-primary-600 cursor-default transition-colors">{skill}</span>
                     ))}
                     {SKILLS.frameworks.slice(0, 4).map(skill => (
                       <span key={skill} className="hover:text-primary-600 cursor-default transition-colors">{skill}</span>
                     ))}
                   </div>
                </div>
              </section>
            )}

            {/* EXPERIENCE SECTION */}
            {(activeSection === 'experience') && (
              <section className="animate-fadeIn max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Experience</h2>
                <div className="space-y-20">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="group relative border-l-2 border-neutral-200 pl-8 hover:border-primary-600 transition-colors duration-300">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{exp.role}</h3>
                        <span className="text-neutral-400 font-mono text-xs uppercase tracking-wider">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-6 font-mono text-xs uppercase tracking-wider">
                         <span className="text-neutral-900 font-bold">{exp.company}</span>
                         <span className="text-neutral-300">/</span>
                         <span className="text-neutral-500">{exp.location}</span>
                      </div>
                      <ul className="list-none space-y-4 text-neutral-600">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="leading-relaxed relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-primary-600 before:font-mono before:text-xs">
                             {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PROJECTS SECTION */}
            {(activeSection === 'projects') && (
              <section className="animate-fadeIn">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Selected Projects</h2>
                <div className="grid grid-cols-1 gap-24">
                  {PROJECTS.map((project) => (
                    <div key={project.id} className="flex flex-col gap-8">
                      <div className="bg-neutral-100 rounded-sm overflow-hidden aspect-video relative group border border-neutral-200">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
                      </div>
                      <div className="space-y-6 max-w-3xl">
                        <div>
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="text-3xl font-bold">{project.title}</h3>
                            <a href={GITHUB_URL} className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 hover:text-primary-600 transition-colors">View Code</a>
                          </div>
                          <p className="text-lg text-primary-600 font-medium font-mono text-sm tracking-wide">{project.subtitle}</p>
                        </div>
                        <ul className="space-y-2 text-neutral-600 border-l-2 border-neutral-200 pl-4 hover:border-primary-600 transition-colors">
                            {project.points.map((point, idx) => (
                                <li key={idx} className="leading-relaxed pl-1">{point}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-neutral-100 rounded-sm text-xs font-mono font-medium text-neutral-600 uppercase tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ABOUT / SKILLS / EDUCATION SECTION */}
            {(activeSection === 'about') && (
              <section className="animate-fadeIn max-w-4xl mx-auto">
                 {/* BIO */}
                 <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 border-b border-neutral-200 pb-4 flex justify-between items-end">
                     About Me
                     <span className="text-xs font-mono font-normal text-neutral-400 uppercase tracking-wider">Bio</span>
                   </h2>
                   <div className="prose prose-neutral max-w-none text-lg text-neutral-600 leading-relaxed space-y-6">
                      <p>
                        I’m <strong className="text-neutral-900">Veer Pratap Singh</strong> — a solution-oriented software engineer who loves building, breaking, and understanding how things work. I’m naturally curious, and I gravitate toward anything that sits at the intersection of technology, product, AI/ML, and strategy. I try to get my hands dirty with every opportunity that comes my way, whether it’s developing infrastructure, experimenting with machine learning, exploring new tools, or contributing to projects that challenge me to think deeper and build smarter.
                      </p>
                      <p>
                        What drives me is the thrill of solving problems. I approach engineering with a mix of practicality and creativity, always asking how something can be made more efficient, more intuitive, or more impactful. I’m happiest when I’m learning new things, shipping real work, and surrounding myself with people who are sharp, ambitious, and thoughtful.
                      </p>
                      <p>
                         I believe in intellectual honesty. I’m never afraid to admit when I don’t know something—in fact, I embrace it. For me, "I don't know" isn't a dead end; it's the starting point. It’s what drives me to spend the next few hours (or days) tearing a topic apart, layer by layer, until I understand it from top to bottom.
                      </p>
                      <p>
                        Outside of tech, I’m all about balance. I love food (and exploring new spots), traveling, running (a new but growing passion), tennis, and reading. These things keep me grounded and constantly bring fresh inspiration into how I think and build.
                      </p>
                      <p>
                        At my core, I’m someone who shows up, tries his best every chance he gets, and keeps pushing to grow — as an engineer, as a creator, and as a person.
                      </p>
                   </div>
                 </div>

                 {/* Education */}
                 <div className="mb-24">
                   <h2 className="text-2xl font-bold mb-8 border-b border-neutral-200 pb-4 flex justify-between items-end">
                     Education
                     <span className="text-xs font-mono font-normal text-neutral-400 uppercase tracking-wider">Academic Background</span>
                   </h2>
                   <div className="grid grid-cols-1 gap-8">
                      {EDUCATION.map(edu => (
                        <div key={edu.id} className="bg-white p-8 rounded-sm border border-neutral-200 shadow-sm hover:border-primary-600 transition-colors relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-16 h-16 bg-primary-50 -mr-8 -mt-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="text-xs text-primary-600 font-mono font-bold uppercase tracking-widest mb-3">{edu.period}</div>
                           <h3 className="text-2xl font-bold mb-1">{edu.school}</h3>
                           <div className="text-neutral-600 font-medium mb-6 text-lg">{edu.degree}</div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono border-t border-neutral-100 pt-4">
                             <div>
                               <span className="text-neutral-400 block text-xs uppercase mb-1">GPA</span>
                               <span className="font-bold">{edu.gpa}</span>
                             </div>
                             {edu.honors && (
                               <div>
                                 <span className="text-neutral-400 block text-xs uppercase mb-1">Honors</span>
                                 <span className="text-neutral-700">{edu.honors}</span>
                               </div>
                             )}
                           </div>
                        </div>
                      ))}
                   </div>
                 </div>

                 {/* Skills */}
                 <div>
                   <h2 className="text-2xl font-bold mb-8 border-b border-neutral-200 pb-4 flex justify-between items-end">
                     Technical Skills
                     <span className="text-xs font-mono font-normal text-neutral-400 uppercase tracking-wider">Proficiencies</span>
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-mono text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider border-l-2 border-primary-600 pl-3">
                          Languages
                        </h3>
                        <div className="flex flex-col gap-2">
                          {SKILLS.programming.map(skill => (
                            <span key={skill} className="text-neutral-600 text-sm hover:text-primary-600 transition-colors cursor-default">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider border-l-2 border-neutral-300 pl-3">
                          Frameworks
                        </h3>
                        <div className="flex flex-col gap-2">
                          {SKILLS.frameworks.map(skill => (
                            <span key={skill} className="text-neutral-600 text-sm hover:text-primary-600 transition-colors cursor-default">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider border-l-2 border-neutral-300 pl-3">
                          Tools & Cloud
                        </h3>
                        <div className="flex flex-col gap-2">
                          {SKILLS.tools.map(skill => (
                            <span key={skill} className="text-neutral-600 text-sm hover:text-primary-600 transition-colors cursor-default">{skill}</span>
                          ))}
                        </div>
                      </div>
                   </div>
                 </div>
              </section>
            )}

            {/* BLOG SECTION */}
            {(activeSection === 'blog') && (
              <section className="animate-fadeIn max-w-3xl mx-auto">
                <div className="text-center mb-20">
                   <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Writing</h2>
                   <p className="text-lg text-neutral-500 font-light">Research notes, book recommendations, and engineering logs.</p>
                </div>
                   
                   <div className="space-y-px bg-neutral-200">
                     {BLOG_POSTS.map((post) => (
                       <article 
                        key={post.id} 
                        className="group cursor-pointer bg-white p-8 hover:bg-neutral-50 transition-colors"
                        onClick={() => handleOpenBlog(post)}
                       >
                         <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                           <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors">{post.title}</h3>
                           <span className="text-neutral-400 text-xs font-mono uppercase tracking-wider shrink-0">{post.date}</span>
                         </div>
                         <p className="text-neutral-500 mb-6 leading-relaxed text-sm">{post.excerpt}</p>
                         <span className="text-xs font-bold text-primary-600 uppercase tracking-widest font-mono group-hover:underline decoration-2 underline-offset-4">Read Entry →</span>
                       </article>
                     ))}
                   </div>
              </section>
            )}
          </div>
        )}
      </main>

      <footer className="py-12 border-t border-neutral-200 mt-auto bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} {PORTFOLIO_OWNER}</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-medium text-neutral-400">
            <a href={LINKEDIN_URL} className="hover:text-primary-600 transition-colors uppercase tracking-wider">LinkedIn</a>
            <a href={GITHUB_URL} className="hover:text-primary-600 transition-colors uppercase tracking-wider">GitHub</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary-600 transition-colors uppercase tracking-wider">Email</a>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

export default App;