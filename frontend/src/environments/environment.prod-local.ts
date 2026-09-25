import { environment as prod } from './environment.prod';

// Aperçu local de la production (`npx ng serve --configuration prod-local`) : mêmes sections
// masquées que la prod, mais avec l'API locale pour voir les vraies données.
export const environment = {
  ...prod,
  production: false,
  apiUrl: 'http://localhost:3000/api',
};
