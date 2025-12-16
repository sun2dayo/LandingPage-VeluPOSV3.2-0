import React from 'react';
import { 
  ArrowRight, Download, Play, Zap 
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-md">
              <Zap size={14} className="text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">Performance Nativa v3.2.0</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Vendas Instantâneas. <br />
              {/* Commercial & High Impact Title */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 animate-gradient bg-300%">
                O Seu Negócio Imparável.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Elimine a latência e blinde a sua operação contra falhas. O VêluPOS garante <strong>transações instantâneas</strong> e estabilidade absoluta, mantendo o fluxo de vendas contínuo graças à sua arquitetura 100% Offline-First.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://github.com/sun2dayo/VeluPOS.exe/releases/download/V3.2.0/VeluPOS.Setup.3.2.0.exe"
                className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2 group"
              >
                <Download size={20} />
                Baixar Versão 3.2.0
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://youtu.be/qL-Uc7SY1c0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 group"
              >
                {/* Special Video Badge */}
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={14} fill="currentColor" className="ml-0.5" />
                </div>
                <span>Ver Vídeo Tutorial</span>
              </a>
            </div>
          </div>

          {/* Visual Content - Realistic Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-full">
            <div className="relative rounded-2xl border border-slate-700 bg-slate-800/50 p-2 shadow-2xl backdrop-blur-sm group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <img 
                src="https://sol.dolisys.com/img/VeluPOS_Loja.png"
                alt="Interface do VêluPOS em funcionamento numa loja moderna" 
                className="relative rounded-xl w-full h-auto shadow-inner border border-slate-800 object-cover aspect-[4/3]"
                onError={(e) => {
                  // Fallback to a generic POS image if the custom one fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              
              {/* Floating Stat Badge (Optional visual reinforcement of speed) */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl hidden md:block z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-semibold">Tempo de Resposta</p>
                    <p className="text-white font-bold text-lg">Instantâneo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};