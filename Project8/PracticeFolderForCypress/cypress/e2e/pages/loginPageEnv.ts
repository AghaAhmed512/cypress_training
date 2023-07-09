/// <reference types="Cypress" />

export class LoginPage{
//declares a class named LoginPage, which represents the page object for the login page.

login_locator_enterEmail = 'input[type="text"]';
//defines a property named login_locator_enterEmail that holds a CSS selector
//for the email input field on the login page.

login_locator_enterPassword = 'input[type="password"]';
//defines a property named login_locator_enterPassword that holds a CSS selector
//for the password input field on the login page.   

login_locator_loginButton =' button[type="submit"]';
//defines a property named login_locator_loginButton that holds a CSS selector
//for the login button on the login page.   
        
         
navigateToUrl(url: string){
        cy.visit(url);
}//This is a method named navigateToUrl() that takes a string parameter url,
//and uses the Cypress cy.visit() command to navigate to the specified URL

enterEmail(email:string){
        cy.get(this.login_locator_enterEmail).type(email);
}// This is a method named enterEmail() that takes a string parameter email, and uses the Cypress
//  cy.get() and .type() commands to locate the email input field using the login_locator_enterEmail
//  selector and type the email value into it.
        

enterPassword(password:string){
        cy.get(this.login_locator_enterPassword).type(password);
}//This is a method named enterPassword() that takes a string parameter password, and uses the Cypress
// cy.get() and .type() commands to locate the password input field using the login_locator_enterPassword
// selector and type the password value into it.
        

clickLoginButton(){
        cy.get(this.login_locator_loginButton).click()
}//This is a method named clickLoginButton() that uses the Cypress cy.get() and .click() commands to locate the
// login button using the login_locator_loginButton selector and click on it to initiate the login process.
      
}