import { projects } from '../data';
import { ExternalLink, Layers } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 flex items-center gap-4">
          <span className="text-primary">03.</span> Featured Projects
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
              
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 rounded-2xl z-10"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  {/* Aspect ratio container for standard mobile mockup sizes */}
                  <div className="aspect-[3/4] sm:aspect-square lg:aspect-[4/3] relative overflow-hidden bg-slate-850 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
              
              <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                <div className="flex items-center gap-2 text-primary font-mono text-sm mb-3">
                  <Layers size={14} />
                  <span>Featured Project</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="bg-slate-850 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl mb-6 relative z-20 text-slate-300 leading-relaxed text-sm md:text-base">
                  <p>{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-slate-400 font-mono text-sm mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {project.features.map((feature, i) => (
                    <li key={i} className="whitespace-nowrap px-3 py-1 bg-slate-900 rounded-full border border-slate-800/60 text-xs">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex flex-wrap items-center gap-4 ${index % 2 !== 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  {project.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
