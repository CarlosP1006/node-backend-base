import { createContainer } from 'awilix';
import { registerServices } from './registerServices';
import { registerProviders } from './registerProviders';
import { registerRepositories } from './registerRepositories';

const container = createContainer({ injectionMode: 'CLASSIC' });

registerRepositories(container);
registerProviders(container);
registerServices(container);

export { container };
