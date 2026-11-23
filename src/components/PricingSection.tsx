import { Check, MessageSquare } from 'lucide-react';
import {
  SOLUTIONS,
  SolutionItem,
  buildSolutionWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/cs22Logic';

interface PricingSectionProps {
  onRequestDemo: (solution: SolutionItem) => void;
}

export function PricingSection({ onRequestDemo }: PricingSectionProps) {
  return (
    <section
      id="planos"
      className="scroll-mt-16 border-b border-zinc-200 bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#B44309]">Planos e preços</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Transparência comercial para escolher sua solução.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Confira as mensalidades de referência por segmento atendido, recursos contemplados e condições comerciais disponíveis para contratação ou demonstração.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => {
            const whatsappHref = buildWhatsAppUrl(
              buildSolutionWhatsAppMessage(solution, 'contratar')
            );

            return (
              <article
                key={solution.id}
                data-testid={`pricing-card-${solution.id}`}
                className="ghost-glass-elevated flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <p className="text-xs font-medium text-zinc-600">
                    {solution.segment}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-zinc-950">
                    {solution.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1 border-b border-zinc-200 pb-4">
                    <span className="font-mono-tabular text-3xl font-bold text-zinc-950">
                      {solution.priceDisplay}
                    </span>
                    <span className="font-mono-tabular text-sm text-zinc-600">/mês</span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-semibold text-zinc-700">Recursos contemplados</p>
                    <ul className="mt-2.5 space-y-2">
                      {solution.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-800">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C84D0C]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-zinc-200 pt-4">
                    <p className="text-xs font-semibold text-zinc-700">Condições comerciais</p>
                    <ul className="mt-2 space-y-1.5">
                      {solution.commercialConditions.map((cond) => (
                        <li key={cond} className="text-xs leading-relaxed text-zinc-600">
                          {cond}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B24208]"
                  >
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    <span>Contratar pelo WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onRequestDemo(solution)}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 cursor-pointer"
                  >
                    Solicitar demonstração
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-zinc-600">
          Os valores acima são referências comerciais para cada solução e devem ser confirmados junto ao consultor da CS22 antes da contratação definitiva.
        </p>
      </div>
    </section>
  );
}
