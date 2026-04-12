import { app } from './shared/infra/http/app';
import { startEnvironments } from './shared/utils/startEnvironment';

async function appStart() {
  await startEnvironments();

  app.listen({ port: Number(process.env.API_PORT || 8080), host: '0.0.0.0' });
}

appStart();
