import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../utils/cs22Logic';
import { CS22_LOGO_SRC } from './Navbar';

export type LegalDocType = 'privacy' | 'terms' | null;

interface FooterProps {
  onOpenLegal: (doc: Exclude<LegalDocType, null>) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const whatsappUrl = buildWhatsAppUrl(
    'Olá, equipe CS22 Sistemas! Gostaria de mais informações sobre as soluções de gestão empresarial.'
  );

  return (
    <footer className="bg-[#060608] py-12 text-zinc-300 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              aria-label="CS22 Sistemas"
              className="inline-flex items-center"
            >
              <img
                src={CS22_LOGO_SRC}
                alt="CS22 Sistemas"
                className="h-11 w-auto object-contain mix-blend-lighten"
              />
            </a>
            <p className="mt-3 text-sm font-medium text-orange-300">
              Tecnologia que move negócios.
            </p>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-zinc-400">
              Unidade de soluções tecnológicas da CS22 voltada a sistemas ERP, gestão empresarial e ferramentas digitais para diferentes segmentos.
            </p>
          </div>

          {/* Institutional Units & Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h3 className="text-xs font-semibold text-white">Navegação</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#solucoes" className="hover:text-white transition-colors">
                    Soluções
                  </a>
                </li>
                <li>
                  <a href="#gestao" className="hover:text-white transition-colors">
                    Gestão empresarial
                  </a>
                </li>
                <li>
                  <a href="#ecossistema" className="hover:text-white transition-colors">
                    Ecossistema digital
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-white transition-colors">
                    Planos e preços
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Perguntas frequentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-white">Unidades CS22</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#inicio" className="text-zinc-200 hover:text-white transition-colors">
                    CS22 Sistemas
                  </a>
                </li>
                <li>
                  <a
                    href={buildWhatsAppUrl(
                      'Olá, CS22! Gostaria de informações sobre a unidade CS22 Marketing.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    CS22 Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold text-white">Contato e Redes</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-tabular hover:text-white transition-colors"
                  >
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram: {INSTAGRAM_HANDLE}
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">
                    Solicitar demonstração
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-zinc-400/15 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CS22 Sistemas. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de privacidade
            </button>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
