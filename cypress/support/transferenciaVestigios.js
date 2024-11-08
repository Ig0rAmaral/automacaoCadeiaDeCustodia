/// <reference types="Cypress" />

import selectors from "./selectors"

Cypress.Commands.add('transferirVestigio', () => {
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloTransferenciaVestigios, {timeout: 15000}).should('be.visible').click()
  cy.contains('tr', '578PM24-01', { timeout: 15000 })
  .find('button')
  .contains('Transferir')
  .click(); 
  cy.xpath(selectors.botaoTransferirDetalhesVestigio, {timeout: 15000}).should('be.visible').click()
  cy.intercept(/\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesConsultaTabelaReact&DataJson=.*/).as('requestUnidades');
  cy.xpath(selectors.campoInserirUnidadeTransferencia, {timeout: 15000}).should('be.visible').type('CRPT')
  cy.wait('@requestUnidades', {timeout: 15000}).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
  })
  cy.contains('CRPT Barreiras', {timeout: 15000}).should('be.visible').click();
  cy.wait(500)
  cy.xpath(selectors.botaoTransferirVestigioFinal).click()
  cy.wait(500)  
  cy.contains('button', 'Sim', {timeout: 15000}).should('exist').and('be.visible').click()
  cy.wait(1000)
  cy.contains('Vestígio transferido com sucesso!', {timeout: 15000})
})

Cypress.Commands.add('recebeTransfereDeVolta', () => {
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloTransferenciaVestigios, {timeout: 15000}).should('be.visible').click()
  cy.contains('button', 'Receber', {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.botaoReceberOpcoes).click()
  cy.xpath(selectors.botaoReceberDetalhesVestigio, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.checkboxSimViolacaoRecebimento, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.campoDescrevaProblemasRecebimento, {timeout: 15000}).should('exist')
  cy.xpath(selectors.checkboxNaoViolacaoRecebimento).click()
  cy.xpath(selectors.botaoReceberVestigioFinal).click()
  cy.wait(1000)
  cy.contains('button', 'Sim', {timeout: 15000}) .should('exist').and('be.visible').click()
  cy.wait(1000)
  cy.contains('Você recebeu o vestígio com sucesso!!!', {timeout: 15000})
  cy.contains('button', 'Ok', {timeout: 15000}).click()
  cy.contains('button', 'Transferir', {timeout: 15000}).click()
  cy.contains('578PM24-01', {timeout: 15000})
  cy.contains('tr', '578PM24-01', { timeout: 15000 })
  .find('button') 
  .contains('Transferir') 
  .click(); 
  cy.xpath(selectors.botaoTransferirDetalhesVestigio, {timeout: 15000}).should('be.visible').click()
  cy.intercept(/\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesConsultaTabelaReact&DataJson=.*/).as('requestUnidades');
  cy.xpath(selectors.campoInserirUnidadeTransferencia, {timeout: 15000}).should('be.visible').type('11ª CIPM')
  cy.wait('@requestUnidades', {timeout: 15000}).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
  })
  cy.contains('11ª CIPM - Barra', {timeout: 15000}).should('be.visible').click();
  cy.wait(500)
  cy.xpath(selectors.botaoTransferirVestigioFinal).click()
  cy.wait(500)
  cy.contains('button', 'Sim', {timeout: 15000}).should('exist').and('be.visible').click()
  cy.wait(1000)
  cy.contains('Vestígio transferido com sucesso!', {timeout: 15000})
})



Cypress.Commands.add ('loginUsuarioInicial', () => {
  cy.get(selectors.campoUsuarioLogin).type(Cypress.env('usuario'))
  cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'))
  cy.intercept('POST', '**/login').as('loginHome')
  cy.get(selectors.botaoEntrarLogin).click()
  cy.wait('@loginHome', {timeout: 15000})
})

Cypress.Commands.add('recebeVestigioDeVolta', () => {
  cy.wait(1000)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloTransferenciaVestigios, {timeout: 15000}).should('be.visible').click()
  cy.contains('button', 'Receber', {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.botaoReceberOpcoes).click()
  cy.xpath(selectors.botaoReceberDetalhesVestigio, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.checkboxNaoViolacaoRecebimento).click()
  cy.xpath(selectors.botaoReceberVestigioFinal).click()
  cy.wait(1000)
  cy.contains('button', 'Sim', {timeout: 15000}).should('exist').and('be.visible').click()
  cy.wait(1000)
  cy.contains('Você recebeu o vestígio com sucesso!!!', {timeout: 15000})
})


Cypress.Commands.add ('cancelarTransferenciaVestigio', () => {
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloTransferenciaVestigios, {timeout: 15000}).should('be.visible').click()
  cy.contains('tr', '578PM24-01', { timeout: 15000 })
  .find('button') 
  .contains('Transferir') 
  .click(); 
  cy.xpath(selectors.botaoTransferirDetalhesVestigio, {timeout: 15000}).should('be.visible').click()
  cy.intercept(/\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesConsultaTabelaReact&DataJson=.*/).as('requestUnidades');
  cy.xpath(selectors.campoInserirUnidadeTransferencia, {timeout: 15000}).should('be.visible').type('CRPT')
  cy.wait('@requestUnidades', {timeout: 15000}).then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
  })
  cy.contains('CRPT Barreiras', {timeout: 15000}).should('be.visible').click();
  cy.wait(500)
  cy.xpath(selectors.botaoTransferirVestigioFinal).click()
  cy.wait(500)
  cy.contains('button', 'Sim', {timeout: 15000}).should('exist').and('be.visible').click()
  cy.wait(1000)
  cy.contains('Vestígio transferido com sucesso!', {timeout: 15000})
  cy.contains('button', 'Ok').click()
  cy.contains('button', 'Em transferência', {timeout: 15000}).click()
  cy.contains('578PM24-01', {timeout: 15000})
  cy.contains('button', 'Cancelar').click()
  cy.wait(1000)
  cy.contains('button', 'Sim', {timeout: 15000}).should('exist').and('be.visible').click()
  cy.contains('Transferência cancelada com sucesso', {timeout: 15000})
})
