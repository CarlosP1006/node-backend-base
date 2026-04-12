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
      title: 'Devaloka API',
      version: '1.0.0',
      description: 'Base project for Devaloka services',
    },
  },
});

app.get('/health', async (_request, reply) => {
  return reply.code(200).send({ status: 'ok' });
});

app.register(moduleRouter, { prefix: '/' });

export { app };
