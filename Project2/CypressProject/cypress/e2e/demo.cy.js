/// <reference types="Cypress" />
describe('Suite',()=>{

    it('Verify Google Title',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        cy.get('.gLFyf').type('ebay{enter}')
        cy.wait(4000)
        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()
    
    })
})