import { asClass, AwilixContainer } from 'awilix';
import { RandomProvider } from '../../../modules/providers/implementations/randomProvider';

export function registerProviders(container: AwilixContainer): void {
  container.register(
    'randomProvider',
    asClass(RandomProvider, { lifetime: 'SINGLETON' }),
  );
}
