/// <reference types="Cypress" />

beforeEach('Visita site e faz login' , () => {
    cy.visitaSite()
});
describe('Automação de login', () => {
    it('CT001 - Realizar login com sucesso', () => {
        cy.loginComSucesso()
    });
    it('CT002 - Login com usuário incorreto', () => {
        cy.loginUsuarioIncorreto()
    });
    it('CT003 - Login com senha incorreta', () => {
        cy.loginSenhaIncorreto()
    });
    it('CT004 - Recuperar senha com sucesso', () => {
        cy.recuperarSenha()
    });
    it('CT005 - Recuperar senha com matrícula incorreta', () => {
        cy.recuperarSenhaIncorreta()
    });
});