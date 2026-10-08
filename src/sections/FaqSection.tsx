import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { MidoriLogo } from '../components/MidoriLogo';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';
import { IMAGES } from '../data/assets';

interface FaqClosingProps {
  onOpenModal: () => void;
}

export const FaqSection: React.FC<FaqClosingProps> = ({ onOpenModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems: { q: string; a: React.ReactNode }[] = [
    {
      q: "1. O que estou adquirindo?",
      a: (
        <div className="space-y-2.5">
          <p>
            Você adquire uma cota de uso vitalício de um loft de alto padrão, totalmente mobiliado e pronto para receber você, sua família ou seus convidados.
          </p>
          <p>
            Além do loft, você terá acesso à estrutura de lazer e experiências integradas ao Iate Clube Riviera, com padrão inspirado em resorts de Orlando e Miami.
          </p>
          <p className="text-white/90">
            Uma combinação de conforto, praticidade e experiência de resort em um único investimento.
          </p>
        </div>
      )
    },
    {
      q: "2. Como funciona o uso?",
      a: (
        <div className="space-y-2.5">
          <p>
            Cada cota garante ao cotista 1 semana de uso por mês ou 1 semana a cada 2 meses, de forma vitalícia, conforme a modalidade contratada.
          </p>
          <p>
            Você poderá utilizar seu período com sua família e convidados, de acordo com a disponibilidade e as regras de sorteio de cada trimestre.
          </p>
          <p>
            Caso não utilize sua semana, poderá disponibilizá-la para troca com outros cotistas.
          </p>
          <p className="text-white/90">
            Mais liberdade para usar. Mais praticidade para administrar. Mais possibilidades para aproveitar seu patrimônio.
          </p>
        </div>
      )
    },
    {
      q: "3. Quem cuida da operação?",
      a: "A gestão profissional cuida de 100% da operação: limpeza padrão hoteleiro, manutenção de piscina, jardinagem, segurança e revisão dos equipamentos. Você não tem trabalho nem funcionários."
    },
    {
      q: "4. Como conheço os detalhes do projeto?",
      a: "Por se tratar de um grupo restrito a apenas 36 famílias fundadoras, o atendimento é individual e confidencial via WhatsApp, onde você recebe o memorial descritivo, plantas e tira dúvidas diretamente com o consultor."
    }
  ];

  const handleCtaClick = (label: string) => {
    trackAnalyticsEvent('clique_cta_fechamento', { label });
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#050f0c] text-[#ede7dc] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header FAQ */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS PRINCIPAIS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury text-white font-normal">
            Perguntas Frequentes
          </h2>
        </div>

        {/* 4 Perguntas Curtas */}
        <div className="space-y-3 mb-16 sm:mb-20">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#081b14] border-[#d4af37]/50 shadow-xl'
                    : 'bg-[#06120d]/70 border-white/8 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif-luxury text-white font-medium">
                    {item.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#d4af37] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm sm:text-[15px] text-white/80 leading-relaxed border-t border-white/5 pt-3.5 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco de Fechamento de Alto Impacto / Decisão & Futuro */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-2xl shadow-black/90 p-8 sm:p-14 lg:p-16 text-center">
          
          {/* Imagem de Fundo Cinematográfica (Pôr do Sol Represa Jurumirim, Águas Calmas, Tons Dourados e Cobre) */}
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.closingSunset}
              alt="Pôr do Sol na Represa Jurumirim"
              className="w-full h-full object-cover object-center transform scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Overlays sutis para preservar 100% de legibilidade e profundidade emocional */}
            <div className="absolute inset-0 bg-[#040e0a]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040e0a] via-[#040e0a]/55 to-[#040e0a]/80" />
            <div className="absolute inset-0 bg-radial-vignette opacity-70" />
            {/* Brilho quente suave no rodapé */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4af37]/10 blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <MidoriLogo size="md" />
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight mb-3 drop-shadow-md">
              “A pergunta não é se você gostaria de viver a Riviera.”
            </h3>
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury italic text-[#f7d486] mb-6 drop-shadow">
              “É quanto tempo ainda pretende adiar isso.”
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs uppercase tracking-widest text-white/70 font-mono mb-8">
              <span className="text-white font-semibold">MIDORI PRIVATE CLUB</span>
              <span>•</span>
              <span className="text-[#d4af37]">36 Famílias Fundadoras</span>
              <span>•</span>
              <span>Riviera de Santa Cristina</span>
              <span>•</span>
              <span>Represa Jurumirim</span>
            </div>

            {/* CTA Grande & Botão WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
              <a
                href={getWhatsAppLink("Quero solicitar uma apresentação privada.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick('solicitar_apresentacao_privada')}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm py-4 px-6 rounded-md shadow-2xl shadow-[#00a86b]/35 hover:shadow-[#00a86b]/50 transition-all cursor-pointer"
              >
                <span>Solicitar Apresentação Privada</span>
              </a>

              <a
                href={getWhatsAppLink("Quero solicitar uma apresentação privada.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick('falar_com_consultor_whatsapp')}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-black/80 text-[#ede7dc] hover:text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm py-4 px-6 rounded-md border border-[#d4af37]/50 hover:border-[#d4af37] transition-all cursor-pointer backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-[#00a86b]" />
                <span>Falar com o Consultor</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 mt-5 font-light">
              Atendimento privado e confidencial via WhatsApp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
