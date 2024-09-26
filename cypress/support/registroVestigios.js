/// <reference types="Cypress" />

import selectors from "./selectors";

Cypress.Commands.add('origensDaColetaDisponiveis', () => {
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.wait(1000)
    cy.xpath(selectors.moduloRegistroVestigios, {timeout:15000}).should('be.visible').click()
    cy.xpath(selectors.dropDownOrigemColeta).click()
    cy.xpath(selectors.listaDropDownOrigemColeta).find('li') 
    .then(options => {
        const actualOptions = [...options].map(option => option.innerText.trim()) 
        const expectedOptions = [
          '(Selecione)',
          'Local de Crime', 
          'Cumprimento de Mandados', 
          'Flagrante Delito', 
          'Entrega por Terceiros', 
          'Diligência Policial'
        ].map(option => option.trim()) 
        expect(actualOptions).to.have.members(expectedOptions)
      })
})


Cypress.Commands.add ('registraVestigioNaoDPT', () => {
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
    const numeroAleatorio = Math.floor(10000 + Math.random() * 90000);
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
    cy.get(selectors.moduloConsultaDeVestígios, {timeout:15000}).should('be.visible').click()
    cy.xpath(selectors.botaoMeusVestigios, {timeout:15000}).should('be.visible').click()
    cy.contains('Tipo de vestígio: Explosivo')
    cy.get(selectors.botaoLiberarVestigio, {timeout:15000}).should('be.visible').click()
    cy.xpath(selectors.simLiberarVestigio, {timeout:15000}).should('be.visible').click()
    cy.contains('Vestígio encerrado com sucesso.')
    })
  })

Cypress.Commands.add ('registraVestigioEntregaPorTerceiros', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesConsultaTabelaReact&DataJson=.*/).as('requestProximoRegistro');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.wait(1000)
  cy.xpath(selectors.moduloRegistroVestigios, {timeout:15000}).should('be.visible').click()
  cy.xpath(selectors.dropDownOrigemColeta).click()
  cy.xpath(selectors.listaDropDownOrigemColeta).contains('Entrega por Terceiros').click();
  cy.get(selectors.checkboxDocNaoApresentado).click()
  cy.get(selectors.campoNomeApresentante).type('Automação Teste')
  cy.get(selectors.campoEnderecoApresentante).type('Valéria')
  cy.get(selectors.campoLocalColetaEntregaTerceiros).type('Valéria')
  cy.get(selectors.campoLocalEntrega).type('Valéria')
  cy.get(selectors.observacoesColetaEntregaPorTerceiros).type('Vestígio criado para automação')
  cy.contains('button', 'Próximo').click()
  cy.wait('@requestProximoRegistro', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
  cy.get(selectors.checkboxImediatoRegistro).check();
  cy.get(selectors.descPosicaoVestigioVisualizacao).type('Vestígio criado pela automação')
   const numeroAleatorio = Math.floor(10000 + Math.random() * 90000);
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
  cy.contains('button', 'Concluir').click()
  cy.contains('Deseja registrar outro vestígio?')
  cy.xpath(selectors.naoDesejaRegistrarOutroVestigio).click()
  cy.get(selectors.moduloConsultaDeVestígios, {timeout:15000}).should('be.visible').click()
  cy.xpath(selectors.botaoMeusVestigios, {timeout:15000}).should('be.visible').click()
  cy.contains('Tipo de vestígio: Explosivo')
  cy.get(selectors.botaoLiberarVestigio, {timeout:15000}).should('be.visible').click()
  cy.xpath(selectors.simLiberarVestigio, {timeout:15000}).should('be.visible').click()
  cy.contains('Vestígio encerrado com sucesso.')
})
})

Cypress.Commands.add ('registraVestigioDPT', () => {
  cy.intercept('GET', /\/api\/ServiceMopIonic\/api\/Executar\?StoreProcName=spVesConsultaTabelaReact&DataJson=.*/).as('requestProximo');
  cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
  cy.wait(1000)
  cy.xpath(selectors.moduloRegistroVestigios, {timeout:15000}).should('be.visible').click()
  cy.xpath(selectors.dropDownOrigemColeta).click()
  cy.xpath(selectors.listaDropDownOrigemColeta).contains('Local de Crime').click();
  cy.get(selectors.checkboxNaoAmbienteIsolado).check()
  cy.get(selectors.justificativaNaoIsolamento).should('exist')
  cy.get(selectors.checkboxSimAmbienteIsolado).click()
  cy.get(selectors.checkboxSimAmbientePreservado).check()
  cy.get(selectors.secaoResponsavelPreservacaoLocal).should('exist').and('contain', 'Responsável pela Preservação do Local')
  cy.get(selectors.checkboxNaoAmbientePreservado).check()
  cy.get(selectors.justificativaNaoPreservacao).should('exist')
  cy.get(selectors.justificativaNaoPreservacao).type('Vestígio criado para automação')
  cy.get(selectors.obsPreservacaoLocal).type('Vestígio criado para automação')
  cy.get(selectors.localizacaoVisualizacaoVestigio).type('Valéria')
  cy.contains('button', 'Próximo').click()
  cy.wait('@requestProximo', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
  // parei a partir daqui, apenas atualizar os seletores dos trechos abaixo para continuar registro de vestigio do DPT
  cy.get(selectors.matriculaResponsavelColetaRegistroDPT).should('have.value', '55566677            ')
  cy.get(selectors.nomeResponsavelColetaRegistroDPT).should('have.value', 'USUÁRIO PARA AUTOMAÇÃO')
  cy.get(selectors.cargoResponsavelColetaRegistroDPT).should('have.value', 'Funcionário Civil')
  cy.get(selectors.unidadeResponsavelColetaRegistroDPT).should('have.value', 'CRPT  Barreiras')





  // cy.get(selectors.campoLocalizacaoRegistroVestigio).type('Valeria')
  // cy.contains('button', 'Próximo').click()
  // cy.wait('@requestProximoRegistro', {timeout: 15000}).then((interception) => {
  //     expect(interception.response.statusCode).to.equal(200);
  // cy.get(selectors.matriculaResponsavelColetaVisualizacao).should('have.value', '92107851            ')
  // cy.get(selectors.campoResponsavelColetaRegistro).should('have.value', 'IGOR CARVALHO AMARAL DE SANTANA')
  // cy.get(selectors.cargoResponsavelColetaVisualizacao).should('have.value', 'Funcionário Civil')
  // cy.get(selectors.campoUnidadeColetaRegistro).should('have.value', '11ª CIPM - Barra')
  // cy.get(selectors.checkboxImediatoRegistro).check();
  // cy.get(selectors.descPosicaoVestigioVisualizacao).type('Vestígio criado pela automação')
  // const numeroAleatorio = Math.floor(10000 + Math.random() * 90000);
  // cy.get(selectors.numeroVestigioVisualizacao).type(numeroAleatorio.toString())
  // cy.get(selectors.numeroLacreVisualizacao).type(numeroAleatorio.toString())
  // cy.xpath(selectors.botaoAdicionarVestigioRegistro).click()
  // cy.xpath(selectors.dropDownTipoVestigioRegistro).should('be.visible').click()
  // cy.wait(1000)
  // cy.xpath(selectors.listaDropDownTipoVestigioRegistro).should('be.visible').contains('Explosivo').click()
  // cy.xpath(selectors.botaoSalvarTipoVestigioRegistro).click()
  // cy.xpath(selectors.botaoAdicionarVestigioRegistro).should('contain.text', 'Explosivo')
  // cy.get(selectors.campoDescricaoVestigioRegistro).type('Vestígio criado pela automação')
  // cy.get(selectors.checkboxCriminalNaturezaExameRegistro).check()
  // cy.contains('button', 'Próximo').click()
  // cy.xpath(selectors.campoTipoProcedRelacionadoRegistro).click()
  // cy.xpath(selectors.listaDropDownProcedRelacionadoRegistro).should('be.visible').contains('Boletim de Ocorrência').click()
  // cy.get(selectors.numeroProcedRelacionadoRegistro).type(numeroAleatorio.toString())
  // cy.xpath(selectors.unidadeProcedRelacionadoRegistro).type('unidade teste')
  // cy.get(selectors.autoridadeProcedRelacionadoRegistro).type('teste')
  // cy.contains('button', 'Concluir').click()
  // cy.contains('Deseja registrar outro vestígio?')
  // cy.xpath(selectors.naoDesejaRegistrarOutroVestigio).click()
  // cy.get(selectors.moduloConsultaDeVestígios, {timeout:15000}).should('be.visible').click()
  // cy.xpath(selectors.botaoMeusVestigios, {timeout:15000}).should('be.visible').click()
  // cy.contains('Tipo de vestígio: Explosivo')
  // cy.get(selectors.botaoLiberarVestigio, {timeout:15000}).should('be.visible').click()
  // cy.xpath(selectors.simLiberarVestigio, {timeout:15000}).should('be.visible').click()
  // cy.contains('Vestígio encerrado com sucesso.')
  })
})
