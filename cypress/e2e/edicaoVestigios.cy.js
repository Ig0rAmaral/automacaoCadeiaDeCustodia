/// <reference types="Cypress" />

describe('Edição de vestígio com usuário NÃO DPT', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Editar vestígio NÃO DPT em modo aditamento com sucesso', () => {
    cy.editarVestigio()
    });
});