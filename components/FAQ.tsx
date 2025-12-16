import React from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Mail } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O VêluPOS substitui o meu Dolisys atual?",
      answer: "Não. O VêluPOS não substitui o Dolisys; ele completa-o. Imagine o Dolisys como o \"Cérebro\" da sua empresa (gestão, contabilidade, CRM) e o VêluPOS como o \"Músculo\" na frente de loja. O VêluPOS é um cliente nativo desenhado especificamente para vender com velocidade máxima."
    },
    {
      question: "O que acontece se a internet falhar ou o servidor cair?",
      answer: "O seu negócio não para. Nunca. O VêluPOS utiliza uma arquitetura \"Offline-First\". Todas as vendas são guardadas localmente primeiro. Se a internet falhar ou o servidor Dolisys entrar em manutenção, o operador continua a vender. O sistema sincroniza automaticamente quando a conexão regressar."
    },
    {
      question: "Por que devo usar o VêluPOS em vez do POS web padrão?",
      answer: "Performance e Agilidade. O POS web depende do browser e de carregamentos de página. O VêluPOS é uma aplicação nativa (Desktop) otimizada para toque, leitura instantânea de códigos de barras e impressão direta sem diálogos do Windows. É até 3x mais rápido."
    },
    {
      question: "Os dados ficam seguros se o computador avariar?",
      answer: "Sim. O sistema sincroniza constantemente com o servidor central. Em caso de avaria do computador local antes da sincronização, dispomos de ferramentas de recuperação de base de dados local acessíveis no menu de Configurações para extrair as vendas pendentes."
    },
    {
      question: "Preciso de instalar alguma coisa no servidor?",
      answer: "Não. O VêluPOS conecta-se através da API REST padrão do Dolisys. Basta gerar uma chave de API no seu perfil de utilizador e inseri-la no VêluPOS. Não requer instalação de módulos complexos no servidor."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900/50">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header Column (Sticky on Desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
                <HelpCircle size={16} className="text-brand-400" />
                <span className="text-xs font-semibold text-brand-300 uppercase tracking-wide">Suporte & Dúvidas</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Perguntas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-300">
                  Frequentes
                </span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Entendemos que a estabilidade do seu ponto de venda é crítica. Aqui explicamos como garantimos que nunca para de vender.
              </p>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <MessageCircle size={18} className="text-emerald-400" />
                  Ainda tem dúvidas?
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  A nossa equipa técnica está pronta para ajudar na integração.
                </p>
                <a href="mailto:sol@dolisys.com" className="text-sm font-medium text-brand-400 hover:text-brand-300 flex items-center gap-2 transition-colors">
                  <Mail size={16} />
                  Fale connosco
                </a>
              </div>
            </div>
          </div>

          {/* Questions Column */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 group-open:rounded-b-none group-open:bg-slate-900/80 group-open:border-brand-500/30">
                  <span className="font-semibold text-slate-200 text-lg pr-8 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-slate-500 group-open:text-brand-400 bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                
                <div className="px-6 pb-6 bg-slate-900/80 border-x border-b border-brand-500/30 border-t-0 rounded-b-2xl">
                  <div className="pt-2 text-slate-400 leading-relaxed text-base border-t border-slate-800/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};