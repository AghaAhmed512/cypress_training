// Import the neat-csv library for parsing CSV data
//const neatCSV = require('neat-csv');

//const fs = require('fs');
// Import the required modules


// Define the LoginPage class
// export keyword indicates that this class can be accessed from other modules.
export class LoginPage {

    // Define the locators for email and password input field, and login button
    LocatorForEnterEmail:string = 'input[type="text"]';
    LocatorForEnterPassword:string = 'input[type="password"]';
    LocatorForLoginButton:string =' button[type="submit"]';
      

/**
 * Navigates to the specified URL
 * @param {string} url - To visit a URL.
 */
    navigateToUrl(url: string){
        cy.visit(url);
}

/**
 * Reads data from CSV file and returns the data.
 * @returns  returns the parsed data as a Promise.
 */

// readCSVData() {
// //Fetches the fixture file 'users.csv' using Cypress fixture() method    
//     return cy.fixture('users.csv')
// //Parses the fetched CSV data using the 'neat-csv' library
//     .then(neatCSV)
// //Returns the parsed data
//     .then(data => {
//     return data;
//     });
// }


/**
 * Enters the email address into the login form.
 * @param {string} email - It takes a parameter email, which is the email address you enter into the email input field.
 */
enterEmail(email:string){
        cy.get(this.LocatorForEnterEmail).type(email);
}

/**
 *  Enters the password into the login form.
 * @param {string} password - It takes a parameter password, which is the password you enter into the password input field. 
 */
enterPassword(password:string){
        cy.get(this.LocatorForEnterPassword).type(password);
}

/**
 * Clicks the login button in the login form.
 */
clickLoginButton(){
        cy.get(this.LocatorForLoginButton).click();
}
/**
   * Asserts that the current URL includes 'home/'.
*/
LoginSuccess(){
        cy.url().should('include', 'home/');
    }

/**
   * Asserts This user does not exist.
*/    
LoginError(){
        cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
}
   

}

