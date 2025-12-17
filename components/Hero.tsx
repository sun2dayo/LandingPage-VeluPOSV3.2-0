
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Download, Play, Zap, X, Monitor, Apple, FileVideo
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isVideoOpen]);

  const downloadUrl = "https://github.com/sun2dayo/VeluPOS.exe/releases/download/V3.6.5/VeluPOS.Setup.3.6.5.exe";
  const videoSource = "./video.mp4"; // O ficheiro deve estar na raiz da hospedagem

  return (
    <>
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
                <Monitor size={14} className="text-brand-400" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">Aplicação Nativa Desktop v3.6.5</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                O Cliente Desktop Nativo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 animate-gradient bg-300%">
                  para Dolisys ERP.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Potencialize a sua frente de loja com o VêluPOS. Uma solução <strong>100% nativa para Windows</strong>, desenhada para máxima performance, estabilidade offline e integração total com o seu ecossistema Dolisys.
              </p>

              <div className="flex flex-col gap-6 items-center lg:items-start">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href={downloadUrl}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-600/25 flex items-center justify-center gap-2 group"
                  >
                    <Download size={20} />
                    Baixar para Windows
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="w-full sm:w-auto px-6 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 group cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white text-red-600 shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={14} fill="currentColor" className="ml-0.5" />
                    </div>
                    <span>Ver Demo em Vídeo</span>
                  </button>
                </div>

                {/* macOS Badge */}
                <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg w-fit">
                  <Apple size={18} className="text-slate-500" />
                  <span className="text-sm font-medium text-slate-400">Versão macOS</span>
                  <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded border border-indigo-500/30">
                    Brevemente
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="flex-1 w-full max-w-xl lg:max-w-full">
              <div className="relative rounded-2xl border border-slate-700 bg-slate-800/50 p-2 shadow-2xl backdrop-blur-sm group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <img 
                  src="https://sol.dolisys.com/img/VeluPOS_Loja.jpg"
                  alt="Interface Desktop do VêluPOS" 
                  className="relative rounded-xl w-full h-auto shadow-inner border border-slate-800 object-cover aspect-[4/3]"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop";
                  }}
                />
                
                {/* Floating Badge (Nativa Windows) */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl hidden md:block z-20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Monitor size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Plataforma</p>
                      <p className="text-white font-bold text-lg">Nativa (Windows)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Actions */}
            <div className="p-4 flex justify-between items-center bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileVideo className="text-brand-400" size={20} />
                <span className="text-white font-semibold">VêluPOS - Demonstração Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={videoSource}
                  download="VeluPOS_Demo.mp4"
                  className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-bold transition-colors shadow-lg"
                >
                  <Download size={16} />
                  Baixar Vídeo
                </a>
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video 
                className="w-full h-full"
                src={videoSource}
                controls
                autoPlay
              >
                O seu navegador não suporta a reprodução de vídeo nativa. Por favor, baixe o vídeo no botão acima.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
