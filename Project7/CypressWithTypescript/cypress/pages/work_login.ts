/// <reference types="Cypress" />

export class WorkstreamLoginPage{
login_locator_enterEmail = 'input[type="text"]';
//login_locator_enterEmail = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input';
login_locator_enterPassword = 'input[type="password"]';
//login_locator_enterPassword = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input';
login_locator_loginButton =' button[type="submit"]';
//login_locator_loginButton = '[align="right"] > .MuiButtonBase-root > .MuiButton-label';
    
     
navigateToUrl(url: string){
    cy.visit(url);
    }
  enterEmail(email:string){
    cy.get(this.login_locator_enterEmail).type(email);
  }
    
  enterPassword(password:string){
    cy.get(this.login_locator_enterPassword).type(password);
  }
    
  clickLoginButton(){
    cy.get(this.login_locator_loginButton).click()
  }
  
}