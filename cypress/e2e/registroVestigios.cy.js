/// <reference types="Cypress" />

describe('Registro de vestígios com usuário NÃO DPT', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Origens da coleta disponíveis ao registrar vestígio', () => {
        cy.origensDaColetaDisponiveis()
    });
    it('CT002 - Registrar vestígio com sucesso', () => {
        cy.registraVestigioNaoDPT()
    });
    it('CT003 - Registrar vestígio com origem da coleta "Entrega por terceiros"', () => {
        cy.registraVestigioEntregaPorTerceiros()
    });
});

describe.only('Registro de vestígios com usuário DPT', () => {
    it('CT004 - Registrar vestígio com sucesso', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.registraVestigioDPT()
    });
});