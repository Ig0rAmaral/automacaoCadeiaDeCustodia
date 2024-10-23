/// <reference types="Cypress" />
describe('Consulta e visualização de vestígios com usuário não DPT', () => {

    beforeEach('Visita site e faz login' , () => {
        cy.visitaSite()
        cy.loginComSucesso()
    });
    it('CT001 - Consultar vestígio pelo parâmetro "DATA"', () => {
        cy.consultaVestigioData()
    });
    it('CT002 - Consultar vestígio pelo parâmetro "LACRE"', () => {
        cy.consultaVestigioLacre()
    });
    it('CT003 - Consultar vestígio pelo parâmetro "CÓDIGO RASTREAMENTO"', () => {
        cy.consultaVestigioCodigoRastreamento()
    });
    it('CT004 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL PRESERVAÇÃO"', () => {
        cy.consultaVestigioNomePreservacao()
    });
    it('CT005 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL PRESERVAÇÃO"', () => {
        cy.consultaVestigioMatriculaPreservacao()
    });
    it('CT006 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL COLETA"', () => {
        cy.consultaVestigioNomeColeta()
    });
    it('CT007 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL COLETA"', () => {
        cy.consultaVestigioMatriculaColeta()
    });
    it('CT008 - Consultar vestígio inexistente', () => {
        cy.consultaVestigioInexistente()
    });
    it('CT009 - Limpar campos de consulta de vestígios', () => {
        cy.limparCamposConsulta()
    });
    it('CT010 - Visualizar vestígio NÃO DPT após consulta', () => {
        cy.consultaVisualizaVestigioPadrao()
    });
    it('CT011 - Permissão para visualizar vestígio não pertencente à unidade do usuário', () => {
        cy.permissaoVisualizarVestigio()
    });
});
describe('Consulta e visualização de vestígios com usuário DPT', () => {
    it('CT012 - Visualizar vestígio DPT após consulta', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.consultaVisualizaVestigioDPT()
    });
});