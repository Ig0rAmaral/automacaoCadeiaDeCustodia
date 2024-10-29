/// <reference types="Cypress" />
describe('Transferência de vestígios', () => {
    
    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Transferir vestígio com sucesso', () => {
        cy.transferirVestigio()
    });
});
describe('Receber vestígio com outra conta', () => {
    it('CT002 - Receber vestígio com sucesso', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.recebeTransfereDeVolta()
    });
    it('Recebe vestígio de volta para rodar o CT003', () => {
        cy.visitaSite()
        cy.loginUsuarioInicial()
        cy.recebeVestigioDeVolta()
    });
    it('CT003 - Cancelar transferência de vestígio com sucesso', () => {
        cy.visitaSite()
        cy.loginComSucesso()
        cy.cancelarTransferenciaVestigio()
    });
});