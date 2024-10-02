/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';
import selectors from "./selectors"

Cypress.Commands.add('editarVestigio', () => {
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.codigoRastreamentoConsulta).type('493PM24-02')
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.get(selectors.botaoEdicaoVestigio).click()
    cy.xpath(selectors.tipoAditamentoEdicao).click()
    cy.contains('button', 'Próximo').click()
    cy.get(selectors.descPosicaoVestigioVisualizacao).clear()
    const textoAleatorio = faker.lorem.words(7);
    cy.wrap(textoAleatorio).as('descricaoVestigio');
    cy.get(selectors.descPosicaoVestigioVisualizacao).type(textoAleatorio);
    const numeroAleatorioCincoDigitos = faker.number.int({ min: 10000, max: 99999 });
    cy.get(selectors.numeroVestigioVisualizacao).clear().type(numeroAleatorioCincoDigitos.toString());
    cy.get(selectors.botaoAdicionarVestigioEdicao).click()

    // cy.xpath(selectors.campoTipoVestigioEdicao).then(($dropdown) => {
    //     const valorSelecionado = $dropdown.val(); 
    //     if (valorSelecionado === 'Alimentos') {
    //       // Se a opção atual for A, selecione B
    //       cy.xpath(selectors.dropDownTipoVestigioRegistro).select('Celulares');
    //     } else {
    //       // Se não for A, selecione A
    //       cy.xpath(selectors.dropDownTipoVestigioRegistro).select('Explosivos');
    //     }
    //   });


    cy.xpath(selectors.campoTipoVestigioEdicao).then(($dropdown) => {
        const valorSelecionado = $dropdown.text().trim(); // Captura o valor atualmente exibido no dropdown
      
        if (valorSelecionado === 'Alimentos') {
          // Se a opção atual for 'Alimentos', selecione 'Celulares'
          cy.xpath(selectors.dropDownTipoVestigioRegistro).click(); // Clique para abrir o dropdown
          cy.contains('li', 'Celulares').click(); // Clique na opção 'Celulares'
        } else {
          // Se não for 'Alimentos', selecione 'Explosivos'
          cy.xpath(selectors.dropDownTipoVestigioRegistro).click(); // Clique para abrir o dropdown
          cy.contains('li', 'Explosivo').click(); // Clique na opção 'Explosivos'
        }
      });
})