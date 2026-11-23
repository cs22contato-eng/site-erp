export type SegmentFilter =
  | 'todos'
  | 'alimentacao'
  | 'automotivo'
  | 'comercio'
  | 'logistica'
  | 'servicos';

export interface SolutionItem {
  id: string;
  name: string;
  segment: string;
  filterKey: Exclude<SegmentFilter, 'todos'>;
  shortDescription: string;
  detailedSummary: string;
  monthlyPriceCents: number;
  priceDisplay: string;
  benefits: string[];
  commercialConditions: string[];
  highlights: string[];
}

export interface ChallengeItem {
  number: string;
  title: string;
  description: string;
}

export interface ManagementArea {
  id: string;
  title: string;
  description: string;
  availabilityNote: string;
  focusPoints: string[];
}

export interface EcosystemModule {
  id: string;
  name: string;
  role: string;
  description: string;
  complementsWith: string;
}

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  solutionId: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  solutionId?: string;
}

export const WHATSAPP_NUMBER = '5518991621455';
export const WHATSAPP_DISPLAY = '(18) 99162-1455';
export const INSTAGRAM_HANDLE = '@cs22.tech';
export const INSTAGRAM_URL = 'https://instagram.com/cs22.tech';

export const SEGMENT_FILTERS: { id: SegmentFilter; label: string }[] = [
  { id: 'todos', label: 'Todos os segmentos' },
  { id: 'alimentacao', label: 'Alimentação' },
  { id: 'automotivo', label: 'Oficinas e Veículos' },
  { id: 'comercio', label: 'Lojas e Comércio' },
  { id: 'logistica', label: 'Transportadoras' },
  { id: 'servicos', label: 'Serviços' },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'erp-restaurantes',
    name: 'ERP para restaurantes',
    segment: 'Alimentação e food service',
    filterKey: 'alimentacao',
    shortDescription: 'Gestão e controle para operações de alimentação.',
    detailedSummary:
      'Solução estruturada para organizar rotinas operacionais, controle financeiro e acompanhamento de estoque em negócios do setor de alimentação.',
    monthlyPriceCents: 19990,
    priceDisplay: 'R$ 199,90',
    benefits: [
      'Organização da operação diária do estabelecimento',
      'Controle financeiro com visão clara de entradas e saídas',
      'Acompanhamento de estoque e movimentações de mercadorias',
      'Base centralizada para reduzir controles em planilhas avulsas',
    ],
    commercialConditions: [
      'Mensalidade recorrente de referência: R$ 199,90/mês',
      'Contratação independente para a operação de alimentação',
      'Apresentação comercial e confirmação de escopo antes da ativação',
    ],
    highlights: ['Operação de alimentação', 'Controle financeiro', 'Gestão de estoque'],
  },
  {
    id: 'erp-oficinas',
    name: 'ERP para oficinas mecânicas',
    segment: 'Oficinas e manutenção automotiva',
    filterKey: 'automotivo',
    shortDescription: 'Organização da operação e gestão do negócio.',
    detailedSummary:
      'Sistema voltado à estruturação administrativa e operacional de oficinas mecânicas, reunindo dados financeiros, comerciais e de movimentação.',
    monthlyPriceCents: 19990,
    priceDisplay: 'R$ 199,90',
    benefits: [
      'Centralização das informações operacionais e comerciais',
      'Acompanhamento de movimentação financeira e compromissos',
      'Organização de peças, produtos e movimentação de estoque',
      'Visibilidade gerencial para decisões do dia a dia',
    ],
    commercialConditions: [
      'Mensalidade recorrente de referência: R$ 199,90/mês',
      'Contratação direta para oficinas mecânicas',
      'Demonstração prévia para alinhamento das necessidades da oficina',
    ],
    highlights: ['Rotina de oficina', 'Organização operacional', 'Gestão financeira'],
  },
  {
    id: 'erp-lojas-comercio',
    name: 'ERP para lojas e comércio',
    segment: 'Varejo e estabelecimentos comerciais',
    filterKey: 'comercio',
    shortDescription: 'Controle empresarial para estabelecimentos comerciais.',
    detailedSummary:
      'Ferramenta de gestão empresarial para lojas e comércios que precisam organizar vendas, estoque e finanças em uma estrutura única.',
    monthlyPriceCents: 16990,
    priceDisplay: 'R$ 169,90',
    benefits: [
      'Organização de vendas e informações comerciais da loja',
      'Controle estruturado de estoque e giro de mercadorias',
      'Visão das contas a pagar, receber e movimentação financeira',
      'Padronização de processos administrativos do comércio',
    ],
    commercialConditions: [
      'Mensalidade recorrente de referência: R$ 169,90/mês',
      'Contratação modular conforme porte e necessidade do comércio',
      'Condições finais confirmadas na proposta comercial da CS22',
    ],
    highlights: ['Gestão de vendas', 'Controle de estoque', 'Rotina comercial'],
  },
  {
    id: 'erp-transportadoras',
    name: 'ERP para transportadoras',
    segment: 'Transporte e operações logísticas',
    filterKey: 'logistica',
    shortDescription: 'Soluções de gestão para operações de transporte.',
    detailedSummary:
      'Estrutura tecnológica orientada à organização administrativa, financeira e operacional de empresas de transporte.',
    monthlyPriceCents: 19990,
    priceDisplay: 'R$ 199,90',
    benefits: [
      'Centralização de informações da operação de transporte',
      'Acompanhamento financeiro de entradas, saídas e compromissos',
      'Relatórios e indicadores operacionais para gestão do negócio',
      'Menos dependência de controles manuais dispersos',
    ],
    commercialConditions: [
      'Mensalidade recorrente de referência: R$ 199,90/mês',
      'Atendimento consultivo para validação do escopo operacional',
      'Valores de referência sujeitos à confirmação comercial',
    ],
    highlights: ['Operação de transporte', 'Visão financeira', 'Centralização de dados'],
  },
  {
    id: 'erp-prestadores-servicos',
    name: 'ERP para prestadores de serviços',
    segment: 'Empresas de serviços',
    filterKey: 'servicos',
    shortDescription: 'Organização e controle para empresas de serviços.',
    detailedSummary:
      'Solução de gestão para prestadores de serviços que buscam controle financeiro, acompanhamento comercial e processos organizados.',
    monthlyPriceCents: 17990,
    priceDisplay: 'R$ 179,90',
    benefits: [
      'Controle financeiro claro para receitas e despesas da operação',
      'Organização de informações comerciais e atendimentos',
      'Acompanhamento de resultados com dados centralizados',
      'Redução de controles paralelos em planilhas desconectadas',
    ],
    commercialConditions: [
      'Mensalidade recorrente de referência: R$ 179,90/mês',
      'Contratação individual sem dependência de outros produtos',
      'Alinhamento comercial com consultor CS22 antes da contratação',
    ],
    highlights: ['Gestão de serviços', 'Financeiro estruturado', 'Processos organizados'],
  },
  {
    id: 'solucao-revendas-veiculos',
    name: 'Solução para revendas e lojas de veículos',
    segment: 'Revendas e lojas de veículos',
    filterKey: 'automotivo',
    shortDescription: 'ERP com módulo base, e-commerce, loja virtual e link na bio.',
    detailedSummary:
      'Conjunto comercial voltado a revendas e lojas de veículos, reunindo base de gestão ERP e canais digitais para apresentação e exposição do catálogo.',
    monthlyPriceCents: 16990,
    priceDisplay: 'R$ 169,90',
    benefits: [
      'ERP com módulo base para organização da gestão da revenda',
      'Estrutura de e-commerce e loja virtual para exposição de catálogo',
      'Link na bio para concentrar veículos, informações e contato direto',
      'Combinação entre controle interno e presença digital comercial',
    ],
    commercialConditions: [
      'Mensalidade recorrente de referência: R$ 169,90/mês',
      'Inclui ERP com módulo base, e-commerce, loja virtual e link na bio',
      'Escopo e disponibilidade confirmados na apresentação comercial',
    ],
    highlights: ['ERP módulo base', 'E-commerce e loja virtual', 'Link na bio'],
  },
];

export const CHALLENGES: ChallengeItem[] = [
  {
    number: '01',
    title: 'Falta de controle financeiro',
    description:
      'Decisões tomadas sem clareza sobre compromissos futuros, fluxo do caixa e saldo real da operação.',
  },
  {
    number: '02',
    title: 'Dificuldade para acompanhar entradas e saídas',
    description:
      'Recebimentos e pagamentos registrados de forma fragmentada dificultam a leitura do resultado do período.',
  },
  {
    number: '03',
    title: 'Estoque desorganizado',
    description:
      'Mercadorias sem rastreio de movimentação geram divergências, rupturas ou compras sem critério.',
  },
  {
    number: '04',
    title: 'Informações espalhadas em planilhas',
    description:
      'Arquivos paralelos entre setores criam retrabalho, versões conflitantes e perda de histórico.',
  },
  {
    number: '05',
    title: 'Dificuldade para acompanhar resultados',
    description:
      'Sem consolidação operacional, o gestor perde tempo reunindo números antes de conseguir analisar o negócio.',
  },
  {
    number: '06',
    title: 'Processos operacionais manuais',
    description:
      'Rotinas repetitivas consomem tempo da equipe e aumentam a margem de erro no atendimento e no administrativo.',
  },
  {
    number: '07',
    title: 'Falta de integração entre gestão e vendas',
    description:
      'Quando o comercial e a retaguarda não conversam com clareza, a operação perde agilidade e controle.',
  },
];

export const MANAGEMENT_AREAS: ManagementArea[] = [
  {
    id: 'financeiro',
    title: 'Controle financeiro',
    description:
      'Acompanhe a movimentação financeira, contas a pagar e receber e informações importantes para a gestão.',
    availabilityNote: 'Disponibilidade conforme o sistema contratado para o segmento.',
    focusPoints: [
      'Visão de contas a pagar e contas a receber',
      'Registro organizado de entradas e saídas',
      'Acompanhamento da movimentação financeira por período',
    ],
  },
  {
    id: 'estoque',
    title: 'Controle de estoque',
    description:
      'Tenha mais organização sobre produtos, mercadorias e movimentações.',
    availabilityNote: 'Aplicável às soluções de segmentos com gestão de mercadorias.',
    focusPoints: [
      'Cadastro estruturado de produtos e mercadorias',
      'Acompanhamento de entradas e saídas de itens',
      'Mais previsibilidade para reposição e conferência',
    ],
  },
  {
    id: 'vendas',
    title: 'Gestão de vendas',
    description:
      'Organize as informações comerciais e acompanhe a operação.',
    availabilityNote: 'Recursos comerciais alinhados ao modelo de cada solução.',
    focusPoints: [
      'Histórico organizado das operações comerciais',
      'Acompanhamento das movimentações de venda',
      'Base estruturada para atendimento ao cliente',
    ],
  },
  {
    id: 'operacional',
    title: 'Gestão operacional',
    description:
      'Centralize informações importantes para melhorar o controle do negócio.',
    availabilityNote: 'Estruturado segundo a rotina de cada segmento atendido.',
    focusPoints: [
      'Padronização de rotinas administrativas e internas',
      'Redução de controles manuais espalhados',
      'Mais clareza sobre o andamento da operação',
    ],
  },
  {
    id: 'indicadores',
    title: 'Indicadores e relatórios',
    description:
      'Transforme dados operacionais em informações úteis para a tomada de decisão.',
    availabilityNote: 'Relatórios disponíveis de acordo com o escopo de cada sistema.',
    focusPoints: [
      'Consolidação de dados registrados na operação',
      'Leitura gerencial por período e categoria',
      'Apoio prático para decisões administrativas',
    ],
  },
  {
    id: 'presenca-digital',
    title: 'Presença digital e vendas online',
    description:
      'Amplie os canais de apresentação e comercialização dos produtos.',
    availabilityNote: 'Contemplado em soluções digitais como loja virtual e link na bio.',
    focusPoints: [
      'Exposição organizada de produtos e veículos online',
      'Canal direto de contato comercial com o cliente',
      'Estrutura digital complementar à operação física',
    ],
  },
];

export const ECOSYSTEM_MODULES: EcosystemModule[] = [
  {
    id: 'erp',
    name: 'ERP',
    role: 'Núcleo administrativo',
    description: 'Controle e organização da operação empresarial.',
    complementsWith: 'Centraliza as rotinas principais da empresa conforme o segmento.',
  },
  {
    id: 'financeiro',
    name: 'Controle financeiro',
    role: 'Visibilidade de caixa',
    description: 'Mais visibilidade sobre as movimentações e compromissos financeiros.',
    complementsWith: 'Apoia o acompanhamento diário de pagamentos, recebimentos e saldos.',
  },
  {
    id: 'estoque',
    name: 'Controle de estoque',
    role: 'Organização de itens',
    description: 'Organização das mercadorias e produtos.',
    complementsWith: 'Mantém o registro estruturado do inventário e das movimentações.',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce e loja virtual',
    role: 'Vitrine e canal online',
    description: 'Uma estrutura digital para apresentar e comercializar produtos.',
    complementsWith: 'Complementa a presença comercial da empresa no ambiente digital.',
  },
  {
    id: 'link-bio',
    name: 'Link na bio',
    role: 'Ponto de contato rápido',
    description: 'Uma página comercial para reunir produtos, informações e canais de contato.',
    complementsWith: 'Direciona visitantes de redes sociais diretamente para ofertas e WhatsApp.',
  },
];

export const WHY_CS22_PILLARS: WhyItem[] = [
  {
    number: '01',
    title: 'Soluções para diferentes segmentos',
    description:
      'Estruturas pensadas para a realidade de restaurantes, oficinas, comércios, transportadoras, serviços e revendas de veículos.',
  },
  {
    number: '02',
    title: 'Tecnologia voltada à gestão empresarial',
    description:
      'Foco em organização administrativa, controle financeiro e clareza sobre a operação do negócio.',
  },
  {
    number: '03',
    title: 'Ferramentas para melhorar o controle operacional',
    description:
      'Sistemas e módulos para substituir controles soltos em planilhas por rotinas estruturadas.',
  },
  {
    number: '04',
    title: 'Estrutura digital para apoiar o crescimento',
    description:
      'Combinação entre ferramentas de gestão interna e canais digitais como loja virtual e link na bio quando aplicável.',
  },
  {
    number: '05',
    title: 'Atendimento e orientação comercial',
    description:
      'Conversa direta para identificar qual solução corresponde ao momento e ao segmento da sua empresa.',
  },
  {
    number: '06',
    title: 'Evolução contínua das soluções',
    description:
      'Acompanhamento constante de tecnologia aplicada à gestão para manter a operação estruturada.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'o-que-e-erp',
    question: 'O que é um ERP?',
    answer:
      'ERP (Sistema de Gestão Empresarial) é uma ferramenta de tecnologia que reúne e organiza informações essenciais da empresa — como rotinas operacionais, movimentação financeira, vendas e estoque — em um ambiente estruturado para apoiar o controle e as decisões do negócio.',
  },
  {
    id: 'qual-solucao-atende',
    question: 'Qual solução atende ao meu negócio?',
    answer:
      'A CS22 Sistemas disponibiliza soluções específicas para restaurantes, oficinas mecânicas, lojas e comércio, transportadoras, prestadores de serviços e revendas e lojas de veículos. Caso sua operação tenha particularidades, nossa equipe comercial ajuda a confirmar o sistema mais aderente durante o atendimento.',
  },
  {
    id: 'como-funciona-contratacao',
    question: 'Como funciona a contratação?',
    answer:
      'Após identificar o segmento e validar o escopo da solução com um consultor da CS22 via WhatsApp ou formulário de contato, apresentamos as condições comerciais correspondentes e encaminhamos a ativação conforme o plano escolhido.',
  },
  {
    id: 'mensalidade-recorrente',
    question: 'A mensalidade é recorrente?',
    answer:
      'Sim. Os valores apresentados nas soluções correspondem a mensalidades de referência para uso contínuo do sistema contratado, com confirmação do escopo e das condições comerciais no momento da contratação.',
  },
  {
    id: 'existe-treinamento',
    question: 'Existe treinamento?',
    answer:
      'As orientações de uso, implantação e eventuais etapas de treinamento são alinhadas diretamente com a equipe da CS22 de acordo com a solução contratada e o formato definido na proposta comercial.',
  },
  {
    id: 'como-funciona-suporte',
    question: 'Como funciona o suporte?',
    answer:
      'Os canais e condições de atendimento e suporte são informados de forma transparente na apresentação comercial de cada solução, garantindo que sua empresa saiba exatamente como acionar a equipe quando precisar.',
  },
  {
    id: 'contratar-apenas-uma',
    question: 'Posso contratar apenas uma solução?',
    answer:
      'Sim. As soluções da CS22 Sistemas podem ser contratadas de forma específica para a necessidade e o segmento da sua empresa, sem obrigar a contratação de pacotes que você não utiliza.',
  },
  {
    id: 'solicitar-demonstracao',
    question: 'Como solicitar uma demonstração?',
    answer:
      'Você pode clicar em qualquer botão de solicitação de demonstração ou contato nesta página, preencher o formulário ao final do site ou iniciar uma conversa direta pelo WhatsApp (18) 99162-1455 indicando o seu segmento.',
  },
];

export function filterSolutions(
  solutions: SolutionItem[],
  filter: SegmentFilter
): SolutionItem[] {
  if (filter === 'todos') {
    return solutions;
  }
  return solutions.filter((item) => item.filterKey === filter);
}

export function buildWhatsAppUrl(message: string, phoneNumber: string = WHATSAPP_NUMBER): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}

export function buildSolutionWhatsAppMessage(
  solution: Pick<SolutionItem, 'name' | 'priceDisplay'>,
  intent: 'contratar' | 'demonstracao' | 'detalhes' = 'detalhes'
): string {
  if (intent === 'demonstracao') {
    return `Olá, equipe CS22 Sistemas! Gostaria de solicitar uma demonstração da solução ${solution.name} (${solution.priceDisplay}/mês).`;
  }
  if (intent === 'contratar') {
    return `Olá, equipe CS22 Sistemas! Tenho interesse em contratar a solução ${solution.name} (${solution.priceDisplay}/mês) e gostaria de confirmar as condições comerciais.`;
  }
  return `Olá, equipe CS22 Sistemas! Gostaria de conhecer melhor a solução ${solution.name} (${solution.priceDisplay}/mês) para minha empresa.`;
}

export function buildLeadWhatsAppMessage(
  values: ContactFormValues,
  solutions: SolutionItem[] = SOLUTIONS
): string {
  const selected = solutions.find((s) => s.id === values.solutionId);
  const solutionLabel = selected
    ? `${selected.name} (${selected.priceDisplay}/mês)`
    : 'Consultoria para escolher a solução ideal';

  const lines = [
    'Olá, equipe CS22 Sistemas! Solicito contato comercial pelo site.',
    `Nome: ${values.name.trim()}`,
    `Empresa: ${values.company.trim()}`,
    `Telefone/WhatsApp: ${values.phone.trim()}`,
    `E-mail: ${values.email.trim()}`,
    `Interesse: ${solutionLabel}`,
  ];

  if (values.message.trim()) {
    lines.push(`Observações: ${values.message.trim()}`);
  }

  return lines.join('\n');
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.';
  }

  if (!values.company.trim() || values.company.trim().length < 2) {
    errors.company = 'Informe o nome da empresa.';
  }

  const digits = values.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = 'Informe um WhatsApp ou telefone válido com DDD.';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Informe um endereço de e-mail válido.';
  }

  if (!values.solutionId.trim()) {
    errors.solutionId = 'Selecione a solução ou área de interesse.';
  }

  return errors;
}
