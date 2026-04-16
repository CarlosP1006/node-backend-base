import { FastifyInstance } from 'fastify';
import { randomHandler } from '../../handlers/randomHandler';

export async function moduleRouter(app: FastifyInstance): Promise<void> {
  app.get('/random', randomHandler);
}
