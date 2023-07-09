/// <reference types="Cypress" />
import loginPage from "./pageObjects/LoginPage";

describe('Test Suite',()=>{
    it('LoginTest',()=>{
        const lp = new loginPage()

        lp.visit()
        lp.enterUsername('standard_user')
        lp.enterPassword('secret_sauce')
        lp.loginButton()
        cy.title().should('be.equal','Swag Labs')

    })

})