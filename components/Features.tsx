
import React from 'react';
import { 
  ShoppingCart, Zap, ScanBarcode, 
  Wallet, FileSpreadsheet, Percent,
  Package, AlertTriangle, FileText,
  Utensils, Map, Coffee, CheckCircle2
} from 'lucide-react';

export const Features: React.FC = () => {
  const categories = [
    {
      title: "Operação de Venda (POS)",
      subtitle: "Rapidez e Flexibilidade",
      icon: ShoppingCart,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      items: [
        { text: "Vendas Multi-Aba: Atenda vários clientes simultaneamente sem perder o carrinho.", icon: Zap },
        { text: "Leitura de Código de Barras Instantânea.", icon: ScanBarcode },
        { text: "Quick Pay: Finalize vendas a dinheiro em 1 clique para filas rápidas.", icon: Zap }
      ]
    },
    {
      title: "Gestão Financeira & Caixa",
      subtitle: "Segurança e Controlo Total",
      icon: Wallet,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      items: [
        { text: "Abertura e Fecho de Caixa (Z-Report) com contagem cega.", icon: FileSpreadsheet },
        { text: "Pagamentos Múltiplos (Split): Dinheiro e Cartão na mesma venda.", icon: Percent },
        { text: "Gestão de Dívidas: Conta Corrente de clientes integrada no POS.", icon: FileText }
      ]
    },
    {
      title: "Stock & Inventário",
      subtitle: "Prevenção de Perdas",
      icon: Package,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      items: [
        { text: "Consulta de Stock em Tempo Real diretamente no ecrã de venda.", icon: CheckCircle2 },
        { text: "Registo de Quebras e Consumo Interno imediato.", icon: AlertTriangle },
        { text: "Exportação de Inventário para CSV para conferência física.", icon: FileText }
      ]
    },
    {
      title: "Modo Restaurante",
      subtitle: "Organização de Sala",
      icon: Utensils,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      items: [
        { text: "Mapa de Mesas Visual com status (Livre, Ocupada, A pagar).", icon: Map },
        { text: "Gestão de Zonas distintas (Esplanada, Sala, Balcão).", icon: Coffee },
        { text: "Envio de pedidos para a cozinha em tempo real (brevemente).", icon: Utensils }
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-600/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tudo o que o seu negócio precisa</h2>
          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
            O VêluPOS não é um software isolado. É a extensão nativa definitiva do sistema <span className="text-white font-semibold">Dolisys</span>. 
            Enquanto o Dolisys oferece uma gestão completa em modo <span className="text-brand-400">SaaS (ERP e CRM)</span>, o VêluPOS atua como o componente de alta performance desenhado para simplificar e acelerar a operação no ponto de venda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl hover:border-slate-600 transition-all duration-300 group">
              <div className="flex items-start gap-6 mb-8">
                <div className={`p-4 rounded-2xl ${cat.bg} ${cat.color}`}>
                  <cat.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                  <p className="text-slate-400 font-medium">{cat.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 min-w-[20px] text-slate-500">
                      <CheckCircle2 size={20} className="text-brand-500" />
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
