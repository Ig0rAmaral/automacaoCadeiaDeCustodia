/// <reference types="Cypress" />

describe('Registro de vestígios com usuário NÃO DPT', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Origens da coleta disponíveis ao registrar vestígio', () => {
        cy.origensDaColetaDisponiveis()
    });
    it('CT002 - Registrar e liberar vestígio NÃO DPT com sucesso', () => {
        cy.registraVestigioNaoDPT()
    });
    // it('CT003 - Registrar vestígio NÃO DPT com origem da coleta "Entrega por terceiros"', () => {
    //     cy.registraVestigioEntregaPorTerceiros()
    // }); Sem ultima tela de procedimento relacionado BUG
    it('CT004 - Salvar e cancelar rascunho de vestígio com sucesso"', () => {
        cy.salvarRascunhoVestígio()
    }); 
}); 

describe('Registro de vestígios com usuário DPT', () => {
    it('CT005 - Registrar e liberar vestígio DPT com sucesso', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.registraVestigioDPT()
    });
});