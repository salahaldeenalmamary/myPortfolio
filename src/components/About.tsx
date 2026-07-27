import { personalInfo, education } from '../data';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-primary">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 leading-relaxed mb-6">
              I am a passionate <strong className="text-white font-medium">Mobile Developer</strong> with a solid foundation in Computer Science. Over the last 3+ years, I have specialized in building highly performant and scalable cross-platform applications using <strong className="text-primary font-medium">Flutter and Dart</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My expertise spans state management (BLoC, Riverpod, GetX), RESTful APIs, and gRPC integrations, ensuring seamless asynchronous data synchronization and optimal user experiences across Android, iOS, Windows, and macOS.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 text-white font-semibold mb-4 text-lg">
                <GraduationCap className="text-primary" size={24} />
                Education
              </div>
              <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-white font-medium text-lg mb-1">{education.degree}</h3>
                <p className="text-primary mb-3 text-sm">{education.university}</p>
                <div className="flex justify-between items-center text-sm font-mono text-slate-400">
                  <span>{education.period}</span>
                  <span className="bg-slate-800 px-3 py-1 rounded-full text-white">Grade: {education.grade}</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 text-white font-semibold mb-4 text-lg">
                <BookOpen className="text-primary" size={24} />
                Secondary Education
              </div>
              <div className="bg-slate-850 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-300">{education.secondary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
