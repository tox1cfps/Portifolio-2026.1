import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  GraduationCap, 
  Globe, 
  ChevronRight,
  Download
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const data = {
    name: "Arthur Rodrigues Fonseca",
    role: "Backend Developer",
    bio: "Em busca do primeiro emprego como desenvolvedor com foco em backend, porém aberto para todas as oportunidades.",
    skills: ["Python", "Golang", "JavaScript", "PostgreSQL", "Docker", "AWS"],
    resumeUrl: "./curriculo.pdf", 
    education: {
      institution: "Anhanguera - Vila Mariana",
      course: "Análise e Desenvolvimento de Sistemas",
      status: "1º Semestre", 
      period: "2026 - 2028"
    },
    projects: [
      {
        title: "Projetos",
        desc: "Projetos pessoais em desenvolvimento. Em breve novos repositórios públicos.",
        tech: [],
        link: "#",
        category: "backend"
      }
    ],
    experience: [
      {
        company: "Wizard by Pearson",
        period: "2022 - Presente",
        role: "Instrutor de idiomas",
        tasks: "Ministrar aulas em Inglês para alunos iniciantes, intermediários e avançados."
      }
    ]
  };

  const filteredProjects = activeTab === 'all' 
    ? data.projects 
    : data.projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Terminal size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">dev.portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projetos</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experiência</a>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-indigo-500/20">
              Contato
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Disponível para novos projetos
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Olá, eu sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{data.name.split(' ')[0]}</span>.
              </h1>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                {data.bio}
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-700 rounded-2xl max-w-sm">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">{data.education.institution}</p>
                  <p className="text-xs text-slate-400 mt-1">{data.education.course} • <span className="text-indigo-400 font-semibold">{data.education.status}</span></p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex gap-4">
                  <a href="https://github.com/tox1cfps" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:-translate-y-1">
                    <Github size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/arthur-rodrigues-354bbb240/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:-translate-y-1">
                    <Linkedin size={22} />
                  </a>
                  <a href="mailto:arthurrodriguesfonseca@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:-translate-y-1">
                    <Mail size={22} />
                  </a>
                </div>
                
                {/* BOTÃO DE DOWNLOAD ATUALIZADO */}
                <a 
                  href={data.resumeUrl} 
                  download="Curriculo_Arthur_Rodrigues.pdf"
                  className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all text-sm font-semibold text-slate-200"
                >
                  <Download size={18} /> Download CV
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-2xl overflow-hidden">
                <div className="flex gap-1.5 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-indigo-400">const <span className="text-cyan-400">skills</span> = [</p>
                  <div className="grid grid-cols-2 gap-2 pl-6">
                    {data.skills.map(skill => (
                      <p key={skill} className="text-slate-300">"{skill}",</p>
                    ))}
                  </div>
                  <p className="text-indigo-400">];</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Projetos em Destaque</h2>
              <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
            </div>
            <div className="flex gap-2 bg-slate-800/50 p-1 rounded-xl border border-slate-800">
              {['all', 'frontend', 'backend'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {tab === 'all' ? 'Todos' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/40 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <Code2 size={24} />
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <div className="mb-2">
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${project.category === 'backend' ? 'text-cyan-400' : 'text-amber-400'}`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold bg-slate-900 text-slate-400 px-2 py-1 rounded-md border border-slate-800 italic">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-3xl mx-auto mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Trajetória Profissional</h2>
          <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-0 md:before:left-1/2 before:w-[2px] before:bg-slate-800">
            {data.experience.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full -translate-x-1/2 border-4 border-[#0f172a] z-10"></div>
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                  <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                    <span className="text-indigo-400 text-sm font-bold">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                    <p className="text-slate-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
                      {exp.tasks}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educação Acadêmica */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Educação</h2>
          <div className="bg-gradient-to-br from-indigo-900/20 to-slate-800/40 border border-indigo-500/20 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Graduação</span>
              <h3 className="text-2xl font-bold text-white mt-4">{data.education.course}</h3>
              <p className="text-indigo-400 font-semibold text-lg">{data.education.institution}</p>
              <div className="flex flex-wrap items-center gap-6 mt-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-indigo-500" />
                  <span>{data.education.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={18} className="text-indigo-500" />
                  <span>{data.education.period}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm italic">
            &copy; {new Date().getFullYear()} • Arthur Rodrigues Fonseca
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/tox1cfps" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/arthur-rodrigues-354bbb240/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
            <a href="mailto:arthurrodriguesfonseca@gmail.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;