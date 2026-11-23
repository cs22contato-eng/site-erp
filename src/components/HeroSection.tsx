import { ArrowRight, MessageSquare } from 'lucide-react';
import { ErpMockup } from './ErpMockup';

interface HeroSectionProps {
  onConsultorClick: () => void;
}

export function HeroSection({ onConsultorClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="scroll-mt-16 relative overflow-hidden border-b border-zinc-200 bg-[#F8F9FB] metallic-grid-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-orange-500/[0.06] via-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Positioning + Value Proposition + Actions */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-wide text-[#B44309]">
              CS22 Sistemas <span aria-hidden="true" className="mx-1.5 text-zinc-400">·</span> Tecnologia que move negócios
            </p>

            <h1
              className="mt-4 font-display font-bold tracking-tight text-zinc-950"
              style={{
                fontSize: 'clamp(2.25rem, 3.8vw, 3.4rem)',
                lineHeight: 1.08,
                textWrap: 'balance',
              }}
            >
              Gestão inteligente para empresas que querem crescer.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              Controle financeiro, estoque, vendas e operação em um só lugar. Conheça as soluções da CS22 para simplificar a gestão e melhorar o controle do seu negócio.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600">
              Sua empresa precisa de controle. Nós oferecemos a tecnologia para isso. Soluções de gestão empresarial para organizar processos, controlar resultados e dar mais eficiência à sua operação.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#solucoes"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B24208] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <span>Conhecer nossas soluções</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onConsultorClick}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 text-zinc-700" aria-hidden="true" />
                <span>Falar com um consultor</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Illustrative ERP Mockup */}
          <div className="lg:col-span-6">
            <ErpMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
