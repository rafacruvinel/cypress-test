

Given(/^que acesso a home page$/, () => {
	cy.visit('/');
});

Then(/^que eu acesso as unidades$/, () => {
	cy.contains('Unidades').should('be.visible');
    cy.contains('Unidades').click();
});

Then(/^seleciono as opções de facilidades$/, () => {
    cy.get('#checkoox-select-facilities').click();
    cy.contains('Acessibilidade').click();

});

When(/^Quando aciono a opção ver detalhes$/, () => {
    cy.get('#button-see-on-map-2-vila-mariana > div:nth-child(1)').click();
	
});

Then(/^Então o sistema apresenta informações da unidade$/, () => {
    cy.contains('.typographycomponentstyle__H1-sc-1oox73n-1', 'Vila Mariana' ).should('be.visible');
    
});
