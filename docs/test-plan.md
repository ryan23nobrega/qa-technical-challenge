# Plano de Testes - QA Technical Challenge

## Objetivo

O objetivo deste plano de testes é validar funcionalidades, comportamento, usabilidade e confiabilidade das seguintes aplicações:

- Sauce Demo (Testes de Interface)
- Restful Booker API (Testes de API)

Os testes foram elaborados para validar cenários positivos e negativos, garantindo que os sistemas se comportem corretamente em diferentes condições.

---

# Escopo

## Escopo dos Testes UI

As seguintes funcionalidades foram validadas no Sauce Demo:

- Autenticação de usuários
- Listagem e ordenação de produtos
- Adição e remoção de produtos do carrinho
- Processo de checkout
- Navegação entre páginas
- Funcionalidade de logout
- Comportamento responsivo
- Validação de acessibilidade

---

## Escopo dos Testes de API

Os seguintes endpoints e cenários foram validados na Restful Booker API:

- Autenticação
- Criação de reservas
- Consulta de reservas
- Atualização de reservas
- Exclusão de reservas
- Validação de campos obrigatórios
- Validação de tempo de resposta
- Tratamento de erros

---

# Estratégia de Testes

## Testes UI

Os testes de interface foram automatizados utilizando:

- Playwright
- JavaScript

Execução cross-browser:
- Chromium
- Firefox
- WebKit

Também foram realizados:
- testes de acessibilidade com Axe Playwright
- testes responsivos utilizando simulação mobile

---

## Testes de API

Os testes de API foram executados utilizando:

- Postman
- Scripts automatizados em JavaScript

As seguintes validações foram implementadas:

- Validação de status code
- Validação de response body
- Validação de tempo de resposta
- Validação de CRUD
- Testes negativos

---

# Ambiente de Testes

## UI

URL:
https://www.saucedemo.com/

Browsers utilizados:
- Chrome
- Firefox
- Safari/WebKit

---

## API

URL:
https://restful-booker.herokuapp.com/

---

# Ferramentas Utilizadas

- Playwright
- Postman
- Node.js
- VSCode
- GitHub

---

# Riscos Identificados

- Instabilidade da API pública
- Variações de tempo de resposta
- Limitações do ambiente compartilhado
- Possíveis conflitos de persistência de dados

---

# Evidências Geradas

- Testes automatizados UI
- Collection Postman
- Environment Postman
- Relatórios Playwright
- Documentação Markdown
- Análise de bugs
- Análise de riscos
- Sugestões de melhoria
