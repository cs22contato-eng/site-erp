import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../utils/cs22Logic';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-16 border-b border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold text-[#B44309]">Perguntas frequentes</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Dúvidas sobre as soluções e contratação
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-700">
            Esclarecimentos diretos sobre o funcionamento dos sistemas ERP da CS22, valores mensais e atendimento comercial.
          </p>
        </div>

        <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-base font-semibold text-zinc-950 transition-colors hover:text-[#B44309] cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C84D0C]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-5 pr-8 text-sm leading-relaxed text-zinc-700 sm:text-base"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
