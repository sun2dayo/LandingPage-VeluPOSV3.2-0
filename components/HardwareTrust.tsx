import React from 'react';
import { Printer, ScanBarcode, Monitor, CheckCircle2 } from 'lucide-react';

export const HardwareTrust: React.FC = () => {
  return (
    <section id="hardware" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-6">Desenhado para o retalho real</h2>
            <p className="text-slate-400 text-lg mb-8">
              Não precisa de trocar o seu equipamento. O VêluPOS foi construído para ser leve e compatível com a maioria do hardware de mercado.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-brand-400">
                  <Printer size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Impressoras Térmicas</h4>
                  <p className="text-slate-500 text-sm">Compatível com impressoras de talões 58mm e 80mm (ESC/POS padrão).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-brand-400">
                  <ScanBarcode size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Leitores de Código de Barras</h4>
                  <p className="text-slate-500 text-sm">Plug & Play com qualquer leitor USB ou Bluetooth.</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-brand-400">
                  <Monitor size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Requisitos Mínimos Baixos</h4>
                  <p className="text-slate-500 text-sm">Corre suavemente em Windows 10/11 com apenas 4GB RAM.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="glass-panel p-8 rounded-3xl border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 text-center">A escolha de confiança</h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Uptime Local</div>
                 </div>
                 <div className="bg-slate-950 p-4 rounded-xl text-center border border-slate-800">
                    <div className="text-3xl font-bold text-white mb-1">&lt; 1s</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">Tempo de Venda</div>
                 </div>
                 <div className="col-span-2 bg-slate-950 p-4 rounded-xl flex items-center justify-center gap-3 border border-slate-800">
                    <CheckCircle2 className="text-emerald-500" />
                    <span className="text-slate-300 font-medium">Certificado para Windows 11</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};