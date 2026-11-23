import { WHY_CS22_PILLARS } from '../utils/cs22Logic';

export function WhyCs22Section() {
  return (
    <section
      id="por-que-cs22"
      className="scroll-mt-16 border-b border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Positioning Statement */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#B44309]">Por que a CS22 Sistemas?</p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Tecnologia aplicada à realidade do seu negócio.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              A CS22 Sistemas desenvolve e disponibiliza soluções digitais estruturadas para empresas que desejam organizar a operação, administrar finanças e estoque com clareza e sustentar o crescimento com base tecnológica sólida.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Sua empresa precisa de controle. Nós oferecemos a tecnologia para isso — com atendimento direto para alinhar cada solução ao momento real do seu negócio.
            </p>
          </div>

          {/* Right 6 Pillars Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {WHY_CS22_PILLARS.map((pillar) => (
              <article
                key={pillar.number}
                className="ghost-glass rounded-xl p-5"
              >
                <span className="font-mono-tabular text-xs font-semibold text-[#C84D0C]">
                  {pillar.number}.
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-zinc-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
