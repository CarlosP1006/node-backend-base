# node-backend-base 🚀

**Template profissional para APIs em Node.js** com arquitetura escalável, pronta para produção e foco em produtividade.

Este repositório é um **boilerplate completo** que elimina horas de configuração inicial. Clone, renomeie o módulo de exemplo `Random`, e comece a implementar sua lógica de negócio imediatamente.

## ⚡ Por que usar este template?

- ✅ **Arquitetura limpa:** Handler → Service → Provider (separação de responsabilidades)
- ✅ **Injeção de Dependência:** Código desacoplado e testável com Awilix
- ✅ **TypeScript:** Type-safety completo
- ✅ **Performance:** Fastify é um dos frameworks mais rápidos do Node.js
- ✅ **Pronto para iniciar:** Apenas renomeie `Random` para seu domínio e comece

## 🛠️ Stack Tecnológico

* **Runtime:** [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
* **Framework Web:** [Fastify](https://www.fastify.io/) (Alta performance e baixa latência)
* **DI Container:** [Awilix](https://github.com/jeffijoe/awilix) (Gerenciamento profissional de dependências)
* **Logs:** [Pino](https://github.com/pinojs/pino) + [Pino-pretty](https://github.com/pinojs/pino-pretty)
* **Documentação:** [Swagger](https://swagger.io/) (Auto-generation com Fastify-Swagger)
* **Qualidade de Código:** [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 🏗️ Estrutura de Pastas

```🚀 Começando

### 1. Clone e instale dependências
```bash
git clone <repo-url>
cd node-backend-base
npm install
```

### 2. Renomeie o módulo de exemplo
Altere todas as ocorrências de `Random` para sua entidade (ex: `User`, `Product`, `Order`):

**Arquivos-chave para renomear:**
- `src/modules/providers/implementations/randomProvider.ts` → `userProvider.ts`
- `src/modules/providers/models/IRandomProvider.ts` → `IUserProvider.ts`
- `src/modules/services/RandomService.ts` → `UserService.ts`
- `src/modules/infra/handlers/randomHandler.ts` → `userHandler.ts`

### 3. Rode a aplicação
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:<PORTA>` (configure a porta em `.env`)

## 📕 Fluxo de Arquitetura

A aplicação segue o padrão **Handler → Service → Provider:**

```
Cliente HTTP
    ↓
Handler (recebe requisição)
    ↓
Service (orquestra lógica)
    ↓
Provider (executa operação)
    ↓
Retorna resposta
```

**Cada camada tem uma responsabilidade:**
- **Handler:** Interface HTTP, recebe/envia dados
- **Service:** Lógica de negócio, orquestração
- **Provider:** Implementação de operações (BD, APIs externas, etc)
- **Interface:** Define contratos (IUserProvider)