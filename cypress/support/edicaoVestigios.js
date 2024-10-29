/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import selectors from "./selectors"

Cypress.Commands.add('editarVestigioNaoDPT', () => {
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('be.visible').click()
  cy.get(selectors.codigoRastreamentoConsulta).type('493PM24')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.get(selectors.botaoEdicaoVestigio).click()
  cy.xpath(selectors.tipoAditamentoEdicao).click()
  cy.contains('button', 'Próximo').click()
  const textoAleatorio = faker.lorem.words(5)
  cy.wrap(textoAleatorio).as('descricaoVestigio')
  cy.get(selectors.descPosicaoVestigioVisualizacao).clear().type(textoAleatorio)
  const numeroAleatorioCincoDigitos = faker.number.int({ min: 10000, max: 99999 })
  cy.get(selectors.numeroVestigioVisualizacao).clear().type(numeroAleatorioCincoDigitos.toString());
  cy.get(selectors.botaoAdicionarVestigioEdicao).click()
  cy.wait(500)
  cy.xpath(selectors.campoTipoVestigioEdicao).then(($dropdown) => {
    const valorSelecionado = $dropdown.text().trim()
    if (valorSelecionado === 'Alimentos') {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Droga').scrollIntoView().click()
      cy.wrap('Droga').as('valorSelecionado');
    } else {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Alimentos').scrollIntoView().click()
      cy.wrap('Alimentos').as('valorSelecionado');
    }
  cy.wait(500)
  cy.xpath(selectors.botaoSalvarTipoVestigioRegistro).click()
  const textoAleatorio2 = faker.lorem.words(5)
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
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('be.visible').click()
  cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioDptEdicao"))
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.get(selectors.botaoEdicaoVestigio).click()
  cy.xpath(selectors.tipoAditamentoEdicao).click()
  const textoAleatorio = faker.lorem.words(5)
  cy.wrap(textoAleatorio).as('descricaoVestigio')
  cy.get(selectors.justificativaNaoIsolamento).clear().type(textoAleatorio)
  const textoAleatorio2 = faker.lorem.words(5)
  cy.get(selectors.justificativaNaoPreservacao).clear().type(textoAleatorio2)
  cy.get(selectors.localizacaoVisualizacaoVestigio).then(($campo) => {
    const valorAtual = $campo.val().trim(); 
    if (valorAtual === 'Itapuã') {
      cy.get(selectors.localizacaoVisualizacaoVestigio).clear().type('Valéria');
      cy.wrap('Valéria').as('valorSelecionado2');
    } else {
      cy.get(selectors.localizacaoVisualizacaoVestigio).clear().type('Itapuã');
      cy.wrap('Itapuã').as('valorSelecionado2');
    }
  });
  cy.contains('button', 'Próximo').click()
  const textoAleatorio3 = faker.lorem.words(5)
  cy.wrap(textoAleatorio3).as('descricaoVestigio3')
  cy.get(selectors.descPosicaoVestigioVisualizacao).clear().type(textoAleatorio3)
  const numeroAleatorioCincoDigitos = faker.number.int({ min: 10000, max: 99999 })
  cy.get(selectors.numeroVestigioVisualizacao).clear().type(numeroAleatorioCincoDigitos.toString());
  const textoAleatorio4 = faker.lorem.words(5)
  cy.wrap(textoAleatorio4).as('descricaoVestigio4')
  cy.get(selectors.campoDescricaoVestigioRegistro).clear().type(textoAleatorio4)
  cy.get(selectors.botaoAdicionarVestigioEdicao).click()
  cy.wait(500)
  cy.xpath(selectors.campoTipoVestigioEdicao).then(($dropdown) => {
    const valorSelecionado = $dropdown.text().trim()
    if (valorSelecionado === 'Alimentos') {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Droga').scrollIntoView().click()
      cy.wrap('Droga').as('valorSelecionado');
    } else {
      cy.xpath(selectors.dropDownTipoVestigioRegistro).click()
      cy.contains('li', 'Alimentos').scrollIntoView().click()
      cy.wrap('Alimentos').as('valorSelecionado');
    }
  cy.wait(500)
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
  cy.get(selectors.justificativaNaoPreservacao).should('have.text', textoAleatorio2)
  cy.get('@valorSelecionado2').then((valor) => {
    cy.get(selectors.localizacaoVisualizacaoVestigio)
      .should('have.value', valor);
  cy.contains('button', 'Próximo').click()
  cy.get(selectors.descPosicaoVestigioVisualizacao).should('have.text', textoAleatorio3)
  cy.get(selectors.numeroVestigioVisualizacao).should('have.value', numeroAleatorioCincoDigitos.toString())
  cy.get(selectors.campoDescricaoVestigioRegistro).should('have.value', textoAleatorio4)
  cy.get('@valorSelecionado').then((valor) => {
    cy.xpath(selectors.cardVestgioEdicao)
      .should('contain.text', valor);
})
})
})

Cypress.Commands.add('consultaVestigioDataEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.dataInicialConsulta).type('09/10/2024')
  cy.get(selectors.dataFinalConsulta).type('09/10/2024')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24')
})
})

Cypress.Commands.add('consultaVestigioLacreEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.numeroLacreConsulta).type('323345')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24')
})
})

Cypress.Commands.add('consultaVestigioCodigoRastreamentoEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.codigoRastreamentoConsulta).type('493PM24')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24')
})
})

Cypress.Commands.add('consultaVestigioNomeColetaEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.nomeResponsavelColetaConsulta).type('IGOR CARVALHO AMARAL DE SANTANA')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24')
})
})

Cypress.Commands.add('consultaVestigioMatriculaColetaEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.matriculaResponsavelColetaConsulta).type('92107851')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24')
})
})

Cypress.Commands.add('consultaVestigioInexistenteEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.codigoRastreamentoConsulta).type('Teste')
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('Nenhum vestígio encontrado')
})
})

Cypress.Commands.add('limparCamposConsultaEdicao', () => {
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.dataInicialConsulta).type('19/08/2024')
  cy.get(selectors.dataFinalConsulta).type('19/08/2024')
  cy.get(selectors.numeroLacreConsulta).type(Cypress.env("numeroLacre"))
  cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioDPT"))
  cy.get(selectors.nomeResponsavelPreservacaoConsulta).type(Cypress.env("nomeResponsavelPreservacao"))
  cy.get(selectors.matriculaResponsavelPreservacaoConsulta).type(Cypress.env("matriculaResponsavelPreservacao"))
  cy.get(selectors.nomeResponsavelColetaConsulta).type(Cypress.env("nomeResponsavelColeta"))
  cy.get(selectors.matriculaResponsavelColetaConsulta).type(Cypress.env("matriculaResponsavelColeta"))
  cy.get(selectors.botaoLimparCampos).click()
  cy.get(selectors.dataInicialConsulta).should('have.value', '')
  cy.get(selectors.dataFinalConsulta).should('have.value', '')
  cy.get(selectors.numeroLacreConsulta).should('have.value', '')
  cy.get(selectors.codigoRastreamentoConsulta).should('have.value', '')
  cy.get(selectors.nomeResponsavelPreservacaoConsulta).should('have.value', '')
  cy.get(selectors.matriculaResponsavelPreservacaoConsulta).should('have.value', '')
  cy.get(selectors.nomeResponsavelColetaConsulta).should('have.value', '')
  cy.get(selectors.matriculaResponsavelColetaConsulta).should('have.value', '')
})

Cypress.Commands.add ('consultaVestigioNomePreservacaoEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.nomeResponsavelPreservacaoConsulta).type(Cypress.env("nomeResponsavelPreservacao"))
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('507DPT24')
})
})

Cypress.Commands.add ('consultaVestigioMatriculaPreservacaoEdicao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesEditarVestigiosReact&DataJson=.*/).as('requestPesquisa');
  cy.wait(500)
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloEdicaoDeVestigios, {timeout: 15000}).should('contain', 'Edição de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Edição de Vestígios')
  cy.get(selectors.matriculaResponsavelPreservacaoConsulta).type(Cypress.env("usuario"))
  cy.get(selectors.botaoPesquisarConsulta).click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('507DPT24')
})
})