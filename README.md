# node-backend-base 🚀

Template padrão para APIs em Node.js focado em arquitetura escalável e produtividade. Este repositório serve como o alicerce (boilerplate) para novos projetos Backend.

## 🛠️ Tecnologias e Ferramentas

O projeto foi estruturado com as melhores bibliotecas do ecossistema Node.js:

* **Runtime:** [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
* **Framework Web:** [Fastify](https://www.fastify.io/) (Focado em performance)
* **Injeção de Dependência:** [Awilix](https://github.com/jeffijoe/awilix) (Para um código desacoplado)
* **Logs:** [Pino](https://github.com/pinojs/pino) + [Pino-pretty](https://github.com/pinojs/pino-pretty)
* **Documentação:** [Swagger](https://swagger.io/) (Auto-gerada via Fastify-Swagger)
* **Padronização:** [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 🏗️ Estrutura de Pastas

```text
src/
├── config/          # Configurações globais e caminhos
├── modules/         # Módulos de negócio da aplicação
├── shared/          # Recursos compartilhados entre módulos
│   ├── infra/       # Implementações de infra (Containers/DI)
│   └── utils/       # Helpers e utilitários
└── index.ts         # Ponto de entrada da aplicação