import { useState } from 'react';
import {
  BarChart3,
  Boxes,
  Check,
  Compass,
  Globe,
  ShoppingBag,
  Wallet,
} from 'lucide-react';
import { MANAGEMENT_AREAS } from '../utils/cs22Logic';

const AREA_ICONS: Record<string, typeof Wallet> = {
  financeiro: Wallet,
  estoque: Boxes,
  vendas: ShoppingBag,
  operacional: Compass,
  indicadores: BarChart3,
  'presenca-digital': Globe,
};

export function ManagementAreasSection() {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(MANAGEMENT_AREAS[0].id);
  const selectedArea =
    MANAGEMENT_AREAS.find((a) => a.id === selectedAreaId) ?? MANAGEMENT_AREAS[0];
  const SelectedIcon = AREA_ICONS[selectedArea.id] ?? Compass;

  return (
    <section
      id="gestao"
      className="scroll-mt-16 border-b border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-[#B44309]">Gestão empresarial</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Mais controle sobre o que acontece na sua empresa.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Explore as principais frentes de gestão contempladas pelas soluções da CS22, respeitando os recursos disponíveis em cada sistema contratado.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Grid: 6 Selectable Management Categories */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {MANAGEMENT_AREAS.map((area) => {
              const Icon = AREA_ICONS[area.id] ?? Compass;
              const isSelected = area.id === selectedArea.id;

              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedAreaId(area.id)}
                  aria-pressed={isSelected}
                  className={`flex flex-col items-start rounded-xl p-5 text-left transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'border border-[#C84D0C] bg-orange-50/70'
                      : 'ghost-glass hover:border-zinc-300'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${isSelected ? 'text-[#C84D0C]' : 'text-zinc-600'}`}
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 font-display text-base font-semibold text-zinc-950">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                    {area.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Detailed Area Preview */}
          <div className="ghost-glass-elevated flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-300 bg-orange-50">
                  <SelectedIcon className="h-5 w-5 text-[#C84D0C]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600">Área de gestão selecionada</p>
                  <h3 className="font-display text-xl font-semibold text-zinc-950">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                {selectedArea.description}
              </p>

              <div className="mt-6 border-t border-zinc-200 pt-5">
                <p className="text-xs font-semibold text-zinc-700">
                  Foco da organização nesta frente
                </p>
                <ul className="mt-3 space-y-2.5">
                  {selectedArea.focusPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-zinc-800"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C84D0C]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-4">
              <p className="text-xs leading-relaxed text-zinc-600">
                {selectedArea.availabilityNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
