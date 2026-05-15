# Análise de Riscos

## Riscos Identificados Durante os Testes

### 1. Instabilidade da API Pública

A Restful Booker API utiliza um ambiente público e compartilhado, podendo apresentar:

- Oscilação de performance
- Lentidão nas respostas
- Instabilidade temporária
- Comportamentos inconsistentes

### Impacto

Pode gerar falsos negativos durante execuções automatizadas.

### Mitigação

- Utilização de thresholds mais flexíveis para response time
- Reexecução de cenários em caso de instabilidade temporária

---

## 2. Falta de Validação Adequada na API

Foi identificado que a API retorna:

500 Internal Server Error

ao receber payload inválido com campos obrigatórios ausentes.

### Impacto

- Possível quebra de aplicação
- Dificuldade de troubleshooting
- Falta de previsibilidade para consumidores da API

### Mitigação

Implementar validações defensivas no backend e retornar erros controlados como:

- 400 Bad Request
- 422 Unprocessable Entity

---

## 3. Dependência de Ambiente Externo

Os testes dependem de aplicações públicas externas:

- Sauce Demo
- Restful Booker API

### Impacto

Indisponibilidade dos ambientes pode afetar execuções automatizadas.

### Mitigação

- Monitoramento de disponibilidade
- Tratamento de falhas temporárias
- Retry em cenários específicos

---

## 4. Possíveis Conflitos de Dados

Como o ambiente da API é compartilhado, reservas podem sofrer alterações externas durante os testes.

### Impacto

- Inconsistência de dados
- Falhas intermitentes
- Resultados não determinísticos

### Mitigação

- Criação de novos registros antes das validações
- Execução isolada de cenários CRUD
