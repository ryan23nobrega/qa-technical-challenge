# QA Technical Challenge

## Sobre o Projeto

Este repositório contém a implementação do desafio técnico de QA, contemplando testes de interface (UI Testing) e testes de API (API Testing).

Foram realizados testes funcionais, automatizados, testes negativos, validações de performance básica, acessibilidade e análise de riscos.

---

# Tecnologias Utilizadas

## UI Testing

- Playwright
- JavaScript
- Axe Playwright

## API Testing

- Postman
- JavaScript Assertions

---

# Estrutura do Projeto

```bash
qa-technical-challenge
│
├── tests
├── postman
├── docs
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Funcionalidades Testadas

## UI - Sauce Demo

- Login
- Logout
- Ordenação de produtos
- Adição e remoção de itens no carrinho
- Checkout
- Navegação entre páginas
- Responsividade
- Acessibilidade

---

## API - Restful Booker

- Autenticação
- CRUD de reservas
- Testes negativos
- Validação de campos obrigatórios
- Response time
- Tratamento de erros

---

# Execução dos Testes UI

## Instalação

```bash
npm install
```

---

## Executar testes

```bash
npx playwright test
```

---

## Abrir relatório HTML

```bash
npx playwright show-report
```

---

# Execução dos Testes API

Os testes de API podem ser executados importando:

- Collection:
`postman/restful-booker-collection.json`

- Environment:
`postman/restful-booker-environment.json`

no Postman.

---

# Evidências

Os testes geraram:

- Relatórios Playwright
- Capturas de tela automáticas
- Vídeos automáticos em falhas
- Scripts automatizados no Postman

---

# Análises Realizadas

A documentação complementar está disponível na pasta:

```bash
docs/
```

Contendo:

- Plano de testes
- Casos de teste
- Análise de bugs
- Análise de riscos
- Sugestões de melhorias

---

# Observações

Durante os testes da API pública Restful Booker foram identificadas algumas inconsistências relacionadas a:

- Response time variável
- Instabilidade ocasional
- Tratamento inadequado de payload inválido

Esses comportamentos foram documentados na análise de bugs e riscos.