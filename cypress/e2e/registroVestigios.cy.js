/// <reference types="Cypress" />

describe('Registro de vestígios com usuário NÃO DPT', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Registrar vestígio com sucesso', () => {
        cy.registraVestigioNaoDPT()
    });
});