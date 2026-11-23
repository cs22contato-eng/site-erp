import { useState } from 'react';
import { BarChart3, Box, Wallet } from 'lucide-react';
import { CS22_ICON_SRC } from './Navbar';

type MockupTab = 'visao-geral' | 'financeiro' | 'estoque' | 'vendas';

interface TabContent {
  id: MockupTab;
  label: string;
  panelTitle: string;
  summaryRows: { label: string; value: string; note: string }[];
  bars: { label: string; heightPercent: number }[];
  ledgerRows: { item: string; category: string; status: string }[];
}

const MOCKUP_TABS: Record<MockupTab, TabContent> = {
  'visao-geral': {
    id: 'visao-geral',
    label: 'Visão Geral',
    panelTitle: 'Painel ilustrativo de operação empresarial',
    summaryRows: [
      { label: 'Fluxo financeiro', value: 'Organizado', note: 'Entradas e saídas por período' },
      { label: 'Posição de estoque', value: 'Mapeada', note: 'Movimentação por item' },
      { label: 'Registros comerciais', value: 'Centralizados', note: 'Histórico por atendimento' },
    ],
    bars: [
      { label: 'Seg', heightPercent: 48 },
      { label: 'Ter', heightPercent: 64 },
      { label: 'Qua', heightPercent: 56 },
      { label: 'Qui', heightPercent: 78 },
      { label: 'Sex', heightPercent: 86 },
      { label: 'Sáb', heightPercent: 70 },
    ],
    ledgerRows: [
      { item: 'Rotina financeira do dia', category: 'Financeiro', status: 'Conferido' },
      { item: 'Reposição de mercadorias', category: 'Estoque', status: 'Registrado' },
      { item: 'Pedidos e movimentações', category: 'Comercial', status: 'Organizado' },
    ],
  },
  financeiro: {
    id: 'financeiro',
    label: 'Financeiro',
    panelTitle: 'Modelo ilustrativo de controle financeiro',
    summaryRows: [
      { label: 'Contas a pagar', value: 'Agenda por vencimento', note: 'Compromissos classificados' },
      { label: 'Contas a receber', value: 'Previsão por período', note: 'Acompanhamento contínuo' },
      { label: 'Conciliação', value: 'Entradas e saídas', note: 'Registro estruturado' },
    ],
    bars: [
      { label: 'Sem 1', heightPercent: 52 },
      { label: 'Sem 2', heightPercent: 71 },
      { label: 'Sem 3', heightPercent: 60 },
      { label: 'Sem 4', heightPercent: 84 },
      { label: 'Sem 5', heightPercent: 74 },
      { label: 'Sem 6', heightPercent: 90 },
    ],
    ledgerRows: [
      { item: 'Fornecedores e insumos', category: 'A pagar', status: 'Programado' },
      { item: 'Recebimentos operacionais', category: 'A receber', status: 'Lançado' },
      { item: 'Despesas fixas da unidade', category: 'Centro de custo', status: 'Categorizado' },
    ],
  },
  estoque: {
    id: 'estoque',
    label: 'Estoque',
    panelTitle: 'Modelo ilustrativo de controle de estoque',
    summaryRows: [
      { label: 'Catálogo de itens', value: 'Padronizado', note: 'Código, grupo e unidade' },
      { label: 'Entradas e saídas', value: 'Rastreáveis', note: 'Histórico por movimentação' },
      { label: 'Ponto de reposição', value: 'Visível', note: 'Apoio à decisão de compra' },
    ],
    bars: [
      { label: 'Grp A', heightPercent: 82 },
      { label: 'Grp B', heightPercent: 62 },
      { label: 'Grp C', heightPercent: 44 },
      { label: 'Grp D', heightPercent: 76 },
      { label: 'Grp E', heightPercent: 58 },
      { label: 'Grp F', heightPercent: 68 },
    ],
    ledgerRows: [
      { item: 'Entrada de mercadorias', category: 'Reposição', status: 'Atualizado' },
      { item: 'Saída por operação', category: 'Movimentação', status: 'Registrado' },
      { item: 'Conferência de inventário', category: 'Auditoria', status: 'Disponível' },
    ],
  },
  vendas: {
    id: 'vendas',
    label: 'Vendas',
    panelTitle: 'Modelo ilustrativo de gestão comercial',
    summaryRows: [
      { label: 'Atendimentos', value: 'Estruturados', note: 'Registro por canal e cliente' },
      { label: 'Pedidos e propostas', value: 'Acompanháveis', note: 'Visibilidade de etapas' },
      { label: 'Canais digitais', value: 'Loja e Link na bio', note: 'Conforme solução contratada' },
    ],
    bars: [
      { label: 'Balcão', heightPercent: 70 },
      { label: 'Direto', heightPercent: 85 },
      { label: 'Online', heightPercent: 64 },
      { label: 'Bio', heightPercent: 54 },
      { label: 'Recorr.', heightPercent: 79 },
      { label: 'Total', heightPercent: 92 },
    ],
    ledgerRows: [
      { item: 'Registro de atendimento comercial', category: 'Comercial', status: 'Em acompanhamento' },
      { item: 'Catálogo digital de produtos', category: 'Canal online', status: 'Publicado' },
      { item: 'Relatório gerencial do período', category: 'Indicadores', status: 'Consolidado' },
    ],
  },
};

export function ErpMockup() {
  const [activeTab, setActiveTab] = useState<MockupTab>('visao-geral');
  const current = MOCKUP_TABS[activeTab];

  return (
    <div
      className="ghost-glass-elevated rounded-2xl p-4 sm:p-5"
      aria-label="Mockup ilustrativo de sistema ERP CS22 Sistemas"
    >
      {/* Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-3">
        <div className="flex items-center gap-2.5 text-xs text-zinc-700">
          <img
            src={CS22_ICON_SRC}
            alt="CS22"
            className="h-6 w-6 rounded-md object-cover"
          />
          <span className="font-display font-semibold text-zinc-950">Ambiente de Gestão CS22</span>
          <span aria-hidden="true" className="text-zinc-400">·</span>
          <span className="text-zinc-600">Visão ilustrativa</span>
        </div>

        <div
          role="tablist"
          aria-label="Módulos ilustrativos do sistema"
          className="flex flex-wrap items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-1"
        >
          {(Object.keys(MOCKUP_TABS) as MockupTab[]).map((tabKey) => {
            const tab = MOCKUP_TABS[tabKey];
            const isSelected = activeTab === tabKey;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#C84D0C] text-white shadow-sm'
                    : 'text-zinc-700 hover:bg-white hover:text-zinc-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Illustrative Body */}
      <div className="mt-4 space-y-4">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          <p className="text-xs font-medium text-zinc-800">{current.panelTitle}</p>
          <span className="text-[11px] text-zinc-500 shrink-0">Representação conceitual</span>
        </div>

        {/* 3 Summary Blocks */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {current.summaryRows.map((row, idx) => (
            <div
              key={row.label}
              className="rounded-xl border border-zinc-200/90 bg-zinc-50/80 p-3"
            >
              <div className="flex items-center justify-between text-[11px] text-zinc-600">
                <span>{row.label}</span>
                {idx === 0 && <Wallet className="h-3.5 w-3.5 text-[#C84D0C]" aria-hidden="true" />}
                {idx === 1 && <Box className="h-3.5 w-3.5 text-zinc-700" aria-hidden="true" />}
                {idx === 2 && <BarChart3 className="h-3.5 w-3.5 text-[#C84D0C]" aria-hidden="true" />}
              </div>
              <p className="mt-1.5 font-display text-sm font-semibold text-zinc-950">{row.value}</p>
              <p className="mt-0.5 text-[11px] text-zinc-600">{row.note}</p>
            </div>
          ))}
        </div>

        {/* Visual Distribution Chart + Ledger */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="rounded-xl border border-zinc-200/90 bg-zinc-50/60 p-3.5 lg:col-span-5">
            <div className="flex items-center justify-between text-xs text-zinc-700">
              <span>Movimentação ilustrativa</span>
              <span className="font-mono-tabular text-[11px] text-zinc-500">Ciclo</span>
            </div>
            <div className="mt-4 flex h-28 items-end justify-between gap-2 px-1">
              {current.bars.map((bar) => (
                <div key={bar.label} className="flex flex-1 flex-col items-center gap-1.5">
                  <div className="flex h-22 w-full items-end rounded-sm bg-zinc-200/70 p-0.5">
                    <div
                      className="w-full rounded-sm bg-gradient-to-t from-[#C84D0C] to-[#F57C20] transition-all duration-200"
                      style={{ height: `${bar.heightPercent}%` }}
                    />
                  </div>
                  <span className="font-mono-tabular text-[10px] text-zinc-600">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200/90 bg-white p-3.5 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-2 text-xs text-zinc-700">
              <span>Organização operacional</span>
              <span className="text-[11px] text-zinc-500">Estrutura modular</span>
            </div>
            <div className="mt-2 divide-y divide-zinc-200/80">
              {current.ledgerRows.map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between gap-3 py-2 text-xs"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-zinc-900">{row.item}</p>
                    <p className="text-[11px] text-zinc-600">{row.category}</p>
                  </div>
                  <span className="shrink-0 font-mono-tabular text-[11px] font-medium text-[#B44309]">
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 border-t border-zinc-200 pt-2.5 text-[11px] text-zinc-600">
        Painel meramente ilustrativo para demonstrar a organização das áreas de gestão. Recursos e telas reais variam conforme a solução contratada.
      </p>
    </div>
  );
}
