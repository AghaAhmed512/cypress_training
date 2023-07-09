/// <reference types="Cypress" />

export class LoginPage{
    // CSS selector for the email input field
    loginInputEmailLocator = 'input[type="text"]';
    // CSS selector for the password input field
    loginInputPasswordLocator = 'input[type="password"]';
    // CSS selector for the login button
    loginButtonLocator =' button[type="submit"]';
        
/**
* Navigate to the specified URL.
* @param {string} url - The URL to visit.
* @returns {void}
*/   

navigateToUrl(url:string): void {
    cy.visit(url)
    }
/**
* Typing the email address into the login form.
* @param {string} email - The email address to enter.
* @returns {void}
*/   
    
typingEmail(email:string):void {
    cy.get(this.loginInputEmailLocator).type(email)
}

/**
   * Typing the password into the login form.
   * @param {string} password - The password to enter.
   * @returns {void}
*/
typingPassword(password:string): void {
    cy.get(this.loginInputPasswordLocator).type(password)
}
/**
* Click the login button in the login form.
* @returns {void}
*/    
clickLoginButton():void{
    cy.get(this.loginButtonLocator).click()
}

}
    