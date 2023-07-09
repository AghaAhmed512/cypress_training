/// <reference types="Cypress" />

export class MyLoginPage{
    login_locator_enterEmail = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_enterPassword = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_loginButton = '[align="right"] > .MuiButtonBase-root > .MuiButton-label'
    
     
        navigateToUrl(url:string){
            cy.visit(url)
        }

        
    
        enterEmail(email:string){
            cy.get(this.login_locator_enterEmail).type(Cypress.env(email));
        }
    
        enterPassword(password:string){
            cy.get(this.login_locator_enterPassword).type(Cypress.env(password));
        }
    
        clickLoginButton(){
            cy.get(this.login_locator_loginButton).click()
        }
    }