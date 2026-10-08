import React from 'react';
import { MidoriLogo } from '../components/MidoriLogo';
import { getWhatsAppLink, trackAnalyticsEvent, BRAND_INFO } from '../constants/brand';
import { IMAGES } from '../data/assets';
import { ShieldCheck, Sparkles, Phone, ArrowRight, MapPin } from 'lucide-react';

interface ClosingSectionProps {
  onOpenModal: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onOpenModal }) => {
  const handleFinalCta = (label: string) => {
    trackAnalyticsEvent('clique_cta_fechamento', { cta: label });
  };

  return (
    <footer id="contato" className="bg-[#050f0c] text-[#ede7dc] relative overflow-hidden border-t border-[#d4af37]/20">
      
      {/* Editorial Grand Closing Block */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        
        {/* Background Image of Lake Sunset */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={IMAGES.sunsetLake}
            alt="Pôr do Sol Represa Jurumirim"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050f0c] via-[#050f0c]/90 to-[#050f0c]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="flex justify-center mb-8">
            <MidoriLogo size="md" colorMode="green" />
          </div>

          <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#d4af37] block mb-4">
            A HORA DA DECISÃO
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            “A pergunta que fica não é se você quer viver a Riviera. <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">
              É se você quer continuar adiando isso.”
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto">
            Os finais de semana com os filhos passam rápido. A oportunidade de fazer parte do grupo de 36 famílias fundadoras do MIDORI existe agora.
          </p>

          {/* 4 Pillars of Confidence Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-left">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-[#00a86b] font-semibold uppercase font-mono">01. EXCLUSIVIDADE</div>
              <div className="text-sm font-serif-luxury text-white mt-1">36 Famílias Fundadoras</div>
              <p className="text-[11px] text-white/50 mt-1">Grupo seleto e fechado de proprietários.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-[#d4af37] font-semibold uppercase font-mono">02. LOCALIZAÇÃO</div>
              <div className="text-sm font-serif-luxury text-white mt-1">500m do Iate Clube</div>
              <p className="text-[11px] text-white/50 mt-1">Lote nobre na Riviera de Santa Cristina 1.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-[#00a86b] font-semibold uppercase font-mono">03. EXPERIÊNCIA</div>
              <div className="text-sm font-serif-luxury text-white mt-1">Acervo Náutico & Gestão</div>
              <p className="text-[11px] text-white/50 mt-1">Jet Ski, canoas, motos e hotelaria inclusa.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-[#d4af37] font-semibold uppercase font-mono">04. VALOR</div>
              <div className="text-sm font-serif-luxury text-white mt-1">20% OFF Fundadores</div>
              <p className="text-[11px] text-white/50 mt-1">Condição especial apenas nesta fase inicial.</p>
            </div>
          </div>

          {/* Dual Closing CTAs */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Quero solicitar uma apresentação privada.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleFinalCta('apresentacao_privada_modal')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-semibold uppercase tracking-[0.16em] text-xs sm:text-sm rounded-sm shadow-2xl shadow-[#00a86b]/30 transition-all cursor-pointer"
            >
              <span>Quero Uma Apresentação Privada</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink("Quero solicitar uma apresentação privada.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleFinalCta('whatsapp_consultor')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a1f18] hover:bg-[#0e2c22] border border-[#d4af37]/40 text-white font-semibold uppercase tracking-[0.16em] text-xs sm:text-sm rounded-sm transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Falar com o Consultor no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Institutional Footer Bar */}
      <div className="border-t border-white/10 py-10 bg-[#030a08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <MidoriLogo variant="horizontal" size="sm" />
            <div className="text-xs text-white/50 font-light sm:border-l sm:border-white/10 sm:pl-4">
              Riviera de Santa Cristina • Represa Jurumirim • SP
            </div>
          </div>

          <div className="text-xs text-white/40 font-light space-y-1">
            <div>
              MIDORI PRIVATE CLUB © {new Date().getFullYear()} • Todos os direitos reservados.
            </div>
            <div className="text-[11px] text-white/30">
              As imagens e perspectivas são ilustrativas. O memorial descritivo e as normas de utilização constam no contrato oficial.
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#d4af37]/80">
            <a 
              href={getWhatsAppLink("Quero solicitar uma apresentação privada.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Atendimento Privado
            </a>
            <span>•</span>
            <a 
              href={getWhatsAppLink("Quero solicitar uma apresentação privada.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp Oficial
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};
