import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const CS22_LOGO_SRC = '/assets/aistudio/cs22-logo-branco.png';
export const CS22_ICON_SRC =
  '/assets/aistudio/WhatsApp_Image_2026-11-20_at_23.47.17_7b9a96a4.jpeg';

interface NavbarProps {
  onOpenConsultor: () => void;
}

const NAV_LINKS = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#gestao', label: 'Gestão' },
  { href: '#ecossistema', label: 'Ecossistema' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar({ onOpenConsultor }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-[#060608]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="CS22 Sistemas"
          className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
        >
          <img
            src={CS22_LOGO_SRC}
            alt="CS22 Sistemas"
            className="h-9 w-auto object-contain mix-blend-lighten sm:h-10"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 text-zinc-300 transition-colors duration-150 hover:text-white hover:underline hover:decoration-orange-500 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenConsultor}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#C84D0C] px-4 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#B24208] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 cursor-pointer"
          >
            Falar com consultor
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-400/20 text-zinc-200 transition-colors hover:bg-white/5 md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-400/15 bg-[#0A0B0E] px-4 py-4 md:hidden">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultor();
              }}
              className="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg bg-[#C84D0C] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#B24208] cursor-pointer"
            >
              Falar com consultor
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
