import { FastifyRequest, FastifyReply } from 'fastify';
import { container } from '../../../shared/infra/containers';
import { RandomService } from '../../services/RandomService';

export async function randomHandler(
  _request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const randomService = container.resolve<RandomService>('randomService');

  const result = await randomService.execute();

  reply.send(result);
}
