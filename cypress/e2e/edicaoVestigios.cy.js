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
    //   cy.edicaoRompimentoLacre()
    //   });
    it('CT005 - Consultar vestígio pelo parâmetro "DATA"', () => {
        cy.consultaVestigioDataEdicao()
    });
    it('CT006 - Consultar vestígio pelo parâmetro "LACRE"', () => {
        cy.consultaVestigioLacreEdicao()
    });
    it('CT007 - Consultar vestígio pelo parâmetro "CÓDIGO RASTREAMENTO"', () => {
        cy.consultaVestigioCodigoRastreamentoEdicao()
    });
    it('CT008 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL COLETA"', () => {
        cy.consultaVestigioNomeColetaEdicao()
    });
    it('CT009 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL COLETA"', () => {
        cy.consultaVestigioMatriculaColetaEdicao()
    });
    it('CT010 - Consultar vestígio inexistente', () => {
        cy.consultaVestigioInexistenteEdicao()
    });
    it('CT011 - Limpar campos de consulta de vestígios', () => {
        cy.limparCamposConsultaEdicao()
    });
});
describe('Edição de vestígio com usuário DPT', () => {
    it('CT003 - Editar vestígio DPT em modo aditamento com sucesso', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.editarVestigioDPT()
    });
    // it('CT004 - Editar vestígio DPT em modo rompimento de lacre com sucesso', () => {
    //   cy.()
    //   });
    it('CT012 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL PRESERVAÇÃO"', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.consultaVestigioNomePreservacaoEdicao()
    });
    it('CT013 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL PRESERVAÇÃO"', () => {
        cy.visitaSite()
        cy.loginComoDPT()
        cy.consultaVestigioMatriculaPreservacaoEdicao()
    });
});