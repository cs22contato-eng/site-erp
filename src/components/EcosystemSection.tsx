import { useState } from 'react';
import { ArrowRight, Check, Layers } from 'lucide-react';
import { ECOSYSTEM_MODULES, buildWhatsAppUrl } from '../utils/cs22Logic';

export function EcosystemSection() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['erp', 'financeiro', 'ecommerce']);
  const [imgError, setImgError] = useState(false);

  const toggleModule = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id]
    );
  };

  const selectedModules = ECOSYSTEM_MODULES.filter((m) => selectedIds.includes(m.id));
  const selectedNames = selectedModules.map((m) => m.name).join(', ');
  const ecosystemWhatsappHref = buildWhatsAppUrl(
    `Olá, equipe CS22 Sistemas! Tenho interesse em combinar as seguintes soluções do ecossistema: ${selectedNames}. Gostaria de confirmar a disponibilidade para o meu segmento.`
  );

  return (
    <section
      id="ecossistema"
      className="scroll-mt-16 border-b border-zinc-200 bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#B44309]">Ecossistema digital</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Sua gestão e sua presença digital trabalhando juntas.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Combine ferramentas internas de controle empresarial com canais digitais para apresentar produtos e atender clientes, conforme a disponibilidade de cada solução.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left: 5 Modular Ecosystem Cards */}
          <div className="space-y-3 lg:col-span-7">
            {ECOSYSTEM_MODULES.map((mod) => {
              const isSelected = selectedIds.includes(mod.id);
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  aria-pressed={isSelected}
                  className={`flex w-full items-start justify-between gap-4 rounded-xl p-4 sm:p-5 text-left transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'border border-[#C84D0C] bg-orange-50/75'
                      : 'ghost-glass hover:border-zinc-300'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-semibold text-zinc-950">
                        {mod.name}
                      </h3>
                      <span aria-hidden="true" className="text-zinc-400">·</span>
                      <span className="text-xs text-zinc-600">{mod.role}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                      {mod.description}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">{mod.complementsWith}</p>
                  </div>

                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                      isSelected
                        ? 'border-[#C84D0C] bg-[#C84D0C] text-white'
                        : 'border-zinc-300 bg-white text-transparent'
                    }`}
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Architectural Visual & Complementary Summary */}
          <div className="ghost-glass-elevated flex flex-col justify-between overflow-hidden rounded-2xl lg:col-span-5">
            <div className="relative h-56 w-full overflow-hidden border-b border-zinc-200 bg-zinc-900">
              {!imgError ? (
                <img
                  src="/src/assets/images/cs22_dark_glass_architecture_1795404854136.jpg"
                  alt="Arquitetura corporativa em vidro escuro e metal representando a estrutura tecnológica da CS22 Sistemas"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover opacity-85 grayscale-[30%]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Layers className="h-12 w-12 text-orange-400/60" aria-hidden="true" />
                </div>
              )}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium text-orange-300">Composição complementar</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  Arquitetura modular para sua operação
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-xs font-semibold text-zinc-700">
                  Frentes selecionadas ({selectedModules.length} de {ECOSYSTEM_MODULES.length})
                </p>
                <ul className="mt-3 space-y-2">
                  {selectedModules.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between border-b border-zinc-200/80 pb-2 text-sm text-zinc-800 last:border-b-0"
                    >
                      <span className="font-medium text-zinc-950">{item.name}</span>
                      <span className="text-xs text-zinc-600">{item.role}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs leading-relaxed text-zinc-600">
                  Cada módulo atua de forma complementar na rotina empresarial. A disponibilidade conjunta ou eventual integração depende da solução contratada para o seu segmento.
                </p>
              </div>

              <a
                href={ecosystemWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B24208]"
              >
                <span>Consultar combinação no WhatsApp</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
