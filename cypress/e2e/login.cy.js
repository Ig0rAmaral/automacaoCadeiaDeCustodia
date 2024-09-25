/// <reference types="Cypress" />

beforeEach('Visita site e faz login' , () => {
    cy.visitaSite()
});
describe('Automação de login', () => {
    it.only('Login com sucesso', () => {
        cy.loginComSucesso()
    });
    it('Login com usuário incorreto', () => {
        cy.loginUsuarioIncorreto()
    });
});