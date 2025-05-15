/// <reference types="Cypress" />

import selectors from "./selectors";

Cypress.Commands.add ('visitaSite', () => {
    cy.visit('https://mop-hom.ssp.ba.gov.br/')
})

Cypress.Commands.add ('loginComSucesso', () => {
    cy.get(selectors.campoUsuarioLogin).type(Cypress.env('usuario'))
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'))
    cy.intercept('POST', '**/authentication').as('loginHome')
    cy.get(selectors.botaoEntrarLogin).click()
    cy.wait('@loginHome', {timeout: 15000})
})

Cypress.Commands.add ('loginUsuarioIncorreto', () => {
    cy.get(selectors.campoUsuarioLogin).type('12345678910')
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senha'))
    cy.intercept('POST', '**/api2/usuarios/authentication').as('loginUnauthorized')
    cy.get(selectors.botaoEntrarLogin).click()
    cy.wait('@loginUnauthorized', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.equal(401);
    })
    cy.get(selectors.errorLoginIncorreto).contains('Você pode ter digitado o Login ou senha errado')
})

Cypress.Commands.add ('loginSenhaIncorreto', () => {
    cy.get(selectors.campoUsuarioLogin).type('92107851')
    cy.get(selectors.campoSenhaLogin).type('1234567Ig*')
    cy.intercept('POST', '**/api2/usuarios/authentication').as('loginUnauthorized')
    cy.get(selectors.botaoEntrarLogin).click()
    cy.wait('@loginUnauthorized', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.equal(401);
    })
    cy.get(selectors.errorLoginIncorreto).contains('Você pode ter digitado o Login ou senha errado')
})

Cypress.Commands.add ('recuperarSenha', () => {
    cy.contains('Esqueci Minha Senha').click()
    cy.get(selectors.inputMatriculaRecuperarSenha, {timeout: 15000}).type('99999000')
    cy.get(selectors.inputCPFRecuperarSenha).type('07342235016')
    cy.contains('button', 'Recuperar').click()
    cy.get(selectors.errorLoginIncorreto, {timeout: 15000}).contains('Senha provisória enviada para o e-mail')
})

Cypress.Commands.add ('recuperarSenhaIncorreta', () => {
    cy.contains('Esqueci Minha Senha').click()
    cy.get(selectors.inputMatriculaRecuperarSenha, {timeout: 15000}).type('92107855')
    cy.get(selectors.inputCPFRecuperarSenha).type('86369021504')
    cy.contains('button', 'Recuperar').click()
    cy.get(selectors.errorLoginIncorreto, {timeout: 15000}).contains('Por favor, verifique os dados digitados ou entre em contato com o Supervisor da sua Unidade')
})


