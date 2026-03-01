import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone } from 'lucide-react';
import ChatInterface from './ChatInterface';

const projects = [
  {
    title: "AI Chat Application",
    description: "A real-time chat application powered by Gemini API with streaming responses.",
    tech: ["React", "Node.js", "Gemini API", "Socket.io"],
    link: "#" // Replace with actual project URL
  },
  {
    title: "E-commerce Dashboard",
    description: "Full-stack analytics dashboard for tracking sales and inventory in real-time.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    link: "#" // Replace with actual project URL
  },
  {
    title: "Health & Wellness App",
    description: "Mobile-first application for tracking fitness goals and nutrition.",
    tech: ["React Native", "Firebase", "Redux"],
    link: "#" // Replace with actual project URL
  }
];

const skills = [
  { name: "Frontend", icon: <Code size={20} />, items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend", icon: <Server size={20} />, items: ["Node.js", "Express", "PostgreSQL", "GraphQL"] },
  { name: "AI & Data", icon: <Database size={20} />, items: ["Gemini API", "Python", "TensorFlow", "SQL"] },
  { name: "Mobile", icon: <Smartphone size={20} />, items: ["React Native", "Expo", "iOS", "Android"] }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-indigo-600">DevPortfolio</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Building <span className="text-indigo-600">intelligent</span> web experiences.
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed max-w-lg">
              I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently focused on integrating AI into modern web applications.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-full font-medium hover:bg-zinc-50 transition-colors">
                View Work
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden relative">
               <img 
                src="https://picsum.photos/seed/developer/800/800" 
                alt="Developer Workspace" 
                className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-indigo-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-zinc-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-zinc-200 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${project.title}/800/600`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
          <p className="text-zinc-600 mb-10 text-lg">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs some creative touch, let's chat.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="p-4 rounded-full bg-zinc-50 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 rounded-full bg-zinc-50 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@example.com" className="p-4 rounded-full bg-zinc-50 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-400 text-sm bg-zinc-50 border-t border-zinc-200">
        <p>© {new Date().getFullYear()} DevPortfolio. Built with React & Gemini AI.</p>
      </footer>

      {/* AI Chat Interface */}
      <ChatInterface />
    </div>
  );
}
