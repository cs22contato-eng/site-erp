import { useEffect } from 'react';
import { Check, MessageSquare, X } from 'lucide-react';
import {
  SolutionItem,
  buildSolutionWhatsAppMessage,
  buildWhatsAppUrl,
} from '../utils/cs22Logic';
import { LegalDocType } from './Footer';
import { CS22_ICON_SRC } from './Navbar';

interface SolutionDetailModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onRequestDemo: (solution: SolutionItem) => void;
}

export function SolutionDetailModal({
  solution,
  onClose,
  onRequestDemo,
}: SolutionDetailModalProps) {
  useEffect(() => {
    if (!solution) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [solution, onClose]);

  if (!solution) return null;

  const whatsappHref = buildWhatsAppUrl(
    buildSolutionWhatsAppMessage(solution, 'detalhes')
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="solution-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-4">
          <div className="flex items-start gap-3">
            <img
              src={CS22_ICON_SRC}
              alt="CS22"
              className="mt-0.5 h-10 w-10 shrink-0 rounded-lg object-cover border border-zinc-200"
            />
            <div>
              <p className="text-xs font-semibold text-[#B44309]">{solution.segment}</p>
              <h3
                id="solution-modal-title"
                className="mt-1 font-display text-2xl font-bold text-zinc-950"
              >
                {solution.name}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes da solução"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-5">
          <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
            {solution.detailedSummary}
          </p>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs text-zinc-600">Mensalidade de referência</p>
            <p className="mt-1 font-mono-tabular text-2xl font-bold text-zinc-950">
              {solution.priceDisplay}
              <span className="text-sm font-normal text-zinc-600">/mês</span>
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Valor sujeito à confirmação comercial de escopo antes da contratação definitiva.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-700">Benefícios para a operação</p>
            <ul className="mt-2.5 space-y-2">
              {solution.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-zinc-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C84D0C]" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
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

        <div className="mt-7 flex flex-col gap-3 border-t border-zinc-200 pt-5 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B24208]"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onRequestDemo(solution);
              onClose();
            }}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 cursor-pointer"
          >
            Solicitar demonstração
          </button>
        </div>
      </div>
    </div>
  );
}

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ docType, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!docType) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [docType, onClose]);

  if (!docType) return null;

  const isPrivacy = docType === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-950 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-4">
          <h3 id="legal-modal-title" className="font-display text-xl font-bold text-zinc-950">
            {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela legal"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
          {isPrivacy ? (
            <>
              <p>
                A CS22 Sistemas trata os dados informados no formulário de contato e atendimento exclusivamente para responder às solicitações comerciais, apresentar soluções e agendar demonstrações.
              </p>
              <p>
                Nenhuma informação fornecida pelo visitante é comercializada ou compartilhada com terceiros para fins alheios ao atendimento solicitado.
              </p>
              <p>
                Para dúvidas sobre tratamento de dados ou atualização de informações, entre em contato pelo WhatsApp oficial (18) 99162-1455.
              </p>
            </>
          ) : (
            <>
              <p>
                Este site tem caráter institucional e comercial para apresentação das soluções da unidade CS22 Sistemas.
              </p>
              <p>
                As interfaces de painel exibidas na página são representações ilustrativas e não constituem telas reais de operação ou dados de clientes.
              </p>
              <p>
                Os valores mensais exibidos representam referências comerciais e estão sujeitos à confirmação de escopo, segmento e proposta formal junto à equipe da CS22 antes da contratação definitiva.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end border-t border-zinc-200 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[#C84D0C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#B24208] cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
