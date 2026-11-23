import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  SEGMENT_FILTERS,
  SOLUTIONS,
  SegmentFilter,
  SolutionItem,
  filterSolutions,
} from '../utils/cs22Logic';

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export function SolutionsSection({ onSelectSolution }: SolutionsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<SegmentFilter>('todos');
  const visibleSolutions = filterSolutions(SOLUTIONS, activeFilter);

  return (
    <section
      id="solucoes"
      className="scroll-mt-16 border-b border-zinc-200 bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#B44309]">Nossas soluções</p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Tecnologia para diferentes modelos de negócio.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-700">
              Soluções de gestão empresarial e presença digital adaptadas à realidade operacional de cada segmento atendido pela CS22 Sistemas.
            </p>
          </div>

          {/* Interactive Segment Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar soluções por segmento"
            className="flex flex-wrap gap-1.5 rounded-xl border border-zinc-200 bg-white p-1.5 shadow-xs"
          >
            {SEGMENT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#C84D0C] text-white'
                      : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleSolutions.map((solution) => (
            <article
              key={solution.id}
              data-testid={`solution-card-${solution.id}`}
              className="ghost-glass-elevated flex flex-col justify-between rounded-2xl p-6 transition-colors duration-150 hover:border-zinc-300"
            >
              <div>
                <p className="text-xs font-medium text-zinc-600">
                  {solution.segment}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-zinc-950">
                  {solution.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-700">
                  {solution.shortDescription}
                </p>

                <div className="mt-5 border-t border-zinc-200 pt-4">
                  <p className="text-xs font-semibold text-zinc-700">Principais benefícios</p>
                  <ul className="mt-3 space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm leading-snug text-zinc-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C84D0C]"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-200 pt-5">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <span className="block text-[11px] text-zinc-600">
                      Valor mensal de referência
                    </span>
                    <span className="font-mono-tabular text-2xl font-bold text-zinc-950">
                      {solution.priceDisplay}
                    </span>
                    <span className="font-mono-tabular text-xs text-zinc-600">/mês</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectSolution(solution)}
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors duration-150 hover:border-[#C84D0C] hover:bg-[#C84D0C] hover:text-white cursor-pointer"
                >
                  <span>Conhecer a solução</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-600">
          Valores de referência comercial sujeitos à confirmação do escopo na proposta da CS22 Sistemas.
        </p>
      </div>
    </section>
  );
}
