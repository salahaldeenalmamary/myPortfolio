import { personalInfo } from '../data';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-slate-900/50 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-2xl mx-auto w-full px-6">
        <div className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">05. What's Next?</div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Get In Touch</h2>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I am currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-mono font-medium text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
        >
          Say Hello
        </a>
      </div>
      
      <footer className="mt-32 pb-8 text-slate-500 font-mono text-xs">
        <p>Built by Salah Aldeen Mohammed Al-Mamari &copy; {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}
