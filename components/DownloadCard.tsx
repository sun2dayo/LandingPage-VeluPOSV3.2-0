import React from 'react';
import { Download } from 'lucide-react';

export const DownloadCard: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 to-purple-700 p-8 md:p-12 text-center shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para modernizar o seu negócio?</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Baixe o VêluPOS v3.2.0 hoje e experimente a liberdade de vender sem depender da internet.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://github.com/sun2dayo/VeluPOS.exe/releases/download/V3.2.0/VeluPOS.Setup.3.2.0.exe"
                className="px-8 py-4 bg-white text-brand-600 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <Download size={24} />
                Download para Windows
              </a>
            </div>
            
            <p className="mt-6 text-sm text-indigo-200">
              Versão 3.2.0 • Build 2405 • 64-bit Installer (45MB)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};