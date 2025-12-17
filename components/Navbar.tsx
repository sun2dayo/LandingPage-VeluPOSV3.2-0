
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vantagens', href: '#benefits' },
    { name: 'Funcionalidades', href: '#features' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const downloadUrl = "https://github.com/sun2dayo/VeluPOS.exe/releases/download/V3.6.5/VeluPOS.Setup.3.6.5.exe";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="font-bold text-white text-lg">V</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">VêluPOS</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA - Elegant Attention Seeker with subtle Red Glow */}
        <div className="hidden md:flex items-center">
          <a 
            href={downloadUrl}
            className="group relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl border border-red-500/30 transition-all hover:border-red-500/60 shadow-[0_0_15px_-5px_rgba(239,68,68,0.4)] hover:shadow-[0_0_20px_-2px_rgba(239,68,68,0.6)] transform hover:scale-105 active:scale-95 overflow-hidden"
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-center gap-2">
              <Download size={18} className="text-red-400 group-hover:text-red-300 transition-colors" strokeWidth={2.5} />
              <span>Baixar Agora</span>
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 hover:text-white font-medium p-2 block border-b border-slate-800/50"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={downloadUrl}
            className="w-full flex justify-center items-center gap-2 py-3 bg-slate-800 border border-red-500/40 text-white rounded-lg font-bold shadow-lg shadow-red-500/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download size={18} className="text-red-400" />
            Baixar v3.6.5
          </a>
        </div>
      )}
    </nav>
  );
};
