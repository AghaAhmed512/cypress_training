export class LoginPage {
// Define the locators for email and password input field, and login button

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

navigateToUrl(url: string){
        cy.visit(url);
}

/**
* Typing the email address into the login form.
* @param {string} email - The email address to enter.
* @returns {void}
*/

typingEmail(email:string){
        cy.get(this.loginInputEmailLocator).type(email);
}

/**
* Typing the password into the login form.
* @param {string} password - The password to enter.
* @returns {void}
*/

typingPassword(password:string){
        cy.get(this.loginInputPasswordLocator).type(password);
}

/**
* Click the login button in the login form.
* @returns {void}
*/

clickLoginButton(){
        cy.get(this.loginButtonLocator).click();
}

 /**
   * Asserts the login outcome based on the provided validity flag.
   * @param {boolean} isValid - The validity flag indicating login success or error.
   * @returns {void}
   */

assertLogin(isValid:boolean){
    if (isValid) {
        cy.url().should('include', 'home/');
    } else {
        cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
    }
}

// LoginSuccess(){
//         cy.url().should('include', 'home/');
//     }

// /**
//    * Asserts This user does not exist.
// */    
// LoginError(){
//         cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
// }
   

}
