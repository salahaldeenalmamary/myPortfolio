import { skillCategories, languages } from '../data';
import { Globe } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 flex items-center gap-4">
          <span className="text-primary">04.</span> Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-850 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="bg-slate-900 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-800/50">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-850 p-8 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 text-xl font-bold text-white mb-6">
            <Globe className="text-primary" />
            Languages
          </div>
          <div className="flex flex-wrap gap-8">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-white font-medium mb-1">{lang.name}</span>
                <span className="text-slate-400 font-mono text-sm">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
