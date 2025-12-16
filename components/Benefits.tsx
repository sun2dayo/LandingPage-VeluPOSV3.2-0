import React from 'react';
import { WifiOff, ShieldCheck, RefreshCw } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "100% Offline Capability",
      description: "A internet caiu? O negócio não para. O VêluPOS guarda todas as transações localmente e sincroniza silenciosamente assim que a conexão volta. Zero paragens.",
      icon: WifiOff,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Segurança & PIN Supervisor",
      description: "Proteja as suas margens. Defina quem pode anular vendas, oferecer descontos ou abrir a gaveta. Ações sensíveis exigem PIN de Supervisor e ficam registadas.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Sincronização Dolisys",
      description: "O seu ERP e a sua Loja em perfeita harmonia. Produtos, preços, clientes e stocks são geridos centralmente no Dolisys e replicados instantaneamente no POS.",
      icon: RefreshCw,
      color: "text-brand-400",
      bg: "bg-brand-500/10",
      border: "border-brand-500/20"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-xs mb-2 block">Performance & Fiabilidade</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Porquê escolher o VêluPOS?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group border ${benefit.border}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${benefit.bg} ${benefit.color}`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};