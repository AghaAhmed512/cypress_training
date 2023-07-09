/// <reference types="Cypress" />

describe('Home Test',()=>{
it('Open the home page and verify the url and title',()=>{
    //open home page
    cy.visit('https://practice.automationbro.com')

    // assert the url
    cy.url().should("include","automationbro")

    //assert the title
    cy.title().should('eq','Practice E-Commerce Site – Automation Bro')

});

it('Click the get started button and assert the url',()=>{
    //click the button
    cy.get('#get-started').click()

    //assert the url 
    cy.url().should('include','#get-started')

});

})