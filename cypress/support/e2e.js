import './commands'
import './consultaVestigio'
import './login'
import './registroVestigios'
import './edicaoVestigios'
import 'cypress-iframe'
import { faker } from '@faker-js/faker';
require('@cypress/xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });