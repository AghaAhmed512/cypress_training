/// <reference types="Cypress" />
import { LoginPage } from "./pages/should_loginpage"; 

const loginpage = new LoginPage()
describe('Test for Workstream',()=>{
    const email = Cypress.env("email");
    const password = Cypress.env("password");
    beforeEach(()=>{
       cy.fixture('testData.json').then((data)=>{
        loginpage.navigateToUrl(data.url);
    });
});
    it('Login',()=>{
        loginpage.typingEmail(email);
        cy.log('Typing the email id');

        loginpage.typingPassword(password);
        cy.log('Typing the password');
 
        loginpage.clickLoginButton();
        cy.log('Clicking to the login button');

        cy.url().should('include','/home');
        cy.log('Checking the URL includes "/home"');
    });

});
