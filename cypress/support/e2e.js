Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes("Cannot read properties of null (reading 'value')") || 
    err.message.includes("Request failed with status code 500") ||
    err.message.includes("Cannot read properties of null (reading 'target')") ||
    err.message.includes("Cannot read properties of undefined (reading 'includes')") ||
    err.message.includes("Cannot read properties of undefined (reading 'codigo')") ||
    err.message.includes("Cannot read properties of undefined (reading '0')")
  ) {
    return false; 
  }
});


import './commands'
import './consultaVestigios'
import './login'
import './registroVestigios'
import './edicaoVestigios'
import './liberacaoVestigios'
import './transferenciaVestigios'
import 'cypress-iframe'
import { faker } from '@faker-js/faker';
require('@cypress/xpath');
