import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SOLUTIONS,
  CHALLENGES,
  MANAGEMENT_AREAS,
  ECOSYSTEM_MODULES,
  FAQ_ITEMS,
  filterSolutions,
  buildWhatsAppUrl,
  buildSolutionWhatsAppMessage,
  buildLeadWhatsAppMessage,
  validateContactForm,
} from './cs22Logic';

test('catalog contains all 6 exact solutions with authorized reference pricing', () => {
  assert.equal(SOLUTIONS.length, 6);

  const byId = Object.fromEntries(SOLUTIONS.map((s) => [s.id, s]));
  assert.equal(byId['erp-restaurantes'].monthlyPriceCents, 19990);
  assert.equal(byId['erp-oficinas'].monthlyPriceCents, 19990);
  assert.equal(byId['erp-lojas-comercio'].monthlyPriceCents, 16990);
  assert.equal(byId['erp-transportadoras'].monthlyPriceCents, 19990);
  assert.equal(byId['erp-prestadores-servicos'].monthlyPriceCents, 17990);
  assert.equal(byId['solucao-revendas-veiculos'].monthlyPriceCents, 16990);
});

test('requested structural counts match requirements', () => {
  assert.equal(CHALLENGES.length, 7);
  assert.equal(MANAGEMENT_AREAS.length, 6);
  assert.equal(ECOSYSTEM_MODULES.length, 5);
  assert.equal(FAQ_ITEMS.length, 8);
});

test('filterSolutions filters accurately by segment key', () => {
  assert.equal(filterSolutions(SOLUTIONS, 'todos').length, 6);
  assert.equal(filterSolutions(SOLUTIONS, 'alimentacao').length, 1);
  assert.equal(filterSolutions(SOLUTIONS, 'automotivo').length, 2);
  assert.equal(filterSolutions(SOLUTIONS, 'comercio').length, 1);
  assert.equal(filterSolutions(SOLUTIONS, 'logistica').length, 1);
  assert.equal(filterSolutions(SOLUTIONS, 'servicos').length, 1);
});

test('WhatsApp message and URL encoding include configured CS22 number and solution', () => {
  const rest = SOLUTIONS[0];
  const msg = buildSolutionWhatsAppMessage(rest, 'demonstracao');
  assert.match(msg, /ERP para restaurantes/);
  assert.match(msg, /R\$ 199,90\/mês/);

  const url = buildWhatsAppUrl(msg);
  assert.ok(url.startsWith('https://wa.me/5518991621455?text='));
  assert.ok(url.includes(encodeURIComponent('ERP para restaurantes')));
});

test('validateContactForm rejects invalid or empty fields and accepts valid submission', () => {
  const invalidErrors = validateContactForm({
    name: '',
    company: 'A',
    phone: '123',
    email: 'not-an-email',
    solutionId: '',
    message: '',
  });
  assert.ok(invalidErrors.name);
  assert.ok(invalidErrors.company);
  assert.ok(invalidErrors.phone);
  assert.ok(invalidErrors.email);
  assert.ok(invalidErrors.solutionId);

  const validErrors = validateContactForm({
    name: 'Mariana Costa',
    company: 'Auto Mecânica Costa',
    phone: '(18) 99162-1455',
    email: 'contato@mecanicacosta.com.br',
    solutionId: 'erp-oficinas',
    message: 'Quero agendar uma demonstração.',
  });
  assert.deepEqual(validErrors, {});
});

test('buildLeadWhatsAppMessage formats structured lead summary cleanly', () => {
  const text = buildLeadWhatsAppMessage({
    name: 'Carlos Mendes',
    company: 'Transportes Mendes',
    phone: '18991621455',
    email: 'carlos@mendes.com.br',
    solutionId: 'erp-transportadoras',
    message: 'Operação com 12 veículos.',
  });
  assert.match(text, /Carlos Mendes/);
  assert.match(text, /Transportes Mendes/);
  assert.match(text, /ERP para transportadoras \(R\$ 199,90\/mês\)/);
  assert.match(text, /Operação com 12 veículos\./);
});
