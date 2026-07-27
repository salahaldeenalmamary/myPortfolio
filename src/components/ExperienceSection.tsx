import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 flex items-center gap-4">
          <span className="text-primary">02.</span> Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-slate-800"></div>
              
              <div className="md:grid md:grid-cols-[8rem_1fr] md:gap-12 items-start relative">
                <div className="hidden md:flex flex-col text-sm font-mono text-slate-500 pt-1">
                  <span>{exp.period.split(' – ')[0]}</span>
                  <span className="text-slate-700">|</span>
                  <span>{exp.period.split(' – ')[1]}</span>
                </div>
                
                <div className="absolute left-0 md:left-[8.5rem] top-2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] ring-4 ring-slate-950"></div>
                
                <div className="bg-slate-850/50 hover:bg-slate-850 transition-colors border border-slate-800 p-6 md:p-8 rounded-2xl group">
                  <div className="md:hidden text-primary font-mono text-sm mb-3">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 flex flex-wrap items-center gap-2">
                    {exp.role} 
                    <span className="text-slate-500 font-normal">@ {exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                    <Briefcase size={14} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                        <span className="text-primary mt-1.5 opacity-70 group-hover:opacity-100 transition-opacity">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
