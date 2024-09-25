/// <reference types="Cypress" />

import selectors from "./selectors";

Cypress.Commands.add ('visitaSite', () => {
    cy.visit('https://mop-hom.ssp.ba.gov.br/')
})

Cypress.Commands.add ('loginComSucesso', () => {
    cy.get(selectors.campoUsuarioLogin).type(Cypress.env('usuario'))
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'))
    cy.intercept('POST', '**/login').as('loginHome')
    cy.get(selectors.botaoEntrarLogin).click()
    cy.wait('@loginHome', {timeout: 15000})
})

Cypress.Commands.add ('loginUsuarioIncorreto', () => {
    cy.get(selectors.campoUsuarioLogin).type('12345678910')
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'))
    cy.get(selectors.botaoEntrarLogin).click()

    cy.intercept('POST', '**/api/auth/login').as('loginUnauthorized')
    cy.wait('@loginUnauthorized', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.equal(401);
    })
})

