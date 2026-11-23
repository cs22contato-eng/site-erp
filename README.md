# CS22 Sistemas

Site institucional e comercial da **CS22 Sistemas** — unidade de soluções tecnológicas voltada a sistemas ERP, gestão empresarial, controle financeiro, estoque, e-commerce, loja virtual e ferramentas digitais para diferentes segmentos.

> **Tecnologia que move negócios.**

## Tecnologias

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide React**

## Scripts disponíveis

```bash
# Instalar dependências
npm install

# Rodar ambiente de desenvolvimento (http://localhost:3000)
npm run dev

# Executar testes unitários de lógica e catálogo
npm test

# Validar tipagem TypeScript
npm run lint

# Gerar build de produção em dist/
npm run build
```

## Estrutura principal

- `src/components/` — Seções da página, cabeçalho escuro, rodapé escuro, painel ilustrativo de ERP e modais.
- `src/utils/cs22Logic.ts` — Catálogo oficial de soluções por segmento, preços de referência, áreas de gestão, FAQ, construtores de links para WhatsApp e validação de formulário.
- `src/utils/cs22Logic.test.ts` — Testes unitários em `node:test`.
- `public/assets/aistudio/` — Logotipo e ícone oficial da CS22 Sistemas.
