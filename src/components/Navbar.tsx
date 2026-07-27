import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold text-primary tracking-tighter">
          SM<span className="text-white">.</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-mono text-sm">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-300 hover:text-primary transition-colors flex items-center gap-1">
                  <span className="text-primary text-xs">0{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-slate-950 z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center gap-8 font-mono">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-slate-300 hover:text-primary text-xl flex flex-col items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary text-sm">0{index + 1}.</span> {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
