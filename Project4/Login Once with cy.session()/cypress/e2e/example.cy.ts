/// <reference types="Cypress" />
it('Cypress login1',()=>{
// cy.visit('https://demoblaze.com/');
cy.visit('/');
cy.get('#login2').click();
cy.get('#loginusername').clear().type('test');
cy.get('#loginpassword').clear().type('test');
cy.get('[onclick="logIn()"]').click();
cy.get('#nameofuser').should('contain', 'Welcome test');
});
it('Cypress login2',()=>{
    // cy.visit('https://demoblaze.com/');
    cy.visit('/');
    cy.get('#login2').click();
    cy.get('#loginusername').clear().type('test');
    cy.get('#loginpassword').clear().type('test');
    cy.get('[onclick="logIn()"]').click();
    cy.get('#nameofuser').should('contain', 'Welcome test');
});