export class LoginPage {
  
    // CSS selector for the email input field
    loginInputEmailLocator = 'input[type="text"]';
    // CSS selector for the password input field
    loginInputPasswordLocator = 'input[type="password"]';
    // CSS selector for the login button
    loginButtonLocator = 'button[type="submit"]';
  
/**
* Navigates to the specified URL.
* @param {string} url - The URL to visit.
* @returns {void}
*/    
    navigateToUrl(url: string):void {
    cy.visit(url);
    }
  
/**
* Types the email address into the login form.
* @param {string} email - The email address to enter.
* @returns {void}
*/    
    typingEmail(email: string):void {
      cy.get(this.loginInputEmailLocator).type(email);
      cy.wait(2000)
    }
/**
* Types the password into the login form.
* @param {string} password - The password to enter.
* @returns {void}
*/  
   
    typingPassword(password: string):void {
      cy.get(this.loginInputPasswordLocator).type(password);
      cy.wait(2000)
    }
/**
* Clicks the login button in the login form.
* @returns {void}
*/  
    
    clickLoginButton():void {
      cy.get(this.loginButtonLocator).click();
      cy.wait(2000)
    }
  
/**
* Asserts the login outcome.
* @param {boolean} isValid -  indicating whether the login is valid or not.
* @returns {void}
*/

    assertLogin(isValid: boolean):void {
      if (isValid) {
        cy.url().should('include', 'home/');
      } else {
        cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
      }
    }
  
/**
* Clears the email and password fields in the login form.
* @returns {void}
*/  
    clearFields():void {
      cy.get(this.loginInputEmailLocator).clear()
      cy.get(this.loginInputPasswordLocator).clear()
    }
  }