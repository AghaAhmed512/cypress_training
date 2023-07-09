/// <reference types="Cypress" />

beforeEach(()=>{
     cy.login('test','test');
})

it('Cypress login1',()=>{
    cy.visit('/');
    cy.get('#nameofuser').should('contain', 'Welcome test');
});
it('Cypress login2',()=>{
    cy.visit('/');
    cy.get('#nameofuser').should('contain', 'Welcome test');
});