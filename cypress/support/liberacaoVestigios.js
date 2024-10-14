/// <reference types="Cypress" />

import selectors from "./selectors";

Cypress.Commands.add ('registrarVestigioParaLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesConsultaTabelaReact&DataJson=.*/).as('requestProximoRegistro');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.wait(1000)
  cy.xpath(selectors.moduloRegistroVestigios, {timeout:15000}).should('be.visible').click()
  cy.xpath(selectors.dropDownOrigemColeta).click()
  cy.xpath(selectors.listaDropDownOrigemColeta).contains('Local de Crime').click();
  cy.get(selectors.campoLocalizacaoRegistroVestigio).type('Valeria')
  cy.contains('button', 'Próximo').click()
  cy.wait('@requestProximoRegistro', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
  cy.get(selectors.matriculaResponsavelColetaVisualizacao).should('have.value', '92107851            ')
  cy.get(selectors.campoResponsavelColetaRegistro).should('have.value', 'IGOR CARVALHO AMARAL DE SANTANA')
  cy.get(selectors.cargoResponsavelColetaVisualizacao).should('have.value', 'Funcionário Civil')
  cy.get(selectors.campoUnidadeColetaRegistro).should('have.value', '11ª CIPM - Barra')
  cy.get(selectors.checkboxImediatoRegistro).check();
  cy.get(selectors.descPosicaoVestigioVisualizacao).type('Vestígio criado pela automação')
  const numeroAleatorio = Math.floor(10000 + Math.random() * 90000)
  cy.wrap(numeroAleatorio).as('numeroLacre');
  cy.get(selectors.numeroVestigioVisualizacao).type(numeroAleatorio.toString())
  cy.get(selectors.numeroLacreVisualizacao).type(numeroAleatorio.toString())
  cy.xpath(selectors.botaoAdicionarVestigioRegistro).click()
  cy.xpath(selectors.dropDownTipoVestigioRegistro).should('be.visible').click()
  cy.wait(1000)
  cy.xpath(selectors.listaDropDownTipoVestigioRegistro).should('be.visible').contains('Explosivo').click()
  cy.xpath(selectors.botaoSalvarTipoVestigioRegistro).click()
  cy.xpath(selectors.botaoAdicionarVestigioRegistro).should('contain.text', 'Explosivo')
  cy.get(selectors.campoDescricaoVestigioRegistro).type('Vestígio criado pela automação')
  cy.get(selectors.checkboxCriminalNaturezaExameRegistro).check()
  cy.contains('button', 'Próximo').click()
  cy.xpath(selectors.campoTipoProcedRelacionadoRegistro).click()
  cy.xpath(selectors.listaDropDownProcedRelacionadoRegistro).should('be.visible').contains('Boletim de Ocorrência').click()
  cy.get(selectors.numeroProcedRelacionadoRegistro).type(numeroAleatorio.toString())
  cy.xpath(selectors.unidadeProcedRelacionadoRegistro).type('unidade teste')
  cy.get(selectors.autoridadeProcedRelacionadoRegistro).type('teste')
  cy.contains('button', 'Concluir').click()
  cy.contains('Deseja registrar outro vestígio?')
  cy.xpath(selectors.naoDesejaRegistrarOutroVestigio).click()
})
})

Cypress.Commands.add ('liberarVestigio', () => {
  cy.xpath(selectors.moduloLiberacaoVestigios).click()
  cy.get('@numeroLacre').then((valor) => {
  cy.get(selectors.campoLacreConsultaEdicao).type(valor)
  cy.contains('button', 'Pesquisar').click()
  cy.get(selectors.iconeInfoLiberacaoVestigio, {timeout: 15000}).should('be.visible').click()
  cy.contains('button', 'Liberar').click()
  cy.get(selectors.botaoSimLiberarVestigio).click()
  cy.contains('Dados alterados com sucesso!', {timeout: 15000})
})
})

Cypress.Commands.add ('consultaVestigioDataLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.xpath(selectors.dataInicialConsultaLiberacao).type('06/10/2024')
  cy.xpath(selectors.dataFinalConsultaLiberacao).type('08/10/2024')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('496PM24', {timeout: 15000})
})
})

Cypress.Commands.add ('consultaVestigioLacreLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.campoLacreConsultaEdicao).type('234234234')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('496PM24', {timeout: 15000})
})
})

Cypress.Commands.add('consultaVestigioCodRastreamentoLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.codRastreamentoConsultaLiberacao).type('496PM24')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('496PM24', {timeout: 15000})
})
})

Cypress.Commands.add('consultaNomeRespPreservacaoLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.nomeRespPreservacaoConsultaLiberacao).type('')
})

Cypress.Commands.add('consultaMatriculaRespPreservacaoLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.matriculaRespPreservacaoConsultaLiberacao).type('92107851')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('507DPT24', {timeout: 15000})
})
})

Cypress.Commands.add('consultaNomeRespColetaLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.nomeRespColetaConsultaLiberacao).type('IGOR CARVALHO AMARAL DE SANTANA')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24', {timeout: 15000})
})
})

Cypress.Commands.add('consultaMatriculaRespColetaLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.matriculaRespColetaConsultaLiberacao).type('92107851')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  cy.contains('493PM24', {timeout: 15000})
})
})

Cypress.Commands.add ('consultaVestigioInexistenteLiberacao', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVestigiosCRUD&DataJson=.*/).as('requestPesquisa');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.get(selectors.campoLacreConsultaEdicao).type('72727888686')
  cy.contains('button', 'Pesquisar').click()
  cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
  cy.contains('Nenhum dado para exibir')
})
})

Cypress.Commands.add ('limparCamposConsultaLiberacao', () => {
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.xpath(selectors.moduloLiberacaoVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios').click()
  cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('contain', 'Liberação de Vestígios')
  cy.xpath(selectors.dataInicialConsultaLiberacao).type('06/10/2024')
  cy.xpath(selectors.dataFinalConsultaLiberacao).type('08/10/2024')
  cy.get(selectors.campoLacreConsultaEdicao).type('234234234')
  cy.get(selectors.codRastreamentoConsultaLiberacao).type('496PM24')
  cy.get(selectors.nomeRespPreservacaoConsultaLiberacao).type('teste')
  cy.get(selectors.matriculaRespPreservacaoConsultaLiberacao).type('92107851')
  cy.get(selectors.nomeRespColetaConsultaLiberacao).type('IGOR CARVALHO AMARAL DE SANTANA')
  cy.get(selectors.matriculaRespColetaConsultaLiberacao).type('92107851')
  cy.get(selectors.botaoLimparCampos).click()
  cy.xpath(selectors.dataInicialConsultaLiberacao).should('have.value', '')
  cy.xpath(selectors.dataFinalConsultaLiberacao).should('have.value', '')
  cy.get(selectors.campoLacreConsultaEdicao).should('have.value', '')
  cy.get(selectors.codRastreamentoConsultaLiberacao).should('have.value', '')
  cy.get(selectors.nomeRespPreservacaoConsultaLiberacao).should('have.value', '')
  cy.get(selectors.matriculaRespPreservacaoConsultaLiberacao).should('have.value', '')
  cy.get(selectors.nomeRespColetaConsultaLiberacao).should('have.value', '')
  cy.get(selectors.matriculaRespColetaConsultaLiberacao).should('have.value', '')
})