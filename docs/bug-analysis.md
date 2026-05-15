# Análise de Bugs

## Bug 1 - API retorna 500 ao invés de erro de validação

### Cenário

Durante o teste negativo de criação de reservas, foi enviado um payload incompleto para validar o comportamento da API diante de campos obrigatórios ausentes.

Payload utilizado:

```json
{
    "firstname": "Ryan"
}

Comportamento Esperado

A API deveria retornar um erro controlado, como:

400 Bad Request
ou
422 Unprocessable Entity

Com mensagem amigável informando ausência de campos obrigatórios.

Comportamento Obtido

A API retornou:

500 Internal Server Error

Impacto
Indica ausência de tratamento adequado de validação no backend
Pode causar instabilidade da aplicação
Dificulta troubleshooting
Pode expor falhas internas do sistema

Severidade

Alta

Prioridade

Alta

Observações

Como a API utilizada é pública e compartilhada, algumas inconsistências de ambiente podem ocorrer. Mesmo assim, o comportamento observado representa um problema relevante de validação e robustez da API.