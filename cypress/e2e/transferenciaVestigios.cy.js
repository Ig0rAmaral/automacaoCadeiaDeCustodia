/// <reference types="Cypress" />
describe('Transferência de vestígios', () => {
    
    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Transferir vestígio com sucesso ', () => {
        cy.transferirVestigio()
        cy.visitaSite()
        cy.loginComOutroUsuario()
    });
});