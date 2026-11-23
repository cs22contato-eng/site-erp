import { CHALLENGES } from '../utils/cs22Logic';

export function ChallengesSection() {
  return (
    <section
      id="desafios"
      className="scroll-mt-16 border-b border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#B44309]">
            Os desafios da gestão empresarial
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Sua empresa não pode crescer no escuro.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Sem ferramentas adequadas, tarefas diárias acabam dependendo de controles isolados que dificultam a leitura real do negócio.
          </p>
        </div>

        {/* Hairline Architectural Grid — 7 Challenges + Closing Statement Card */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHALLENGES.map((item) => (
            <article
              key={item.number}
              className="ghost-glass flex flex-col justify-between rounded-xl p-5 transition-colors duration-150 hover:border-zinc-300"
            >
              <div>
                <span className="font-mono-tabular text-xs font-semibold text-[#C84D0C]">
                  {item.number}.
                </span>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}

          {/* 8th Grid Cell: Closing Statement */}
          <div className="flex flex-col justify-between rounded-xl border border-orange-300/70 bg-orange-50/75 p-5">
            <div>
              <p className="text-xs font-semibold text-[#B44309]">Direção CS22 Sistemas</p>
              <p className="mt-3 font-display text-base font-semibold leading-snug text-zinc-950">
                A tecnologia certa transforma informações em controle e controle em decisões melhores.
              </p>
            </div>
            <a
              href="#solucoes"
              className="mt-5 inline-flex items-center text-xs font-semibold text-[#B44309] hover:text-zinc-950 transition-colors"
            >
              Ver soluções por segmento →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
