/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import selectors from "./selectors"

Cypress.Commands.add('editarVestigioNaoDPT', () => {
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('be.visible').click()
  cy.get(selectors.codigoRastreamentoConsulta).type('493PM24')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.get(selectors.botaoEdicaoVestigio).click()
  cy.xpath(selectors.tipoAditamentoEdicao).click()
  cy.contains('button', 'Próximo').click()
  const textoAleatorio = faker.lorem.words(7)
  cy.wrap(textoAleatorio).as('descricaoVestigio')
  cy.get(selectors.descPosicaoVestigioVisualizacao).clear().type(textoAleatorio)
  const numeroAleatorioCincoDigitos = faker.number.int({ min: 10000, max: 99999 })
  cy.get(selectors.numeroVestigioVisualizacao).clear().type(numeroAleatorioCincoDigitos.toString());
  cy.get(selectors.botaoAdicionarVestigioEdicao).click()
  cy.xpath(selectors.campoTipoVestigioEdicao).then(($dropdown) => {
    const valorSelecionado = $dropdown.text().trim()
    if (valorSelecionado === 'Alimentos') {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Droga').click()
      cy.wrap('Droga').as('valorSelecionado');
    } else {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Alimentos').click()
      cy.wrap('Alimentos').as('valorSelecionado');
    }
  cy.xpath(selectors.botaoSalvarTipoVestigioRegistro).click()
  const textoAleatorio2 = faker.lorem.words(7)
  cy.wrap(textoAleatorio2).as('descricaoVestigio')
  cy.get(selectors.campoDescricaoVestigioRegistro).clear().type(textoAleatorio2)
  cy.contains('button', 'Próximo').click()
  cy.contains('button', 'Finalizar').click()
  cy.get(selectors.modalVestigioEditadoSucesso).should('contain', 'Vestígio aditado com sucesso. O novo código de rastreamento é:')
  cy.get(selectors.okModalVestigioEditado).click()
  cy.get(selectors.campoCodigoRastreamentoEdicao).type('493PM24')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.xpath(selectors.cardSituacaoVestigio).should('contain', 'Aditado')
  cy.get(selectors.botaoEdicaoVestigio).click()
  cy.xpath(selectors.tipoAditamentoEdicao).click()
  cy.contains('button', 'Próximo').click()
  cy.get(selectors.descPosicaoVestigioVisualizacao).should('have.text', textoAleatorio)
  cy.get(selectors.numeroVestigioVisualizacao).should('have.value', numeroAleatorioCincoDigitos.toString());
  cy.get(selectors.campoDescricaoVestigioRegistro).should('have.text', textoAleatorio2)
  cy.get('@valorSelecionado').then((valor) => {
    cy.xpath(selectors.cardVestgioEdicao)
      .should('contain.text', valor);
});
});
})

Cypress.Commands.add ('editarVestigioDPT', () => {
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('be.visible').click()
  cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioDptEdicao"))
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.get(selectors.botaoEdicaoVestigio).click()
  cy.xpath(selectors.tipoAditamentoEdicao).click()
  const textoAleatorio = faker.lorem.words(7)
  cy.wrap(textoAleatorio2).as('descricaoVestigio2')
  cy.get(selectors.justificativaNaoIsolamento).clear().type(textoAleatorio)
  const textoAleatorio2 = faker.lorem.words(7)
  cy.get(selectors.justificativaNaoPreservacao).clear().type(textoAleatorio2)
  cy.get(selectors.localizacaoVisualizacaoVestigio).then(($campo) => {
    const valorAtual = $campo.val().trim(); 
    if (valorAtual === 'Itapuã') {
      cy.get(selectors.localizacaoVisualizacaoVestigio).clear().type('Valéria');
    } else {
      cy.get(selectors.localizacaoVisualizacaoVestigio).clear().type('Itapuã');
    }
  });
  cy.contains('button', 'Próximo').click()
  const textoAleatorio3 = faker.lorem.words(7)
  cy.wrap(textoAleatorio3).as('descricaoVestigio3')
  cy.get(selectors.descPosicaoVestigioVisualizacao).clear().type(textoAleatorio3)
  const numeroAleatorioCincoDigitos = faker.number.int({ min: 10000, max: 99999 })
  cy.get(selectors.numeroVestigioVisualizacao).clear().type(numeroAleatorioCincoDigitos.toString());
  const textoAleatorio4 = faker.lorem.words(7)
  cy.wrap(textoAleatorio4).as('descricaoVestigio4')
  cy.get(selectors.campoDescricaoVestigioRegistro).clear().type(textoAleatorio4)
  cy.get(selectors.botaoAdicionarVestigioEdicao).click()
  cy.xpath(selectors.campoTipoVestigioEdicao).then(($dropdown) => {
    const valorSelecionado = $dropdown.text().trim()
    if (valorSelecionado === 'Alimentos') {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Droga').click()
      cy.wrap('Droga').as('valorSelecionado');
    } else {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Alimentos').click()
      cy.wrap('Alimentos').as('valorSelecionado');
    }
  cy.xpath(selectors.botaoSalvarTipoVestigioRegistro).click()
})
  cy.contains('button', 'Próximo').click()
  cy.contains('button', 'Finalizar').click()
  cy.get(selectors.modalVestigioEditadoSucesso).should('contain', 'Vestígio aditado com sucesso. O novo código de rastreamento é:')
  cy.get(selectors.okModalVestigioEditado).click()
  cy.get(selectors.campoCodigoRastreamentoEdicao).type(Cypress.env("codigoVestigioDptEdicao"))
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.xpath(selectors.cardSituacaoVestigio).should('contain', 'Aditado')
  cy.get(selectors.botaoEdicaoVestigio).click()
  cy.xpath(selectors.tipoAditamentoEdicao).click()
  cy.get(selectors.justificativaNaoIsolamento).should('have.text', textoAleatorio)
})