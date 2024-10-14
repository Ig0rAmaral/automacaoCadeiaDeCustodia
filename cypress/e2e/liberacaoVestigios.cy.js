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
        
    });
    it('CT003 - Consultar vestígio pelo parâmetro "LACRE"', () => {
        
    });
    it('CT004 - Consultar vestígio pelo parâmetro "CÓDIGO RASTREAMENTO"', () => {
        
    });
    it('CT005 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL PRESERVAÇÃO"', () => {
        
    });
    it('CT006 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL PRESERVAÇÃO"', () => {
        
    });
    it('CT007 - Consultar vestígio pelo parâmetro "NOME RESPONSÁVEL COLETA"', () => {
        
    });
    it('CT008 - Consultar vestígio pelo parâmetro "MATRÍCULA RESPONSÁVEL COLETA"', () => {
        
    });
    it('CT009 - Consultar vestígio inexistente', () => {
        
    });
    it('CT010 - Limpar campos de consulta de vestígios', () => {
        
    });
});