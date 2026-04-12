import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import { moduleRouter } from '../../../modules/infra/http/routes/module.routes';

const app = fastify({
  trustProxy: true,
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
});

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Node Backend Base',
      version: '1.0.0',
      description: 'API do template padrão Node.js',
    },
  },
});

app.get('/health', async (_request, reply) => {
  return reply.code(200).send({ status: 'ok' });
});

app.register(moduleRouter, { prefix: '/' });

export { app };
