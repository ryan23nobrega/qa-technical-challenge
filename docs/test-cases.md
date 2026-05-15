# Casos de Teste

# UI Testing - Sauce Demo

---

## CT-001 - Login com usuário válido

### Objetivo
Validar login com credenciais válidas.

### Passos
1. Acessar a página inicial
2. Informar usuário válido
3. Informar senha válida
4. Clicar em Login

### Resultado Esperado
Usuário deve ser autenticado e redirecionado para a página de produtos.

---

## CT-002 - Login com usuário bloqueado

### Objetivo
Validar comportamento para usuário bloqueado.

### Passos
1. Acessar a página inicial
2. Informar usuário bloqueado
3. Informar senha válida
4. Clicar em Login

### Resultado Esperado
Sistema deve exibir mensagem de erro informando bloqueio do usuário.

---

## CT-003 - Ordenação de produtos

### Objetivo
Validar ordenação de produtos.

### Passos
1. Realizar login
2. Acessar filtro de produtos
3. Selecionar ordenação

### Resultado Esperado
Produtos devem ser exibidos na ordem selecionada.

---

## CT-004 - Adicionar produto ao carrinho

### Objetivo
Validar inclusão de produto no carrinho.

### Passos
1. Realizar login
2. Adicionar produto ao carrinho

### Resultado Esperado
Produto deve ser adicionado corretamente ao carrinho.

---

## CT-005 - Remover produto do carrinho

### Objetivo
Validar remoção de produto do carrinho.

### Passos
1. Adicionar produto ao carrinho
2. Remover produto

### Resultado Esperado
Produto deve ser removido corretamente.

---

## CT-006 - Fluxo completo de checkout

### Objetivo
Validar processo completo de compra.

### Passos
1. Realizar login
2. Adicionar produtos
3. Acessar carrinho
4. Finalizar checkout
5. Confirmar compra

### Resultado Esperado
Compra deve ser concluída com sucesso.

---

## CT-007 - Logout

### Objetivo
Validar logout do sistema.

### Passos
1. Realizar login
2. Abrir menu lateral
3. Clicar em Logout

### Resultado Esperado
Usuário deve retornar para tela de login.

---

# API Testing - Restful Booker

---

## CT-008 - Gerar token de autenticação

### Objetivo
Validar geração de token.

### Passos
1. Enviar credenciais válidas

### Resultado Esperado
API deve retornar token válido.

---

## CT-009 - Criar reserva

### Objetivo
Validar criação de reserva.

### Passos
1. Enviar payload válido

### Resultado Esperado
Reserva deve ser criada com sucesso.

---

## CT-010 - Consultar reserva

### Objetivo
Validar consulta de reserva.

### Passos
1. Informar bookingid válido

### Resultado Esperado
API deve retornar dados da reserva.

---

## CT-011 - Atualizar reserva

### Objetivo
Validar atualização de reserva.

### Passos
1. Autenticar usuário
2. Enviar payload atualizado

### Resultado Esperado
Reserva deve ser atualizada corretamente.

---

## CT-012 - Excluir reserva

### Objetivo
Validar exclusão de reserva.

### Passos
1. Autenticar usuário
2. Excluir reserva existente

### Resultado Esperado
Reserva deve ser removida com sucesso.

---

## CT-013 - Validação de campos obrigatórios

### Objetivo
Validar comportamento da API para payload inválido.

### Passos
1. Enviar payload incompleto

### Resultado Esperado
API deveria retornar erro de validação controlado.

### Resultado Obtido
API retornou:

500 Internal Server Error

Caracterizando falha de tratamento de erro no backend.
