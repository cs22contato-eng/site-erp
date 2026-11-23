import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import {
  ContactFormErrors,
  ContactFormValues,
  SOLUTIONS,
  WHATSAPP_DISPLAY,
  buildLeadWhatsAppMessage,
  buildWhatsAppUrl,
  validateContactForm,
} from '../utils/cs22Logic';

interface FinalCtaContactSectionProps {
  preselectedSolutionId: string;
}

export function FinalCtaContactSection({
  preselectedSolutionId,
}: FinalCtaContactSectionProps) {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    company: '',
    phone: '',
    email: '',
    solutionId: preselectedSolutionId || SOLUTIONS[0].id,
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedValues, setSubmittedValues] = useState<ContactFormValues | null>(null);

  useEffect(() => {
    if (preselectedSolutionId) {
      setValues((prev) => ({ ...prev, solutionId: preselectedSolutionId }));
      setSubmittedValues(null);
    }
  }, [preselectedSolutionId]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedValues(values);
    }
  };

  const directWhatsappHref = buildWhatsAppUrl(
    'Olá, equipe CS22 Sistemas! Gostaria de conversar com um consultor para encontrar a solução adequada à minha empresa.'
  );

  const submittedWhatsappHref = submittedValues
    ? buildWhatsAppUrl(buildLeadWhatsAppMessage(submittedValues))
    : directWhatsappHref;

  return (
    <section
      id="contato"
      className="scroll-mt-16 border-b border-zinc-200 bg-[#F8F9FB] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: CTA Final Copy */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#B44309]">Atendimento comercial</p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Sua empresa está pronta para ter mais controle?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              Conheça as soluções da CS22 e encontre a tecnologia adequada para organizar a gestão do seu negócio.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#solucoes"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-50 whitespace-nowrap shrink-0"
              >
                <span>Encontrar minha solução</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={directWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B24208] whitespace-nowrap shrink-0"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                <span>Falar com a CS22</span>
              </a>
            </div>

            <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
              <p>
                WhatsApp comercial:{' '}
                <a
                  href={directWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tabular font-semibold text-zinc-950 hover:text-[#B44309] underline decoration-[#C84D0C]/70 underline-offset-4"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p className="mt-2">
                Preencha o formulário ao lado para solicitar uma demonstração ou confirmar condições comerciais para o seu segmento.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
          <div className="ghost-glass-elevated rounded-2xl p-6 sm:p-8 lg:col-span-7">
            {submittedValues ? (
              <div data-testid="contact-success-state" className="space-y-5 py-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#C84D0C]" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-zinc-950">
                      Solicitação preparada com sucesso
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-700">
                      Recebemos os dados de <strong className="text-zinc-950">{submittedValues.name}</strong> ({submittedValues.company}). Para agilizar o atendimento imediato, envie o resumo completo diretamente no WhatsApp oficial da CS22.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-700">
                  <p>
                    <span className="text-zinc-500">Solução selecionada:</span>{' '}
                    <span className="font-semibold text-zinc-950">
                      {SOLUTIONS.find((s) => s.id === submittedValues.solutionId)?.name ??
                        'Consultoria comercial'}
                    </span>
                  </p>
                  <p className="mt-1">
                    <span className="text-zinc-500">Contato informado:</span>{' '}
                    {submittedValues.phone} · {submittedValues.email}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={submittedWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B24208]"
                  >
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    <span>Enviar solicitação pelo WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedValues(null);
                      setErrors({});
                    }}
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-50 cursor-pointer"
                  >
                    Editar solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-zinc-950">
                    Solicitar demonstração ou atendimento
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600">
                    Informe seus dados para direcionarmos a apresentação da solução correspondente.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={(e) => setValues({ ...values, name: e.target.value })}
                      placeholder="Seu nome"
                      className="mt-1.5 block min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#C84D0C] focus:outline-none"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-xs text-red-700">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Empresa
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      required
                      value={values.company}
                      onChange={(e) => setValues({ ...values, company: e.target.value })}
                      placeholder="Nome da empresa"
                      className="mt-1.5 block min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#C84D0C] focus:outline-none"
                    />
                    {errors.company && (
                      <p role="alert" className="mt-1 text-xs text-red-700">
                        {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      WhatsApp ou telefone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={values.phone}
                      onChange={(e) => setValues({ ...values, phone: e.target.value })}
                      placeholder="(18) 99162-1455"
                      className="mt-1.5 block min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#C84D0C] focus:outline-none"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1 text-xs text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      E-mail corporativo
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={(e) => setValues({ ...values, email: e.target.value })}
                      placeholder="voce@suaempresa.com.br"
                      className="mt-1.5 block min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#C84D0C] focus:outline-none"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-solution"
                    className="block text-xs font-medium text-zinc-800"
                  >
                    Solução de interesse
                  </label>
                  <select
                    id="contact-solution"
                    name="solutionId"
                    value={values.solutionId}
                    onChange={(e) => setValues({ ...values, solutionId: e.target.value })}
                    className="mt-1.5 block min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-sm text-zinc-950 focus:border-[#C84D0C] focus:outline-none"
                  >
                    {SOLUTIONS.map((sol) => (
                      <option key={sol.id} value={sol.id}>
                        {sol.name} — {sol.priceDisplay}/mês
                      </option>
                    ))}
                    <option value="consultoria-geral">
                      Ainda não sei — quero orientação de um consultor
                    </option>
                  </select>
                  {errors.solutionId && (
                    <p role="alert" className="mt-1 text-xs text-red-700">
                      {errors.solutionId}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-zinc-800"
                  >
                    Detalhes da operação (opcional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                    placeholder="Conte brevemente sobre o segmento ou necessidade da sua empresa."
                    className="mt-1.5 block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-[#C84D0C] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#C84D0C] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#B24208] cursor-pointer"
                >
                  <span>Solicitar demonstração</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
