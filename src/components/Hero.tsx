import { Code2, Github, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pt-20 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <Code2 size={24} />
          <span className="font-mono text-sm tracking-wider uppercase">Mobile Developer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
          Hi, I'm {personalInfo.name.split(' ')[0]} <br className="hidden md:block" />
          <span className="text-slate-400">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-slate-400 font-mono text-sm">
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} />
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Sana'a, Yemen</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors">
            <Github size={16} />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
