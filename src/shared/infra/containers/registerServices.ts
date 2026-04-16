import { asClass, AwilixContainer } from 'awilix';
import { RandomService } from '../../../modules/services/RandomService';

export function registerServices(container: AwilixContainer): void {
  container.register(
    'randomService',
    asClass(RandomService, { lifetime: 'SINGLETON' }),
  );
}
