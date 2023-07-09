/// <reference types="Cypress" />

it('Google Test',()=>{
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf',{timeout:6000}).type('Automation Step by Step{enter}')
    cy.wait(4000)
    cy.contains('Videos').click()
    cy.wait(4000)
    cy.get(':nth-child(1) > :nth-child(1) > .g > :nth-child(1) > video-voyager > :nth-child(1) > .ct3b9e > .DhN8Cf').click()
})

it.only('Login Test',()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

cy.get('.oxd-button').click()

cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()

cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()


cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()

cy.get('.oxd-button').click()

cy.get(':nth-child(2) > .oxd-input').type('Developer')

cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Webdeveloper')

cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('HTML,CSS,JS')


cy.get('.oxd-button--secondary').click()




})