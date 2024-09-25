import './commands'
import './consultaVestigio'
import './login'
import './registroVestigios'
import 'cypress-iframe'
require('@cypress/xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });