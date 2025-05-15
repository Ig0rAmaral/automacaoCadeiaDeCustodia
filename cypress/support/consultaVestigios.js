/// <reference types="Cypress" />

import selectors from "./selectors";

Cypress.Commands.add ('consultaVestigioData', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?dataInicial=.*&dataFinal=.*/).as('requestPesquisa');
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.dataInicialConsulta).type('19/08/2024')
    cy.get(selectors.dataFinalConsulta).type('19/08/2024')
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT"))
})
})

Cypress.Commands.add ('consultaVestigioLacre', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?lacre=.*/).as('requestPesquisa');
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.numeroLacreConsulta).type(Cypress.env("numeroLacre"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT"))
})
})

Cypress.Commands.add ('consultaVestigioCodigoRastreamento', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?rastreamento=.*/).as('requestPesquisa');
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioDPT"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT"))
})
})

Cypress.Commands.add ('consultaVestigioNomePreservacao', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?nomePreservacao=.*/).as('requestPesquisa');
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.nomeResponsavelPreservacaoConsulta).type(Cypress.env("nomeResponsavelPreservacao"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT"))
})
})

Cypress.Commands.add ('consultaVestigioMatriculaPreservacao', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?matriculaPreservacao=.*/).as('requestPesquisa');
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.matriculaResponsavelPreservacaoConsulta).type(Cypress.env("matriculaResponsavelPreservacao"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT"))
})
})

Cypress.Commands.add ('consultaVestigioNomeColeta', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?nomeColeta=.*/).as('requestPesquisa');
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.nomeResponsavelColetaConsulta).type(Cypress.env("nomeResponsavelColeta"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("nomeResponsavelColeta"))
})
})

Cypress.Commands.add ('consultaVestigioMatriculaColeta', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?matriculaColeta=.*/).as('requestPesquisa');
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.matriculaResponsavelColetaConsulta).type(Cypress.env("matriculaResponsavelColeta"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("nomeResponsavelColeta"))
})
})

Cypress.Commands.add ('consultaVestigioInexistente', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?rastreamento=.*/).as('requestPesquisa');
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.codigoRastreamentoConsulta).type('Teste')
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains('Nenhum vestígio encontrado')
})
})

Cypress.Commands.add ('limparCamposConsulta', () => {
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
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

Cypress.Commands.add ('consultaVisualizaVestigioPadrao', () => {
    cy.intercept('GET', /\/api2\/vestigios\/filtro\?rastreamento=.*/).as('requestPesquisa');
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioPadrao"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioPadrao"))
    cy.intercept('GET', /\/api2\/vestigios\/permissao-editar\/\d+\?/).as('requestVisualizacao');
    cy.get(selectors.botaoVisualizarVestigio).click()
    cy.wait('@requestVisualizacao', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
    cy.contains('Dados do Local do Crime')
    cy.contains('Condição do Local')
    cy.get(selectors.localizacaoVisualizacaoVestigio).should('have.value', 'Itapuã')
    cy.get(selectors.botaoProximoVisualizacao1).click()
    /cy.contains('Coleta e Acondicionamento do Vestígio')
    cy.contains('Responsável pela Coleta e Acondicionamento')
    cy.get(selectors.matriculaResponsavelColetaVisualizacao).should('have.value', '92107851')
    cy.get(selectors.nomeResponsavelColetaVisualizacao2).should('have.value', 'IGOR CARVALHO AMARAL DE SANTANA')
    cy.get(selectors.cargoResponsavelColetaVisualizacao).should('have.value', 'Funcionário Civil')
    cy.get(selectors.unidadeResponsavelColetavisualizacao2).should('have.value', '11ª CIPM - Barra')
    cy.contains('Posição do Vestígio no Local do Crime')
    cy.xpath(selectors.checkboxImediatoPosicaoVestigioVisualizacao).should('be.checked')
    cy.xpath(selectors.checkboxMediatoPosicaoVestigioVisualizacao).should('not.be.checked')
    cy.xpath(selectors.checkboxRelacionadoPosicaoVestigioVisualizacao).should('not.be.checked')
    cy.get(selectors.descPosicaoVestigioVisualizacao).should('have.value', 'Vestígio para automação de testes')
    cy.get(selectors.numeroVestigioVisualizacao).should('have.value', '888222')
    cy.get(selectors.numeroLacreVisualizacao).should('have.value', '999666')
    cy.get(selectors.dataColetaPosicaoVestigioVisualizacao2).should('have.value', '27/08/2024')
    cy.get(selectors.horaColetaPosicaoVestigioVisualizacao2).should('have.value', '14:11')
    cy.get(selectors.campoVestigiosVisualizacao).should('contain.text', 'Celulares')
    cy.get(selectors.olhoCampoVestigiosVisualizacao).click()
    cy.xpath(selectors.checkboxQntdAproximadaVisualizacao, {timeout: 15000}).should('not.be.checked')
    cy.get(selectors.tipoDeVestigioModalVisualizacao2).should('contain.text', 'Celulares')
    cy.get(selectors.subtipoVestigioModalVisualizacao2).should('contain.text', 'Celulares')
    cy.get(selectors.qntdTipoVestigioModalVisualizacao2).should('contain.value', '1')
    cy.get(selectors.unidadeMedidaTipoVestigioModalVisualizacao2).should('contain.text', 'UNIDADE')
    cy.get(selectors.modeloTipoVestigioVisualizacao).should('have.value', '14pro')
    cy.get(selectors.fechaModalTipoVestigioVisualizacao2).click()
    cy.get(selectors.descricaoVestigioVisualizacao).should('contain.text', 'Vestígio para automação de testes')
    cy.contains('Natureza do Exame')
    cy.xpath(selectors.checkboxSimNaturezaExameVisualizacao).should('be.checked')
    cy.xpath(selectors.checkboxNaoNaturezaExameVisualizacao).should('not.be.checked')
    cy.intercept('GET', '**/api2/vestigios/procedimentos/*').as('proximaPagina')
    cy.get(selectors.botaoProximoVisualizacao2).click()
    cy.wait('@proximaPagina', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
    cy.contains('Informações Polícia Judiciária/Corregedoria')
    cy.contains('Procedimentos Relacionados')
    cy.get(selectors.tipoProcedimentoRelacionadoVisualizacao).should('contain.text', 'Auto de Ato Infracional')
    cy.get(selectors.numeroProcedimentoRelacionadoVisualizacao).should('contain.text', '555557')
    cy.get(selectors.unidadeProcedimentoRelacionadoVisualizacao).should('contain.text', 'unidade teste')
    cy.get(selectors.autoridadeProcedimentoRelacionadoVisualizacao).should('contain.text', 'teste')
    cy.xpath(selectors.botaoExcluirProcedimentoRelacionadoVisualizacao).should('be.disabled')
})
})
})

Cypress.Commands.add('permissaoVisualizarVestigio', () => {
    cy.intercept('GET', '**/api2/vestigios/filtro*').as('requestPesquisa');
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioDPT2"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT2"))
    cy.get(selectors.botaoVisualizarVestigio).should('not.exist')
})
})

Cypress.Commands.add('loginComoDPT', () => {
    cy.get(selectors.campoUsuarioLogin).type(Cypress.env('usuarioDPT'))
    cy.get(selectors.campoSenhaLogin).type(Cypress.env('senhaDPT'))
    cy.intercept('POST', '**/authentication').as('loginHome')
    cy.get(selectors.botaoEntrarLogin).click()
    cy.wait('@loginHome', {timeout: 15000})
})

Cypress.Commands.add ('consultaVisualizaVestigioDPT', () => {
    cy.intercept('GET', '**/api2/vestigios/filtro*').as('requestPesquisa');
    cy.wait(500)
    cy.get(selectors.moduloCadeiaDeCustodia, {timeout: 15000}).should('be.visible').click()
    cy.get(selectors.moduloConsultaDeVestígios, {timeout: 15000}).should('contain', 'Consulta de Vestígios')
    cy.get(selectors.moduloConsultaDeVestígios).click()
    cy.get(selectors.tituloConsultaVestigios, {timeout: 15000}).should('have.text', 'Cadeia de Custódia > Consulta de Vestígios')
    cy.get(selectors.codigoRastreamentoConsulta).type(Cypress.env("codigoVestigioDPT2"))
    cy.get(selectors.botaoPesquisarConsulta).click()
    cy.wait('@requestPesquisa', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
    cy.contains(Cypress.env("codigoVestigioDPT2"))
    cy.intercept('GET', '**/api2/vestigios/permissao-editar/*').as('requestVisualizacao');
    cy.get(selectors.botaoVisualizarVestigio).click()
    cy.wait('@requestVisualizacao', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
    });
    cy.contains('Dados do Local do Crime')
    cy.get(selectors.localizacaoVisualizacaoVestigio).should('have.value', 'Itapuã')
    cy.contains('Responsável pela Preservação do Local')
    cy.get(selectors.matriculaResponsavelPreservacaoVisualizacao).should('have.value', '92107851')
    cy.get(selectors.nomeResponsavelPreservacaoVisualizacao).should('have.value', 'Igor Teste')
    cy.get(selectors.cargoResponsavelPreservacaoVisualizacao).should('contain.text', 'Funcionário Civil')
    cy.get(selectors.unidadeResponsavelPreservacaoVisualizacao).should('have.value', '10ª DT - Pau da Lima')
    cy.get(selectors.dataChegadaResponsavelPreservacaoVisualizacao).should('have.value', '12/09/2024')
    cy.get(selectors.horaChegadaResponsavelPreservacaoVisualizacao).should('have.value', '15:02')
    cy.intercept('GET', '**/api2/vestigios/*').as('requestProximo');
    cy.get(selectors.botaoProximoVisualizacao1).click()
    cy.wait('@requestProximo', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
    cy.contains('Coleta e Acondicionamento do Vestígio')
    cy.contains('Responsável pela Coleta e Acondicionamento')
    cy.get(selectors.matriculaResponsavelColetaVisualizacao).should('have.value', '55566677')
    cy.get(selectors.nomeResponsavelColetaVisualizacao).should('have.value', 'USUÁRIO PARA AUTOMAÇÃO')
    cy.get(selectors.cargoResponsavelColetaVisualizacao).should('have.value', 'Funcionário Civil')
    cy.get(selectors.unidadeResponsavelColetaVisualizacao).should('have.value', 'CRPT  Barreiras')
    cy.contains('Posição do Vestígio no Local do Crime')
    cy.xpath(selectors.checkboxImediatoPosicaoVestigioVisualizacao).should('be.checked')
    cy.xpath(selectors.checkboxMediatoPosicaoVestigioVisualizacao).should('not.be.checked')
    cy.xpath(selectors.checkboxRelacionadoPosicaoVestigioVisualizacao).should('not.be.checked')
    cy.get(selectors.descPosicaoVestigioVisualizacao).should('have.value', 'Vestígio para automação de testes')
    cy.get(selectors.numeroVestigioVisualizacao).should('have.value', '557789')
    cy.get(selectors.numeroLacreVisualizacao).should('have.value', '455554')
    cy.get(selectors.dataColetaPosicaoVestigioVisualizacao).should('have.value', '12/09/2024')
    cy.get(selectors.horaColetaPosicaoVestigioVisualizacao).should('have.value', '16:15')
    cy.get(selectors.campoVestigiosVisualizacao).should('contain.text', 'Explosivo')
    cy.get(selectors.olhoCampoVestigiosVisualizacao).click()
    cy.xpath(selectors.checkboxQntdAproximadaVisualizacao, {timeout: 15000}).should('not.be.checked')
    cy.xpath(selectors.tipoDeVestigioModalVisualizacao).should('contain.text', 'Explosivo')
    cy.xpath(selectors.subTipoVestigioModalVisualizacao).should('contain.text', 'Explosivo')
    cy.xpath(selectors.qntdTipoVestigioModalVisualizacao).should('contain.value', '1')
    cy.xpath(selectors.unidadeMedidaTipoVestigioModalVisualizacao).should('contain.text', 'UNIDADE')
    cy.xpath(selectors.fechaModalTipoVestigioVisualizacao).click()
    cy.get(selectors.descricaoVestigioVisualizacao).should('contain.text', 'Vestígio para automação de testes')
    cy.contains('Natureza do Exame')
    cy.xpath(selectors.checkboxSimNaturezaExameVisualizacao).should('be.checked')
    cy.xpath(selectors.checkboxNaoNaturezaExameVisualizacao).should('not.be.checked')
    cy.intercept('GET', '**/api2/vestigios/procedimentos/*').as('proximaPagina')
    cy.get(selectors.botaoProximoVisualizacao2).click()
    cy.wait('@proximaPagina', {timeout: 15000}).then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
    cy.contains('Informações Polícia Judiciária/Corregedoria')
    cy.contains('Procedimentos Relacionados')
    cy.get(selectors.tipoProcedimentoRelacionadoVisualizacao).should('contain.text', 'Boletim de Ocorrência')
    cy.get(selectors.numeroProcedimentoRelacionadoVisualizacao).should('contain.text', '445544')
    cy.get(selectors.unidadeProcedimentoRelacionadoVisualizacao).should('contain.text', 'unidade teste')
    cy.get(selectors.autoridadeProcedimentoRelacionadoVisualizacao).should('contain.text', 'teste')
    cy.xpath(selectors.botaoExcluirProcedimentoRelacionadoVisualizacao).should('be.disabled')
})
});
})
})



