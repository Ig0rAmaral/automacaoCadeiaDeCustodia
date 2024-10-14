/// <reference types="Cypress" />
describe('Liberação de Vestígios', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Liberar vestígio com sucesso', () => {
        cy.registrarVestigioParaLiberacao()
        cy.liberarVestigio()
    });
    it('CT002 - Consultar vestígio pelo parâmetro "DATA"', () => {
        cy.consultaVestigioDataLiberacao()
    });
    it('CT003 - Consultar vestígio pelo parâmetro "LACRE"', () => {
        cy.consultaVestigioLacreLiberacao()
    });
    it('CT004 - Consultar vestígio pelo parâmetro "CÓDIGO RASTREAMENTO"', () => {
        cy.consultaVestigioCodRastreamentoLiberacao()
    });
    it('CT007 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL COLETA"', () => {
        cy.consultaNomeRespColetaLiberacao()
    });
    it('CT008 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL COLETA"', () => {
        cy.consultaMatriculaRespColetaLiberacao()
    });
    it('CT009 - Consultar vestígio inexistente', () => {
        cy.consultaVestigioInexistenteLiberacao()
    });
    it('CT010 - Limpar campos de consulta de vestígios', () => {
        cy.limparCamposConsultaLiberacao()
    });
});

describe('Consultas com usuário DPT', () => {
    // it('CT005 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL PRESERVAÇÃO"', () => {
    //     cy.visitaSite()
    //     cy.loginComoDPT()
    //     cy.consultaNomeRespPreservacaoLiberacao()
    // });
    it('CT006 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL PRESERVAÇÃO"', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.consultaMatriculaRespPreservacaoLiberacao()
    });
});