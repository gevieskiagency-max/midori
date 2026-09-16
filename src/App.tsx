import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { PrivatePresentationModal } from './components/PrivatePresentationModal';

// 8 Blocks Total: HERO (Untouched) + 7 Blocks
import { HeroSection } from './sections/HeroSection';
import { RivieraSection } from './sections/RivieraSection';
import { PainSection } from './sections/PainSection';
import { TheTurnaroundSection } from './sections/TheTurnaroundSection';
import { MidoriResortSection } from './sections/MidoriResortSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { OfferSection } from './sections/OfferSection';
import { TechManagementSection } from './sections/TechManagementSection';
import { FaqSection } from './sections/FaqSection';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCota, setSelectedCota] = useState<'cota-8' | 'cota-4' | undefined>(undefined);

  const handleOpenModal = (cotaId?: 'cota-8' | 'cota-4') => {
    setSelectedCota(cotaId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#06140f] text-[#ede7dc] font-sans selection:bg-[#d4af37] selection:text-[#06140f]">
      {/* Top Navigation */}
      <Navbar onOpenModal={() => handleOpenModal()} />

      {/* Main High-Conversion Sales Flow */}
      <main>
        {/* HERO: Rigorously preserved without any changes */}
        <HeroSection onOpenModal={() => handleOpenModal()} />

        {/* 1. RIVIERA DE SANTA CRISTINA (Desejo imediato, 4 pilares enxutos) */}
        <RivieraSection onOpenModal={() => handleOpenModal()} />

        {/* 2. A DOR DA SEGUNDA RESIDÊNCIA (9 pontos compactos + pergunta de impacto) */}
        <PainSection />

        {/* 3. A VIRADA: COMPRE MENOS, VIVA MUITO MAIS (3 pilares objetivos) */}
        <TheTurnaroundSection />

        {/* 4. O MIDORI + TUDO QUE O CLIENTE LEVA (Empreendimento + Ativos empilhados visualmente) */}
        <MidoriResortSection onOpenModal={() => handleOpenModal()} />

        {/* 5. COMPARAÇÃO CASA TRADICIONAL X MIDORI (Conceitual, sem números estimados) */}
        <ComparisonSection />

        {/* 6. OFERTA / 36 FAMÍLIAS FUNDADORAS (Cotas R$ 150k e R$ 300k, 20% OFF Fundadores) */}
        <OfferSection onOpenModal={(cotaId) => handleOpenModal(cotaId)} />

        {/* 6.1 GESTÃO & TECNOLOGIA: VOCÊ VIVE. A OPERAÇÃO CUIDA DO RESTANTE. */}
        <TechManagementSection />

        {/* 7. FECHAMENTO + FAQ CURTO (4 perguntas) + WHATSAPP */}
        <FaqSection onOpenModal={() => handleOpenModal()} />
      </main>

      {/* Compact Floating WhatsApp Trigger */}
      <StickyWhatsApp />

      {/* High-Ticket Qualification Presentation Modal */}
      <PrivatePresentationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedCota={selectedCota}
      />
    </div>
  );
}
