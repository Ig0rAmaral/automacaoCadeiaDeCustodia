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
  cy.xpath(selectors.moduloLiberacaoVestigios).click()
  cy.get('@numeroLacre').then((valor) => {
  cy.get(selectors.campoLacreConsultaEdicao).type(valor)
})
})
  cy.contains('button', 'Pesquisar').click()
  cy.get(selectors.iconeInfoLiberacaoVestigio, {timeout: 15000}).should('be.visible').click()
  cy.contains('button', 'Liberar').click()
  cy.get(selectors.botaoSimLiberarVestigio).click()
  cy.contains('Dados alterados com sucesso!', {timeout: 15000})
})

Cypress.Commands.add ('liberarVestigio', () => {

})