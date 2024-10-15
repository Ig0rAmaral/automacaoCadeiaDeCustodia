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
    cy.xpath(selectors.campoInserirUnidadeTransferencia, {timeout: 15000}).should('be.visible').type('CRPT  Barreiras')
    cy.contains('CRPT Barreiras', {timeout: 15000}).should('be.visible').click();
    cy.xpath(selectors.botaoTransferirVestigioFinal).click()
    cy.contains('button', 'Sim').click()
    cy.contains('Vestígio transferido com sucesso!')
})

Cypress.Commands.add('loginComOutroUsuario', () => {
    cy.contains('button', 'Ok').click()
    cy.get(selectors.campoUsuarioLogin).type(Cypress.env('usuarioDPT'))
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senhaDPT'))
    cy.intercept('POST', '**/login').as('loginHome')
    cy.get(selectors.botaoEntrarLogin).click()
    cy.wait('@loginHome', {timeout: 15000})
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.xpath(selectors.moduloTransferenciaVestigios, {timeout: 15000}).should('be.visible').click()
    cy.contains('button', 'Receber', {timeout: 15000}).should('be.visible').click()
    cy.xpath(selectors.botaoReceberOpcoes).click()
    cy.xpath(selectors.botaoReceberDetalhesVestigio, {timeout: 15000}).should('be.visible').click()
    cy.xpath(selectors.checkboxSimViolacaoRecebimento, {timeout: 15000}).should('be.visible').check()
    cy.xpath(selectors.campoDescrevaProblemasRecebimento, {timeout: 15000}).should('exist')
    cy.get(selectors.checkboxNaoViolacaoRecebimento).check()
    cy.get(selectors.botaoReceberVestigioFinal).click()
    cy.contains('button', 'Sim', {timeout: 15000}).click()
    cy.contains('Você recebeu o vestígio com sucesso!!!', {timeout: 15000})
    cy.contains('button', 'Ok', {timeout: 15000}).click()
    cy.contains('button', 'Transferir', {timeout: 15000}).click()
    cy.contains('578PM24-01', {timeout: 15000})
})