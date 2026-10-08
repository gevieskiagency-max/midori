import React from 'react';
import { ChevronRight, Sparkles, Anchor, Bike, Zap, Waves, Ship } from 'lucide-react';
import { trackAnalyticsEvent } from '../constants/brand';

interface AcquisitionSectionProps {
  onOpenModal?: () => void;
}

export const AcquisitionSection: React.FC<AcquisitionSectionProps> = ({ onOpenModal }) => {
  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_aquisicao', { section: 'por_que_comprar_cota' });
    if (onOpenModal) {
      onOpenModal();
    }
  };

  const layers = [
    {
      title: "O ativo",
      description: "Projeto de 589m² de construção em um destino de natureza, lazer e hospitalidade."
    },
    {
      title: "A operação",
      description: "Processos, tecnologia e gestão profissional para explorar a hospedagem."
    },
    {
      title: "A marca",
      description: "Midori como assinatura de experiência, hospitalidade e cuidado."
    },
    {
      title: "O potencial",
      description: "Riviera 1 como primeiro empreendimento de uma rede nacional de resorts boutique."
    }
  ];

  const outrosAtivos = [
    { qty: "5", label: "Patinetes Elétricos", icon: Bike },
    { qty: "2", label: "Motos Elétricas", icon: Zap },
    { qty: "2", label: "Canoas", icon: Anchor },
    { qty: "2", label: "Stand Up Paddles", icon: Waves },
    { qty: "1", label: "Bote Inflável (4 pessoas)", icon: Ship },
    { qty: "1", label: "Jetski", icon: Sparkles }
  ];

  return (
    <section id="aquisicao" className="py-16 sm:py-24 bg-[#071912] text-[#ede7dc] relative overflow-hidden border-t border-b border-white/5">
      <span id="gestao" className="sr-only" />
      
      {/* Iluminação de fundo refinada */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00a86b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Principal: Lado Esquerdo (3 Imagens Oficiais) + Lado Direito (Conteúdo Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LADO ESQUERDO: Composição Editorial com 3 Imagens Oficiais */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3.5 sm:gap-4 max-w-md mx-auto lg:max-w-none">
              
              {/* Imagem 1: Pergolado Lounge & Espaço Gourmet */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/40 h-44 sm:h-48 group">
                <img
                  src="/images/midori/lofts/midori-espaco-gourmet-lounge.jpg"
                  alt="Lounge Pergolado e Espaço Gourmet MIDORI"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Imagem 2: Perspectiva do Resort com Piscina Aquecida de 66m² e Lofts */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/35 bg-black/60 h-48 sm:h-56 group">
                <img
                  src="/hero-resort.png"
                  alt="Resort MIDORI com Piscina Aquecida e Lofts"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
              </div>

              {/* Imagem 3: Lazer Náutico e Represa Jurumirim */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black/40 h-44 sm:h-48 group">
                <img
                  src="/images/midori/galeria/nautica-esportes.jpg"
                  alt="Lazer Náutico e Esportes na Represa Jurumirim"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

          {/* LADO DIREITO: Rótulo AQUISIÇÃO, Título, Texto de Apoio e 4 Camadas de Valor */}
          <div className="lg:col-span-7 lg:pl-4">
            
            {/* Rótulo */}
            <div className="mb-2.5">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold">
                AQUISIÇÃO
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight mb-4 tracking-tight">
              Por que comprar uma cota?
            </h2>

            {/* Texto de Apoio */}
            <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed mb-6 sm:mb-8">
              O investidor não adquire apenas uma fração imobiliária. Ela reúne quatro camadas de valor em um único ativo.
            </p>

            {/* 4 Blocos de Valor */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {layers.map((layer, idx) => (
                <div 
                  key={idx}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group hover:bg-white/[0.02] transition-colors px-1"
                >
                  <div className="sm:w-40 shrink-0">
                    <span className="font-serif-luxury text-lg sm:text-xl text-[#f7d486] font-normal group-hover:text-white transition-colors">
                      {layer.title}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* BLOCO INFERIOR: OUTROS ATIVOS MIDORI PRIVATE CLUB */}
        <div className="pt-8 sm:pt-10 border-t border-[#d4af37]/25">
          <div className="mb-5 text-center sm:text-left">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#d4af37] font-bold">
              OUTROS ATIVOS MIDORI PRIVATE CLUB
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
            {outrosAtivos.map((ativo, idx) => {
              const Icon = ativo.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#06140f]/90 border border-white/10 hover:border-[#d4af37]/40 shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00a86b]/15 flex items-center justify-center text-[#00a86b] group-hover:text-[#f7d486] group-hover:bg-[#d4af37]/15 transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-serif-luxury text-base sm:text-lg font-bold text-[#f7d486] leading-none mb-1">
                      {ativo.qty}
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/85 font-medium leading-tight truncate">
                      {ativo.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Sutil de Conexão com Apresentação */}
        <div className="mt-10 sm:mt-12 text-center pt-2">
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-8 py-4 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Uma Apresentação Privada do Ativo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
