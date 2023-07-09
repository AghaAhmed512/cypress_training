/// <reference types="Cypress" />
import { MyLoginPage } from "../pages/workstream2"
const myloginpage = new MyLoginPage()
describe('Test for Workstream',()=>{
    
    it('Login',()=>{

    myloginpage.navigateToUrl('https://automation-workstream.arbisoft.com/login/')

    const email = Cypress.env('email');
    const password = Cypress.env('password');

    myloginpage.enterEmail(email);

    myloginpage.enterPassword(password);

    myloginpage.clickLoginButton();

    cy.url().should('include','/home')


    })

})