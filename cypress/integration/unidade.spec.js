/// <reference types="cypress" />


describe ('unidade', () => {
    it('validar nome da unidade', () => {

        // Acessa home page
        cy.visit('https://www.fleury.com.br');

        // Verificação que o elemento está visível
        // Clica no menu unidades
        cy.contains('Unidades')
        .should('be.visible')
        cy.contains('Unidades')
        .click()

        // Filtra por facilidade
        cy.get('#checkoox-select-facilities')
        .click();
        cy.contains('Acessibilidade')
        .click();

        // Aciona opção ver detalhes
        cy.get('#button-see-on-map-2-vila-mariana > div:nth-child(1)')
        .click();

        // Valida o nome da unidade na tela
        cy.contains('.typographycomponentstyle__H1-sc-1oox73n-1', 'Vila Mariana')
        .should('be.visible');

        
    });
    

});