import React from 'react';
import { IMAGES } from '../data/assets';
import { 
  Waves, 
  Zap, 
  Bike, 
  Flame, 
  Armchair, 
  Trees, 
  Baby, 
  Compass, 
  Sparkles, 
  Home, 
  ChevronRight 
} from 'lucide-react';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

interface MidoriResortSectionProps {
  onOpenModal?: () => void;
}

export const MidoriResortSection: React.FC<MidoriResortSectionProps> = ({ onOpenModal }) => {
  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_ecossistema', { section: 'midori_stack' });
  };

  const experienceAssets = [
    { name: "1 Jet Ski", icon: Waves },
    { name: "2 Motos Elétricas", icon: Zap },
    { name: "5 Patinetes Elétricos", icon: Bike },
    { name: "2 Canoas", icon: Compass },
    { name: "2 Stand Up Paddles", icon: Waves },
    { name: "1 Bote p/ 4 Pessoas", icon: Compass },
    { name: "Piscina Privativa", icon: Sparkles },
    { name: "Espaço Gourmet", icon: Flame },
    { name: "Bangalôs", icon: Armchair },
    { name: "Lounge", icon: Armchair },
    { name: "Fire Pit (Lareira)", icon: Flame },
    { name: "Área Kids", icon: Baby },
    { name: "Jardins Tropicais", icon: Trees },
  ];

  return (
    <section id="empreendimento" className="py-16 sm:py-24 bg-[#06120d] text-[#ede7dc] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#d4af37] block mb-3 font-semibold">
            O MIDORI PRIVATE CLUB
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight">
            “Dentro da Riviera, algo ainda mais exclusivo.”
          </h2>
        </div>

        {/* Números Chave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">1.200 m²</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">de Terreno</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">589 m²</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">Construídos</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">66 m²</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">de Piscina</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">6 Lofts</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">Premium</div>
          </div>
        </div>

        {/* Galeria compacta de fotos do resort */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          <div className="h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 relative group">
            <img 
              src={IMAGES.loftInterior} 
              alt="Loft MIDORI" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-semibold text-white tracking-wide">6 Lofts de Arquitetura Autoral</span>
            </div>
          </div>

          <div className="h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 relative group">
            <img 
              src={IMAGES.loftPoolSunset} 
              alt="Piscina Privativa MIDORI" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-semibold text-white tracking-wide">Piscina Privativa de 66 m²</span>
            </div>
          </div>

          <div className="h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 relative group">
            <img 
              src={IMAGES.gourmetArea} 
              alt="Gourmet & Lounge MIDORI" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-semibold text-white tracking-wide">Espaço Gourmet & Fire Pit</span>
            </div>
          </div>
        </div>

        {/* Frase de apoio curta antes dos cards */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-sm sm:text-base text-[#ede7dc]/80 font-light leading-relaxed">
            “Mais do que um loft, o MIDORI foi pensado como um ecossistema completo para você chegar e viver.”
          </p>
        </div>

        {/* Empilhamento de Valor: Ecossistema Categorizado */}
        <div className="p-6 sm:p-8 lg:p-9 rounded-2xl bg-gradient-to-b from-[#081a13] to-[#06140f] border border-[#d4af37]/35 max-w-4xl mx-auto mb-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gold luxury ambient reflection */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Header do Card */}
          <div className="text-center mb-7 relative z-10">
            <span className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.25em] text-[#00a86b] font-bold block mb-2">
              EXPERIÊNCIA COMPLETA MIDORI
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury text-white font-normal leading-tight">
              TUDO ISSO FAZ PARTE DA SUA EXPERIÊNCIA COMO COTISTA.
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-white/75 font-light max-w-2xl mx-auto leading-relaxed">
              “Sua cota não dá acesso apenas ao loft. Ela conecta sua família a uma estrutura completa de lazer, mobilidade, convivência e experiências dentro do MIDORI.”
            </p>
          </div>

          {/* 3 Categorias de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4.5 mb-7 relative z-10">
            
            {/* Categoria 1: Náutica & Represa */}
            <div className="p-4 rounded-xl bg-[#06120d]/90 border border-white/10 hover:border-[#00a86b]/40 transition-colors flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b]">
                  <Waves className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] uppercase font-mono tracking-wider font-bold text-[#f7d486]">
                  1. NÁUTICA & REPRESA
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-white/85 font-medium flex-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>1 Jet Ski</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>2 Canoas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>2 Stand Up Paddles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>1 Bote para 4 Pessoas</span>
                </li>
              </ul>
            </div>

            {/* Categoria 2: Mobilidade Dentro da Riviera */}
            <div className="p-4 rounded-xl bg-[#06120d]/90 border border-white/10 hover:border-[#00a86b]/40 transition-colors flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b]">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] uppercase font-mono tracking-wider font-bold text-[#f7d486]">
                  2. MOBILIDADE RIVIERA
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-white/85 font-medium flex-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>2 Motos Elétricas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>5 Patinetes Elétricos</span>
                </li>
              </ul>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] text-white/50 font-light">
                Mobilidade silenciosa e privativa para circular pelo condomínio.
              </div>
            </div>

            {/* Categoria 3: Estrutura MIDORI */}
            <div className="p-4 rounded-xl bg-[#06120d]/90 border border-white/10 hover:border-[#00a86b]/40 transition-colors flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] uppercase font-mono tracking-wider font-bold text-[#f7d486]">
                  3. ESTRUTURA MIDORI
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-white/85 font-medium flex-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Piscina Privativa (66 m²)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Espaço Gourmet</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Bangalôs & Lounge</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Fire Pit (Lareira de Chão)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Área Kids & Jardins Tropicais</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copy Central e Apoio de Alto Impacto */}
          <div className="text-center border-t border-white/10 pt-5 relative z-10 space-y-1.5">
            <p className="text-sm sm:text-base lg:text-lg font-serif-luxury italic text-[#f7d486] leading-snug">
              “Sua cota é a porta de entrada. Todo esse ecossistema é o que transforma o MIDORI em uma experiência muito maior do que uma segunda residência.”
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Menos estrutura para comprar individualmente. Mais experiências para aproveitar com sua família.
            </p>
            <p className="text-[10px] sm:text-[11px] text-white/40 font-mono pt-1">
              * Acesso à estrutura e aos ativos do MIDORI conforme as regras de utilização e agendamento do clube.
            </p>
          </div>
        </div>

        {/* CTA: Quero Conhecer Esse Ecossistema */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppLink("Vim pela seção de benefícios e ecossistema do cotista.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-8 py-4 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Conhecer Esse Ecossistema</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
