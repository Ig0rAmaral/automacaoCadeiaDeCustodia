/// <reference types="Cypress" />
describe('Edição de vestígio com usuário NÃO DPT', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Editar vestígio NÃO DPT em modo aditamento com sucesso', () => {
        cy.editarVestigioNaoDPT()
    });
    // it('CT002 - Editar vestígio NÃO DPT em modo rompimento de lacre com sucesso', () => {
    //     cy.()
    // });
});
describe('Edição de vestígio com usuário DPT', () => {
    it('CT003 - Editar vestígio DPT em modo aditamento com sucesso', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.editarVestigioDPT()
    });
});