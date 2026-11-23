import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChallengesSection } from './components/ChallengesSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ManagementAreasSection } from './components/ManagementAreasSection';
import { EcosystemSection } from './components/EcosystemSection';
import { WhyCs22Section } from './components/WhyCs22Section';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaContactSection } from './components/FinalCtaContactSection';
import { Footer, LegalDocType } from './components/Footer';
import { LegalModal, SolutionDetailModal } from './components/Modals';
import { SOLUTIONS, SolutionItem } from './utils/cs22Logic';

export default function App() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [demoSolutionId, setDemoSolutionId] = useState<string>(SOLUTIONS[0].id);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  const scrollToContact = (solutionId?: string) => {
    if (solutionId) {
      setDemoSolutionId(solutionId);
    }
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#09090B]">
      <Navbar onOpenConsultor={() => scrollToContact()} />

      <main>
        <HeroSection onConsultorClick={() => scrollToContact()} />
        <ChallengesSection />
        <SolutionsSection onSelectSolution={(sol) => setSelectedSolution(sol)} />
        <ManagementAreasSection />
        <EcosystemSection />
        <WhyCs22Section />
        <PricingSection onRequestDemo={(sol) => scrollToContact(sol.id)} />
        <FaqSection />
        <FinalCtaContactSection preselectedSolutionId={demoSolutionId} />
      </main>

      <Footer onOpenLegal={(doc) => setLegalDoc(doc)} />

      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onRequestDemo={(sol) => scrollToContact(sol.id)}
      />

      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
